import React from 'react'
import slide1 from './assets/images/slide1.jpg'
import slide2 from './assets/images/slide2.jpg'
import slide3 from './assets/images/slide3.jpg'
import slide4 from './assets/images/slide4.jpg'


const Carousel = () => {
  return (
    <div>
      <section class="row">
            <div class="col-md-12">
                <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slide4} alt="" class="d-block w-100"/>
                        </div>
                        <div class="carousel-item">
                            <img src={slide3} alt="" class="d-block w-100"/>
                        </div>
                        <div class="carousel-item">
                            <img src={slide2} alt="" class="d-block w-100"/>
                        </div>
                        <div class="carousel-item">
                            <img src={slide1}alt="" class="d-block w-100"/>
                        </div>
                    </div>
                    
                      <a href="#mycarousel" class="carousel-control-prev " data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                      </a>
                      <a href="#mycarousel" class="carousel-control-next " data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                      </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Carousel
