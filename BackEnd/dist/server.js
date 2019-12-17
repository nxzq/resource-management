"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _fs = _interopRequireDefault(require("fs"));

var _multer = require("./helpers/multer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // enable middleware || pipeline

app.use(_express["default"].json());
app.use((0, _cors["default"])()); // PORT

var PORT = process.env.PORT || 5000; // Mock Data

var getMockData = function getMockData() {
  return JSON.parse(_fs["default"].readFileSync('./MockData/Resources.json', 'utf8'));
}; // GET ALL


app.get('/api/resources', function (req, res) {
  // Get Data
  var resources = getMockData();
  res.send(resources);
}); // GET ALL Skills

app.get('/api/skills', function (req, res) {
  // Get Data
  var resources = JSON.parse(_fs["default"].readFileSync('./MockData/Skills.json', 'utf8'));
  res.send(resources);
}); // GET Table Data

app.get('/api/resources/table', function (req, res) {
  var tableData = []; // Get Data

  var resources = getMockData();
  resources.forEach(function (r) {
    var data = {
      Id: r.Id,
      FirstName: r.FirstName,
      LastName: r.LastName,
      Role: r.Role,
      Email: r.Email,
      Skills: r.Skills
    };
    tableData.push(data);
  });
  res.send(tableData);
}); // GET Resume By ID

app.get('/api/resources/:id/resume', function (req, res) {
  var path = './MockData/Resumes/' + req.params.id + '.pdf';

  try {
    if (_fs["default"].existsSync(path)) {
      res.set({
        'Content-Type': 'application/pdf',
        'Accept': 'application/json'
      });
      res.download(path, 'resume.pdf');
    } else {
      res.status(404).send('The resource with the given ID was not found');
    }
  } catch (err) {
    res.status(404).send('The resource with the given ID was not found');
  }
}); // POST Resume By ID

app.post('/api/resources/:id/resume', _multer.resumeUpload.single('resume'), function (req, res) {
  if (req.invalidFile) {
    res.status(400).send(req.invalidFile);
    return;
  } else if (req.file.size > Math.pow(1000, 2) * 2) {
    res.status(400).send('File too large.');
  }

  res.status(204).end();
}); // HEAD Resume headers

app.head('/api/resources/:id/resume', function (req, res) {
  var path = './MockData/Resumes/' + req.params.id + '.pdf';

  if (_fs["default"].existsSync(path)) {
    var stats = _fs["default"].statSync(path);

    res.set({
      'Content-Type': 'application/pdf',
      'Accept': 'application/json',
      'Content-Disposition': 'attachment; filename="resume.pdf"',
      'Content-Length': stats.size
    });
    res.status(200).end();
  } else {
    res.status(404).end();
  }
}); // GET Resource By ID

app.get('/api/resources/:id', function (req, res) {
  // Get Data
  var resources = getMockData(); // Find Resource

  var resource = resources.find(function (r) {
    return r.Id === parseInt(req.params.id);
  }); // 404 Not Found

  if (!resource) return res.status(404).send('The resource with the given ID was not found');
  res.send(resource);
}); // POST Resource By ID

app.post('/api/resource', function (req, res) {
  // 400 Bad Request
  // if (error) return res.status(400).send(result.error.details[0].message);
  // Get Data
  var resources = getMockData();
  var resource = req.body.data;
  resource.Id = Math.max.apply(Math, resources.map(function (o) {
    return o.Id;
  })) + 1;
  resources.push(resource);
  res.send(resource);

  _fs["default"].writeFileSync('./MockData/Resources.json', JSON.stringify(resources));
}); // UPDATE Resource By ID

app.put('/api/resources/:id', function (req, res) {
  // Get Data
  var resources = getMockData(); // Find Resource

  var resource = resources.find(function (r) {
    return r.Id === parseInt(req.params.id);
  }); // 404 Not Found

  if (!resource) return res.status(404).send('The resource with the given ID was not found'); // Update Resource

  resource = req.body.data;
  var update = resources.findIndex(function (x) {
    return x.Id == resource.Id;
  });
  resources[update] = resource;
  res.send(resource);

  _fs["default"].writeFileSync('./MockData/Resources.json', JSON.stringify(resources));
}); // // DELETE Resource By ID [{NOT CURRNENTLY WORKING}]
// app.delete('/api/resources/:id', (req, res) => {
//     // Find Resource
//     let resource = resources.find(r => r.Id === parseInt(req.params.id));
//     // 404 Not Found
//     if (!resource) return res.status(404).send('The resource with the given ID was not found');
//     // Delete
//     let index = resources.indexOf(resource);
//     resources.splice(index, 1);
//     // Return
//     res.send(resource);
// });
// PORT
// LocalHost

app.listen(PORT, function () {
  console.log("Listening on port ".concat(PORT, "..."));
}); // // Yash Network (New Office)
// app.listen(5000, '10.27.12.207');
// // Yash Network (Old Office)
// app.listen(5000, '10.1.100.119');