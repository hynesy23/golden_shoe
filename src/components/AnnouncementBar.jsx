// import React from 'react'

// export const AnnouncementBar = () => {
//     return (
//         <div className="announement-bar">
//             <div>Free deliveries on orders over £50</div>
//             <div>10% student discount</div>
//             <div>Buy now Pay Later</div>
//         </div>
//     )
// }

import {React, Component} from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

class AnnouncementBar extends Component {
  render() {
    var settings = {
      dots: true
    };
    return (
    //   <div className="container flex">
    //     <Slider {...settings}>
    //       <div>Free deliveries on orders over £50</div>
    //       <div>10% student discount</div>
    //       <div>Buy now Pay Later</div>
    //     </Slider>
    //   </div>
      <div className="announement-bar flex">
        {/* <Slider {...settings}>
        </Slider> */}
          <div>Free deliveries on orders over £50</div>
          <div>10% student discount</div>
          <div>Buy now Pay Later</div>
      </div>
    );
  }
}

// ReactDOM.render(<AnnouncementBar />, document.getElementById("announement-bar"));

export default AnnouncementBar;
