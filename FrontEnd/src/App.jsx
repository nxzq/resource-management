import React, { useState, useEffect } from 'react';
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
import FilterContextProvider from './contexts/FilterContext';

function App() {

  const themePreference = localStorage.getItem('Settings');
  const [DarkTheme, setDarkTheme] = useState(themePreference ? JSON.parse(themePreference) : false);
  const toggleDarkTheme = () => setDarkTheme(!DarkTheme);

  useEffect(() => {
    localStorage.setItem('Settings', JSON.stringify(DarkTheme))
  }, [DarkTheme])

  return (
    <BrowserRouter>
      <div className="App Site">
        {DarkTheme ? <link rel="stylesheet" type="text/css" href='./DarkTheme.css' /> : null}
        <div className="Site-content">
          <div className="App-header">
            <NavBar DarkTheme={DarkTheme} />
          </div>
          <div className="main">
            <Route exact path='/' component={Overview} />
            <FilterContextProvider>
              <Route path='/resources' component={Resources} />
            </FilterContextProvider>
            <Route path='/help' component={Help} />
            <Route path='/settings' render={(props) => <Settings {...props} toggleDarkTheme={toggleDarkTheme} DarkTheme={DarkTheme} />} />
            <Route path='/addresource' component={AddResource} />
            <Route path='/editresource/:id' component={EditResource} />
            <Route path='/profile/:id' component={Profile} />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;