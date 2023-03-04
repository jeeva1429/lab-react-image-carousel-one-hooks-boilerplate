import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImageCarousal = (props) => {
  const [imageNum, setImageNum] = useState(0)

  const nextImage = () => {
    if (imageNum < images.length - 1)
      setImageNum(imageNum => imageNum+1);
  }
  

  const previousImage = () => {
    if (imageNum > 0)
        setImageNum(imageNum => imageNum-1)
  }
  
  return (
    <div >
      <div className="title"><h1>{images[imageNum].title}</h1></div>
      <div id='container'>
        <div onClick={previousImage} > <ArrowBackIosNewIcon /></div>
        <img src={images[imageNum].img} alt={images[imageNum].alt} />
        <div onClick={nextImage}> <ArrowForwardIosIcon /></div>
      </div>
      <div className="subtitle"><p>{images[imageNum].subtitle}</p></div>
    </div>
  );
}

export default ImageCarousal;
