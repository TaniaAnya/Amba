import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Information from './components/Information';
import Footer from './components/Footer';
import MenuCategory from './components/MenuCategory';
import FoodMenu from './components/FoodMenu';
import Gallery from './components/Gallery';
import Promo from './components/Promo';
import AdminLogin from './components/AdminLogin';
import AdmInformation from './components/AdmInformation';
import AdmGallery from './components/AdmGallery';
import AdmPromo from './components/AdmPromo';
import AdminMenu from './components/AdminMenu';
import NonCoffe from './components/NonCoffe';
import Snack from './components/Snack';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman utama */}
        <Route
          path='/'
          element={
            <div className="App relative">
              <Navbar />
              <Home />
              <Menu />
              <About />
              <Information />
              <Footer />
            </div>
          }
        />

        {/* Route untuk halaman menu dan lainnya */}
        <Route path='/menu-category' element={<MenuCategory />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/food-menu' element={<FoodMenu />} />
        <Route path='/non-coffe' element={<NonCoffe />} />
        <Route path='/snack' element={<Snack />} />

        {/* Route untuk admin */}
        <Route path='/login' element={<AdminLogin />} />
        <Route path='/admin/information' element={<AdmInformation />} />
        <Route path='/admin/gallery' element={<AdmGallery />} />
        <Route path='/admin/promo' element={<AdmPromo />} />
        <Route path='/admin/menu' element={<AdminMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
