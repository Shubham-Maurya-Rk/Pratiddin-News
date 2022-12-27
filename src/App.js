import './App.css';
import React, { Component } from 'react';
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor (){
    super();
    this.state={
      country:"in",
      pageSize:6
    }
  }
  render() {
    return (<>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="home" pageSize={this.state.pageSize} category="general" country={this.state.country} />}/>
          <Route path="/business" element={<News key="business" pageSize={this.state.pageSize} category="business" country={this.state.country} />}/>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={this.state.pageSize} category="entertainment" country={this.state.country} />}/>
          <Route path="/general" element={<News key="general" pageSize={this.state.pageSize} category="general" country={this.state.country} />}/>
          <Route path="/health" element={<News key="health" pageSize={this.state.pageSize} category="health" country={this.state.country} />}/>
          <Route path="/science" element={<News key="science" pageSize={this.state.pageSize} category="science" country={this.state.country} />}/>
          <Route path="/sports" element={<News key="sports" pageSize={this.state.pageSize} category="sports" country={this.state.country} />}/>
          <Route path="/technology" element={<News key="technology" pageSize={this.state.pageSize} category="technology" country={this.state.country} />}/>
        </Routes>
      </Router>
    </>);
  }
}