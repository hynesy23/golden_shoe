import {React, Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const announcements = [ "Free deliveries on ALL ORDERS", "10% student discount", "Buy now Pay Later", "Returns Information" ];

class AnnouncementBar extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3500,
      className: "slides",
      arrows: false
    };

    return (
      <div className="announcement-bar">
        <Slider {...settings}>
          {announcements.map( (announcement, i) => {
            return (
              <div key={i}>{announcement}</div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default AnnouncementBar;
