import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Index';
import Home from './components/Home/Index';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Layout />} >
      <Route index element={ < Home  />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
