import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
// import Header from '../components/partials/Header'
import Home from '../components/Home'
import createHistory from 'history/createBrowserHistory';
import Footer from '../components/partials/Footer'
import About from '../components/About'
import FindTutor from '../components/FindTutor'
import Data from '../components/Data'
import Contact from '../components/Contact'
import EditPage from '../components/EditPage'
import NotFound from '../components/NotFound'
import PrivateRoute from './PrivateRoute'

//BrowserRouter has history built in and provides this only to components in BrowserRouter.
//To access history anywhere, use Router and import and setup the history manually.

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/findTutor" component={FindTutor} />
        <PrivateRoute path="/contact" component={Contact} />
        <PrivateRoute path="/data" component={Data} />
        <PrivateRoute path="/editPage/:id" component={EditPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
)


export default AppRouter