import Layout from './Layout'
import './App.css'
import Navbar2 from './Navbar2'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/contact';
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
    <Navbar2/>
    <hr/>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/contact" element={<Contact/>}/>

    

    </Routes>
   
      
    </>
  )
}

export default App
