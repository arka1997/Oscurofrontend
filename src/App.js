import './App.css';
import React from 'react';
import Homepage from './homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import ModalWrapper from './timeline/posts/AddPost/ModalWrapper';
// import Header from './components/Header.js'
// import Middlelayer from './components/Middlelayer.js'
// import Footer from './components/Footer.js'
function App() {

  return (
    <div className="App">
    {/* Here we define all the list of Routers. Now how to call them. Suppose you want to make a button to redirect to a page, then just use <Link/> TAGE, AND INSIDE THE COMPONENT MENTION THE PATH nAME that is present inside route */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          {/* <Route exact path="/modalWrapper" element={<ModalWrapper showModal={true}/>} /> */}
          <Route exact path="/addTodo" element={<AddTodo/> } />
        </Routes>
      </Router>
    </div>
  );
}
export default App;