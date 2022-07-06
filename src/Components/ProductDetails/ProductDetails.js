import React, { useState } from "react";
import { Container, FlexBoxN } from "../../Global.Style";
import "./ProdDetails.css";
import ProductText from "./ProductText";

function ProductDetails() {
  const [data, setData] = useState("/Images/phones.png");
  function handleImg(e) {
    setData(e.target.src);
  }
  return (
    <Container>
      <div className="cont-cars">
        <div>
          <div className="specImg">
            <img src={data} className="sImg" />
          </div>
          <div className="smlImg">
            <div className="smImg">
              <img
                src="/Images/phone2.png"
                width="110px"
                height="100px"
                onClick={(e) => handleImg(e)}
              />
            </div>
            <div className="smImg">
              <img
                src="/Images/phone3.png"
                width="110px"
                height="100px"
                onClick={(e) => handleImg(e)}
              />
            </div>
            <div className="smImg">
              <img
                src="/Images/phone4.png"
                width="110px"
                height="100px"
                onClick={(e) => handleImg(e)}
              />
            </div>

            <div className="smImg">
              <img
                src="/Images/phone1.png"
                width="110px"
                height="100px"
                onClick={(e) => handleImg(e)}
              />
            </div>
            <div className="smImg">
              <img
                src="/Images/phone4.png"
                width="110px"
                height="100px"
                onClick={(e) => handleImg(e)}
              />
            </div>
          </div>
        </div>
        <div className="seSection">
          <ProductText />
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
