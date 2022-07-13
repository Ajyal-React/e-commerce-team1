import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, FlexBoxN } from "../../Global.Style";
import "./ProdDetails.css";
import ProductText from "./ProductText";
import { useSelector, useDispatch } from "react-redux";
import { DetailsAct } from "../../Redux/products/actions/Details-Act";

function ProductDetails() {
  const datas = useSelector((store) => store.Details);
  const dispatch = useDispatch();

  function handleImg(e) {
    setData(e.target.src);
  }

  let { id } = useParams();

  useEffect(() => {
    dispatch(DetailsAct(id));
  }, []);

  const [data, setData] = useState("");

  return (
    <Container>
      {datas.loading ? (
        "load "
      ) : (
        <div className="cont-cars">
          <div className="sec-lef">
            <div className="specImg">
              <img
                src={data ? data : `${datas?.data.images?.[0]}`}
                className="sImg"
              />
            </div>
            <div className="smlImg">
              {datas?.data?.images?.map((el, index) => (
                <>
                  <div className="smImg" key={index}>
                    <img
                      src={el}
                      width="110px"
                      height="100px"
                      onClick={(e) => handleImg(e)}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="seSection">
            <ProductText />
          </div>
        </div>
      )}
    </Container>
  );
}

export default ProductDetails;
