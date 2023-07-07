import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Index';
import Home from './components/Home/Index'; 
import About from './components/About/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Layout />} >
      <Route index element={ < Home  />} />
      <Route path='about' element={ < About />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
