
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';

import Signin from './components/Signin';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import'bootstrap/dist/js/bootstrap.js'
import signin from './components/Signin'
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ProductForm from './components/ProductForm';
import Products from './components/Caravailable';
import Home from './components/Home';
import MakePayment from './components/makepayment';
import ProductsAvailable from './components/premiumcar';
import PremiumForm from './components/addpremium';
import MoreDetails from './components/moredetails';
import Makepaymentnow from './components/premiumpayment';
import AboutUs from './components/aboutus';
import VehicleDetails from './components/cadillacdetails';
import VehicleDetailCard from './components/sedandetails';
import MoreDetailsP from './components/porsche';
import ABSACarFinancing from './components/absa';
import CarFinancingOptions from './components/absa';


function App() {
  return (
    
     <Router>
      <div className="App container-fluid">
      <header className="App-header">
  <div className="header-content">
    <h1 className="logo-title">
      <span className="imgspan">
        <img 
          src="/logo.png" 
          alt="WheelsHub Logo" 
          className="headerimg" 
        />
      </span>
      <span className="brand-name">WheelsHub<span className="ke-suffix">.KE</span></span>
    </h1>
  </div>
</header>

       <Navbar/>
       
     
       
       
      

       

        <Routes>
          <Route path='/signup'Component={Signup}></Route>
          <Route path='/signin'Component={signin}></Route>
          <Route path='/ProductForm'Component={ProductForm}></Route>
          <Route path='/caravailable'Component={Products}></Route>
          <Route path='/'Component={Home}></Route>
          <Route path='/makepayment'Component={MakePayment}></Route>
          <Route path='/Products'Component={Products}></Route>
          <Route path='/paynow'Component={MakePayment}></Route>
          <Route path='/inventory'Component={ProductsAvailable}></Route>
          <Route path='/BulkUpload'Component={PremiumForm}></Route>
          <Route path='/moredetails'Component={MoreDetails}></Route>
          <Route path='/deposit'Component={Makepaymentnow}></Route>
          <Route path='/about'Component={AboutUs}></Route>
          <Route path='/morecars'Component={Products}></Route>
          <Route path='/premiumcars'Component={ProductsAvailable}></Route>
          <Route path='/vehicle1'Component={VehicleDetails}></Route>
          <Route path='/vehicle2'Component={VehicleDetailCard}></Route>
          <Route path='/vehicle3'Component={MoreDetailsP}></Route>
          <Route path='/absa'Component={CarFinancingOptions}></Route>
          <Route path='/vehicles'Component={ProductsAvailable}></Route>
          <Route path='/financing'Component={CarFinancingOptions}></Route>



















        
        </Routes>
        <br />
        
      </div>

     </Router>
    
    

  );
}

export default App;