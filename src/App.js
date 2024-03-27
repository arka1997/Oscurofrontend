import './App.css';
import Homepage from './homepage/Homepage';
// import Header from './components/Header.js'
// import Middlelayer from './components/Middlelayer.js'
// import Footer from './components/Footer.js'
import Todo from './Todo';
function App() {
  return (
    <div className="App">
      <Todo/>
      <Homepage/>
    </div>
  );
}

export default App;
