import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Overview from './pages/Overview';
import Resources from './pages/Resources';
import Help from './pages/Help';
import Settings from './pages/Settings';
import AddResource from './pages/AddResource';
import EditResource from './pages/EditResource';
import Profile from './pages/Profile';
import Footer from './components/layout/Footer';

function App() {

  const [DarkTheme, setDarkTheme] = useState(false);
  const toggleDarkTheme = () => setDarkTheme(!DarkTheme);

  return (
    <BrowserRouter>
      <div className="App">
        {DarkTheme ? <link rel="stylesheet" type="text/css" href='./DarkTheme.css' /> : ''}
        <NavBar DarkTheme={DarkTheme}/>
        <Route exact path='/' component={Overview} />
        <Route path='/resources' component={Resources} />
        <Route path='/help' component={Help} />
        <Route path='/settings' render={(props) => <Settings {...props} toggleDarkTheme={toggleDarkTheme} DarkTheme={DarkTheme} />} />
        <Route path='/addresource' component={AddResource} />
        <Route path='/editresource/:id' component={EditResource} />
        <Route path='/profile/:id' component={Profile} />
        <br />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;