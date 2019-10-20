import React from "react";
import FlorPic1 from '../../img/flor-pic1.png'
import { Carousel } from "react-responsive-carousel";

function FloriographyCarousel() {
  return (
    <Carousel showThumbs={false} swipeable={true}>
      <div>
        <img src={FlorPic1} alt="floriography demo"/>
      </div>
      <div>
        <img src={FlorPic1} alt="floriography demo"/>
      </div>
    </Carousel>
  )
}
export default FloriographyCarousel;
