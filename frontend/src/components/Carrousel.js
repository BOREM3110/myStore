import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carrousel(props) {
  const slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg", "slide6.jpg", "slide7.jpg"];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   
  

   return (
    <div className="justify-between p-[5rem] bg-slate-200 text-white h-[70vh] w-[100vw] " >
      <h2 className="text-center m-2 fw-bold text-gray-600 transition-opacity duration-300 capitalize" > Tendance, in Mystore Shop hold the creativity ...</h2>
      <Slider {...settings} >
      {slides.map((slide)=> {
        
          
          return( 
            
            <div className="box mb-1 my-4 bg-black h-[300px]"  >
              <img className="w-[340px]   h-full" src={require(`../slides/${slide}`)} />
          <h3 className="text-center" >1</h3>
          </div>
         )
          
        })}
        </Slider>
       
      
        

   </div>
  )
}
