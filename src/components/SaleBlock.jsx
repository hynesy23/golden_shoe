import {React, Component} from "react";

import saleImage from '../images/hp-hero-summersale.jpg'

class SaleBlock extends Component {
  render() {
    return (
    <div className="sale-item">
        <img src={saleImage} alt="" />
    </div>
    );
  }
}

export default SaleBlock;