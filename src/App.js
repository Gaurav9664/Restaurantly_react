import logo from './logo.svg';
import './App.css';
import Header from '../src/component/Header';
import Footer from '../src/component/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/container/Home';
import Abount from '../src/container/About';
import Events from '../src/container/Events';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abount' element={<Abount />} />
        <Route path='/events' element={<Events />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
