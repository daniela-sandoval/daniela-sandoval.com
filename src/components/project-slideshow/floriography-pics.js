import React from "react";
import FlorPic1 from '../../img/flor-pic1.png'
import FlorPic2 from '../../img/flor-profile.png'
import FlorPic3 from '../../img/flor-growin.png'
import FlorPic4 from '../../img/flor-explore.png'
import FlorPic5 from '../../img/flor-email.png'
import FlorPic6 from '../../img/flor-api.png'
import { Carousel } from "react-responsive-carousel";

function FloriographyCarousel() {
  return (
    <Carousel showThumbs={false} swipeable={true} dynamicHeight={true}>
    <img src={FlorPic1} alt="floriography demo"/>
    <img src={FlorPic2} alt="floriography demo"/>
    <img src={FlorPic3} alt="floriography demo"/>
    <img src={FlorPic4} alt="floriography demo"/>
    <img src={FlorPic5} alt="floriography demo"/>
    <img src={FlorPic6} alt="floriography demo"/>
    </Carousel>
  )
}
export default FloriographyCarousel;

// <div>
// <img src={FlorPic1} alt="floriography demo"/>
// </div>
// <div>
// <img src={FlorPic2} alt="floriography demo"/>
// </div>
// <div>
// <img src={FlorPic1} alt="floriography demo"/>
// </div>
// <div>
// <img src={FlorPic3} alt="floriography demo"/>
// </div>
// <div>
// <img src={FlorPic4} alt="floriography demo"/>
// </div>
// <div>
// <img src={FlorPic5} alt="floriography demo"/>
// </div>
// <div>
// <img src={FlorPic6} alt="floriography demo"/>
// </div>
