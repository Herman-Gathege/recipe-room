
import './App.css';
import Nav from './components/Nav.js';
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Discover from './components/Discover';


function App() {
  return (
   <div>
     
    <BrowserRouter>
    <Nav/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/discover" element={<Discover />} />
      
     
     </Routes>
    </BrowserRouter>

   
    </div>
  );
}

export default App;
