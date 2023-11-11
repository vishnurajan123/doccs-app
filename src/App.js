import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Doccuments from './pages/Doccuments';
import Header from './components/Header';
import Footer from './components/Footer';
import Docs from './components/Docs';

function App(){ 
  
  return (
    <div>
<Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/doccument' element={<Doccuments/>}/>
        <Route path='/docs/:id' element={<Docs/>}/>




      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
