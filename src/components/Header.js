import React from "react";
import stockPhoto1 from "../images/stock_photos/stock_photo1.png";

function Header() {
  return (
    <header>
      <div className="image-container">
        <img src={stockPhoto1} alt="" className="stock-photo-first" />
        <p>Stanimir Kosev</p>
      </div>

      <div className="text-container">
        <h1>About me</h1>
        <p>Lorem sakdlaksdkals;d;lsal;dsal;sd</p>
      </div>
    </header>
  );
}

export default Header;
