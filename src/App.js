import './App.css';
import React from 'react';
import Homepage from './homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className="App">
    {/* Here we define all the list of Routers. Now how to call them. Suppose you want to make a button to redirect to a page, then just use <Link/> OR <Route /> TAG, AND INSIDE THE COMPONENT MENTION THE PATH nAME that is present inside route */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          {/* <Route exact path="/modalWrapper" element={<ModalWrapper showModal={true}/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;