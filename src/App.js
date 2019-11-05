import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Overview from './pages/Overview';
import Resources from './pages/Resources';
import AddResource from './pages/AddResource';
import Profile from './pages/Profile';
import AddJob from './pages/AddJob';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Header />
        <Route exact path='/' component={Overview} />
        <Route path='/resources' component={Resources} />
        <Route path='/addresource' component={AddResource} />
        <Route path='/addjob' component={AddJob} />
        <Route path='/profile' component={Profile} />
        <br />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
