import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About'
import Information from './components/Information';
// import Admin from './components/Admin';
import Gallery from './components/Gallery';
import MenuCategory from './components/MenuCategory';
import FoodMenu from './components/FoodMenu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Home />
     
      <div className="absolute w-full top-0 mt-[400px] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#74512D" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,122.7C640,149,800,235,960,245.3C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <Menu/>
      <About/>
      <Information/>
      {/* <Admin/> */}
      <Gallery/>
      <MenuCategory/>
      <FoodMenu/>
      <Footer/>
    </div>
  );
}

export default App;