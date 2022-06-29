import React, { useEffect, useState } from "react";
import { ColCenter, FlexBox, FlexBoxCol } from "../../Global.Style";
import "./ProdDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { DetailsAct } from "../../Redux/products/actions/Details-Act";
import { useParams } from "react-router-dom";
function ProductText() {
	const datas = useSelector((store) => store.Details);
	const dispatch = useDispatch();
	let { id } = useParams();

	useEffect(() => {
		dispatch(DetailsAct(id));
	}, []);
	console.log(datas);
	return (
		<div>
			<FlexBox>
				<h1>{datas.loading ? "name" : datas.data.name}</h1>
				<p className="prices">{datas.loading ? "sadasd" : datas.data.price}$</p>
			</FlexBox>
			<div className="mt-5">
				<p>{datas.loading ? "brand" : datas.data.brand}</p>
			</div>

			<div className="mt-5">
				<p>
					Availability in stock:<span className="Available">Available</span>
				</p>
				<hr />
			</div>
			<FlexBox className="amg">
				{datas.loading
					? "sadasd"
					: datas.data.colors.map((el , index) => (
							<ColCenter>
								<label for={index}>
									<img src="/Images/colors.png" />
								</label>
								<input type="radio" id={index} name="fav_language" value={el} />
							</ColCenter>
					  ))}
			</FlexBox>
			<div>
				<label for="cars">Size and Weight :</label>
				<br />
				<select name="cars" id="cars">
					{datas.loading ? "brand" : datas.data.size.map((el) => el)}
				</select>
				<br />
				<label for="cars">Chip:</label>
				<br />
				<select name="cars" id="cars">
					{datas.loading ? "brand" : datas.data.size.map((el) => el)}
				</select>
				<br />
				<label for="cars">Storage:</label>
				<br />
				<select name="cars" id="cars">
					{datas.loading ? "brand" : datas.data.memory.map((el) => el)}
				</select>{" "}
				<br />
				<label for="cars">Memory:</label>
				<br />
				<select name="cars" id="cars">
					{datas.loading ? "brand" : datas.data.memory.map((el) => el)}
				</select>{" "}
				<br />
				<br />
				<button className="butn">Add To Cart</button>
				<br />
			</div>
		</div>
	);
}

export default ProductText;
