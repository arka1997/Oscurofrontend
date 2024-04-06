import './App.css';
import React, { useState } from 'react';
import Sidenav from './navigation/Sidenav';
import Homepage from './homepage/Homepage';
import FormComponent from './Forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstagramPostCreator from './timeline/posts/AddPost/InstagramPostCreator';
import AddTodo from './components/AddTodo';
import ModalWrapper from './timeline/posts/AddPost/Modal';
import Todos from './components/Todos';
// import Header from './components/Header.js'
// import Middlelayer from './components/Middlelayer.js'
// import Footer from './components/Footer.js'
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div className="App">
    {/* Here we define all the list of Routers. Now how to call them. Suppose you want to make a button to redirect to a page, then just use <Link/> TAGE, AND INSIDE THE COMPONENT MENTION THE PATH nAME that is present inside route */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/formComponent" element={<FormComponent/>} />
          <Route exact path="/instagramPostCreator" element={<InstagramPostCreator/> } />
          <Route exact path="/modalWrapper" element={<ModalWrapper show={showModal} handleClose={handleCloseModal} />} />
          <Route exact path="/addTodo" element={<AddTodo/> } />
        </Routes>
      <Sidenav postCreator={handleOpenModal} />
      </Router>
    </div>
  );
}
export default App;