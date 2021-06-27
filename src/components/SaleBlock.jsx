import {React, Component} from "react";

import saleImage from '../images/sale.jpeg'

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