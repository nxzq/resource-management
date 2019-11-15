import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Overview from './pages/Overview';
import Resources from './pages/Resources';
import Help from './pages/Help';
import Settings from './pages/Settings';
import AddResource from './pages/AddResource';
import EditResource from './pages/EditResource';
import Profile from './pages/Profile';
import AddJob from './pages/AddJob';
import Footer from './components/Footer';

function App() {

  const [DarkTheme, setDarkTheme] = useState(false);
  const toggleDarkTheme = () => setDarkTheme(!DarkTheme);

  return (
    <BrowserRouter>
      <div className="App">
        {DarkTheme ? <link rel="stylesheet" type="text/css" href='./DarkTheme.css' /> : ''}
        <NavBar />
        <Header />
        <Route exact path='/' component={Overview} />
        <Route path='/resources' component={Resources} />
        <Route path='/help' component={Help} />
        <Route path='/settings' render={(props) => <Settings {...props} toggleDarkTheme={toggleDarkTheme} DarkTheme={DarkTheme} />} />
        <Route path='/addresource' component={AddResource} />
        <Route path='/editresource/:id' component={EditResource} />
        <Route path='/addjob' component={AddJob} />
        <Route path='/profile/:id' component={Profile} />
        <br />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
