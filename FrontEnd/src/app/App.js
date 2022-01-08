import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from '../components/layout/NavBar/NavBar'
import Resources from '../components/views/Resources/Resources'
import Help from '../components/views/Help/Help'
import Settings from '../components/views/Settings/Settings'
import AddResource from '../components/views/AddResource/AddResource'
import EditResource from '../components/views/EditResource/EditResource'
import Profile from '../components/views/Profile/Profile'
import Footer from '../components/layout/Footer/Footer'
import PageNotFound from '../components/errors/PageNotFound/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <NavBar />
          </div>
          <div className="main">
            <Switch>
              <Route path="/" exact component={Resources} />
              <Route path="/help" exact component={Help} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/addresource" exact component={AddResource} />
              <Route path="/editresource/:id" component={EditResource} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="*" exact component={PageNotFound} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
