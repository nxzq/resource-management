import 'core-js/stable';
import 'regenerator-runtime/runtime';
import cluster from 'cluster';
import cors from 'cors';
import express from 'express';
import os from 'os';
import routes from './routes';
import { validGet } from './helpers';

// Cluster for better performance and uptime
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running.`);
  const maxCores = process.env.MAX_CORES || 1;
  for (let i = 0; i < Math.min(Number(maxCores), os.cpus().length); i++) {
    cluster.fork();
  }

  // start new worker after crash
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with exit code (${code}): ${signal || 'no signal'}`);
    cluster.fork();
  });

} else {
  const app = express();

  // enable middleware || pipeline
  app.use(express.json());
  app.use(cors());
  app.use('/api', routes);
  // handle exceptions caught by express
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.status(validGet(err, 'statusCode', 'status') || 500)[validGet(err, 'statusCode', 'responseType') || 'send'](validGet(err, 'statusCode', 'message') || 'Internal Server Error');
    console.error(err.stack);
    if (!err.isOperational) {
      // TODO: log to logging service
      process.exit(1);
    } // else okay
  });

  const PORT = process.env.PORT || 5000;

  // requests will be balanced between cores so use the same port
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} listening on port ${PORT}...`);
  });

  process.on('uncaughtException', (error) => {
    console.error(error.stack);
    if (!error.isOperational) {
      // TODO: log to logging service
      process.exit(1);
    } // else okay
  });
}