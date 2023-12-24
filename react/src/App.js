import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/men' element={<ShopCategory category="men"/>} />
          <Route path='/women' element={<ShopCategory category="women"/>} />
          <Route path='/kids' element={<ShopCategory category="kid"/>} />
          <Route path='/phone' element={<ShopCategory category="phone"/>} />
          <Route path='/watch' element={<ShopCategory category="watch"/>} />
          <Route path='/sport' element={<ShopCategory category="sport"/>} />
          <Route path='/market' element={<ShopCategory category="market"/>} />
          <Route path='/cosmetic' element={<ShopCategory category="cosmetic"/>} />
          <Route path='/accessory' element={<ShopCategory category="accessory"/>} />
          <Route path='/books' element={<ShopCategory category="book"/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
