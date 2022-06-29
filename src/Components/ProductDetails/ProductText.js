import React, { useState } from "react";
import { ColCenter, FlexBox, FlexBoxCol } from "../../Global.Style";
import "./ProdDetails.css";

function ProductText() {
  return (
    <div>
      <FlexBox>
        <h1>MacBook Pro 13</h1>
        <p className="prices">2500$</p>
      </FlexBox>
      <div className="mt-5">
        <p>The best for your professional life</p>
      </div>

      <div className="mt-5">
        <p>
          Availability in stock:<span className="Available">Available</span>
        </p>
        <hr />
      </div>
      <FlexBox className="amg">
        <ColCenter>
          <label for="gray">
            <img src="/Images/colors.png" />
          </label>
          <input type="radio" id="gray" name="fav_language" value="HTML" />
        </ColCenter>
        <ColCenter>
          <label for="black">
            <img src="/Images/colors.png" />
          </label>
          <input type="radio" id="black" name="fav_language" value="HTML" />
        </ColCenter>
        <ColCenter>
          <label for="white">
            <img src="/Images/colors.png" />
          </label>
          <input type="radio" id="white" name="fav_language" value="HTML" />
        </ColCenter>
        <ColCenter>
          <label for="red">
            <img src="/Images/colors.png" />
          </label>
          <input type="radio" id="red" name="fav_language" value="HTML" />
        </ColCenter>
      </FlexBox>
      <div>
        <label for="cars">Size and Weight :</label>
        <br />
        <select name="cars" id="cars"></select>
        <br />
        <label for="cars">Chip:</label>
        <br />
        <select name="cars" id="cars"></select>
        <br />
        <label for="cars">Storage:</label>
        <br />
        <select name="cars" id="cars"></select>
        <br />
        <label for="cars">Memory:</label>
        <br />
        <select name="cars" id="cars"></select>
        <br />
        <br />
        <button className="butn">Add To Cart</button>
        <br />
      </div>
    </div>
  );
}

export default ProductText;
