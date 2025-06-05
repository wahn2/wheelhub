
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Uploadproduct from './components/Uploadproduct';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Signin from './components/Signin';
import 'bootstrap/dist/css/bootstrap.min.css'
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import'bootstrap/dist/js/bootstrap.js'

function App() {
  return (
    
     <Router>
      <div className="App container-fluid">
        <header className="App-header">
          <h1>
            <span className='imgspan'>
              <img src="/shopping-cart.gif" alt="basket" className='headerimg' />
            </span>
            SokoGarden - Buy & Sell online
          </h1>
        </header>

       <Navbar/>

        <Routes>
          <Route path='/signup'Component={Signup}></Route>
          <Route path='/signin'Component={Signin}></Route>
          <Route path='/upload'Component={Uploadproduct}></Route>
          <Route path='/'Component={Getproducts}></Route>
          <Route path='/makepayment'Component={Makepayment}></Route>
          <Route path='/*' Component={Notfound}></Route>


        </Routes>
      </div>

     </Router>
    
    

  );
}

export default App;
