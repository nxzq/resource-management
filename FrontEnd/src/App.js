import React from 'react';
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

  return (
    <BrowserRouter>
      <div className="App Site">

        <div className="Site-content">
          <div className="App-header">
            <NavBar />
          </div>
          <div className="main">
            <Route exact path='/' component={Overview} />
            <FilterContextProvider>
              <Route path='/resources' component={Resources} />
            </FilterContextProvider>
            <Route path='/help' component={Help} />
            <Route path='/settings' component={Settings} />
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