import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About'
import Information from './components/Information';
import Footer from './components/Footer';
import MenuCategory from './components/MenuCategory';
import FoodMenu from './components/FoodMenu';
import Gallery from './components/Gallery';
import Promo from './components/Promo';
// import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';
import AdmInformation from './components/AdmInformation';
import AdmGallery from './components/AdmGallery';
import AdmPromo from './components/AdmPromo';
import NonCoffe from './components/NonCoffe';
import Snack from './components/Snack';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
        path='/'
        element={
          <div className="App relative">
      <Navbar />
      <Home />
      <Menu/>
      <About/>
      <Information/>
      <Footer/>
      
      {/* <Admin/> */}
  
      <AdmInformation/>
      <AdmGallery/>
      <AdmPromo/>

    </div>
        }
        />

        <Route path='/menu-category' element={<MenuCategory/>}/>
        <Route path='/promo' element={<Promo/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/food-menu' element={<FoodMenu/>}/>
        <Route path='/non-coffe' element={<NonCoffe/>}/>
        <Route path='/snack' element={<Snack/>}/>
        <Route path='/login' element={<AdminLogin/>}/>

      </Routes>
    </Router>
  );
}

export default App;