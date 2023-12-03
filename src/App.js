import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './components/views/home/Home';
import Catalogue from './components/views/catalogue/Catalogue';
import Contact from './components/views/contact/Contact';
import Detail from './components/views/catalogue/detail/Detail';
import Error from './components/views/error/Error';

function App() {

  const location = useLocation();
  const hideFooter = location.pathname.includes('/contacto');

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogo' element={<Catalogue/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/*' element={<Error/>}/>
      </Routes>
      {!hideFooter && <Footer/>}
    </div>
  );
}

export default App;
