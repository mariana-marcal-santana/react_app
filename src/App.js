import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Contacts from './components/pages/Contacts'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" exact Component = {Home} />
          <Route path = "/about" exact Component = {About} />
          <Route path = "/services" exact Component = {Services} />
          <Route path = "/contacts" exact Component = {Contacts} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
