import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Student from './Component/Student';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/student">Students</Link>
            </li>
          </ul>
          <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 {/* <Route exact path='/student' element={< Student />}></Route> */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
