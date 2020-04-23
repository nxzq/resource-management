import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import Overview from '../views/Overview';
import Resources from '../views/Resources';
import Help from '../views/Help';
import Settings from '../views/Settings';
import AddResource from '../views/AddResource';
import EditResource from '../views/EditResource';
import Profile from '../views/Profile';
import Footer from '../components/layout/Footer';
import FilterContextProvider from '../contexts/FilterContext';

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