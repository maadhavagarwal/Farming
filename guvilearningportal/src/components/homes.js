import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './Farming.png';
import Intro from './download.jpeg';
import Soil from "./images.jpeg"
import crop from "./crops-growing-in-thailand.jpg"
import "./home.css"
import Header from './header';
function Homes() {

  return (
   <>
   {/* <Header/> */}
     <div className="container">
       <img src={ExampleCarouselImage} alt="Example Carousel Image" className="img" />
       <h1 className='main'>Welcome to Soil Information site</h1>
     </div>
     <div className="intro">
      <h1 className='text1'>Introduction</h1>
     <h1 className="text">In agriculture, matching crops to the right soil type is essential for optimal growth and yield. The Agricultural Soil and Crop Information Site exists to simplify this process by providing a comprehensive resource that connects soil characteristics with suitable crops.</h1>
       <img src={Intro} alt="Example Carousel Image" className='img2' />
      
     </div>
     <div className="soil">
       <h1 className='soil-text'>Soil Information</h1>
       <h1 className="soil-info">The site offers detailed information on various soil types, including their physical, chemical, and biological properties. Users can access this information through a user-friendly interface, allowing them to quickly find the soil characteristics that match their specific needs.</h1>
       <img src={Soil} alt="Example Carousel Image" className='soil-img' />
     </div>
     <div className="Crop">
      <h1 className='text1'>Crop Information</h1>
     <h1 className="text">A plant or animal or plant or animal product that can be grown and harvested extensively for profit or subsistence. Get tailored advice on which crops thrive in specific soils.</h1>
       <img src={crop} alt="Example Carousel Image" className='img2' />
      
     </div>
   </>
  );
}


export default Homes;