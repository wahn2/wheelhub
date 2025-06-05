import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <section class="row container-fluid">
        <div class="col-md-12">
            <div class="navbar navbar-expand-md bg-light navbar-light mt-2">
                <a href="index.html" class="navbar-brand text-dark "><b>Sokogarden</b></a>
                <button 
                class="navbar-toggler"
                    data-bs-toggle="collapse" data-bs-target="#navbarcontents">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="navbar-nav ms-auto navbar-collapse collapse" id='navbarcontents'>
                    <Link to ='/signup' className='btn btn-outline-success mx-2 navbar-item active'>Sign Up</Link>
                    <Link to ='/signin'className='btn btn-outline-success mx-2 navbar-item'> Sign In</Link>
                    <Link to ='/upload'className='btn btn-outline-success mx-2 navbar-item'> Upload Product</Link>
                    <Link to ='/'className='btn btn-outline-success mx-2 navbar-item'>Get products</Link>
                </div>

            </div>
        </div>
     </section>
    </div>
  )
}

export default Navbar
