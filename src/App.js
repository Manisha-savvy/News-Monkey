import './App.css';
import { News } from './Components/News';
import React, { Component } from 'react'
import { NavBar } from './Components/NavBar';
// import News apiKey={this.apiKey} from './Components/News apiKey={this.apiKey}';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;

  apiKey='202fcca38be941fc97fb9fdc6a167cde'
// apiKey = process.env.REACT_APP_NEWS_API;

  render() {  
    return (
      <div>
          <Router>
          <NavBar />
          <Switch>
          <Route exact path="/"><News apiKey={this.apiKey} key="general" pageSize={this.pageSize} category = "general"/></Route>
          <Route exact path="/entertainment"><News apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} category = "entertainment"/></Route>
          <Route exact path="/business"><News apiKey={this.apiKey} key="business" pageSize={this.pageSize} category = "business"/></Route>
          <Route exact path="/general"><News apiKey={this.apiKey} key="general" pageSize={this.pageSize} category = "general"/></Route>
          <Route exact path="/health"><News apiKey={this.apiKey} key="health" pageSize={this.pageSize} category = "health"/></Route>
          <Route exact path="/science"><News apiKey={this.apiKey} key="science" pageSize={this.pageSize} category = "science"/></Route>
          <Route exact path="/sports"><News apiKey={this.apiKey} key="sports" pageSize={this.pageSize} category = "sports"/></Route>
          <Route exact path="/technology"><News apiKey={this.apiKey} key="technology" pageSize={this.pageSize} category = "technology"/></Route>
          </Switch>
          </Router>
      </div>
    )
  }
}
