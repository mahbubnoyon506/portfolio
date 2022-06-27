
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import ProjectDetail from './Components/AllProjects.js/ProjectDetail';
import MouseParticles from 'react-mouse-particles'



function App() {

  
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Navbar></Navbar>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='skills' element={<Skills></Skills>}></Route>
            <Route path='projects' element={<Projects></Projects>}></Route>
            <Route path='education' element={<Education></Education>}></Route>
            <Route path='experience' element={<Experience></Experience>}></Route>
            <Route path='blogs' element={<Blogs></Blogs>}></Route>
            <Route path='contact' element={<Contact></Contact>}></Route>
          </Route>
          <Route path='/projectdetail/:id' element={<ProjectDetail></ProjectDetail>}></Route>
        </Routes>       
        <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
    </div>
  );
}

export default App;
