import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Index';
import Home from './components/Home/Index'; 
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ProjectSection from './components/Project-Section/Project';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Layout />} >
      <Route index element={ < Home  />} />
      <Route path='about' element={ < About />} />
      <Route path='contact' element={ < Contact />} />
      <Route path='project' element={ < ProjectSection />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
