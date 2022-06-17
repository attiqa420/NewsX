import Navbar from './Components/Navbar.js';
import React, { Component } from 'react'
import NewsFeed from './Components/NewsFeed.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
       <Router>

       <Navbar />
      <Switch>
     
          <Route exact path="/">
            <NewsFeed key="1" category="general" />
          </Route>
          <Route exact path="/business">
          <NewsFeed key="2" category="business" />
          </Route>
          <Route exact path="/entertainment">
          <NewsFeed key="3" category="entertainment" />
          </Route>
          <Route exact  path="/health">
          <NewsFeed key="4" category="health" />
          </Route>
          <Route exact path="/science">
          <NewsFeed key="5" category="science" />
          </Route>
          <Route exact path="/sports">
          <NewsFeed key="6" category="sports" />
          </Route>
          <Route exact path="/technology">
          <NewsFeed key="7" category="technology" />
          </Route>
        </Switch>
      </Router>
      </>
    )
  }
}


