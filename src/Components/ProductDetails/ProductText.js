import React from "react";
import { ColCenter, FlexBox } from "../../Global.Style";
import "./ProdDetails.css";
import { useSelector } from "react-redux";
function ProductText() {
	const datas = useSelector((store) => store.Details);
	console.log(datas.data);
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
					: datas?.data?.colors?.map((el, index) => (
							<ColCenter>
								<label for={index}>
									<div className="container-color-details">
										<div
											className="color-details"
											style={{ background: ` ${el?.one}` }}
										></div>
										<div
											className="color-details"
											style={{ background: ` ${el?.two}` }}
										></div>
									</div>
								</label>
								<input type="radio" id={index} name="fav_language" value={el} />
							</ColCenter>
					  ))}
			</FlexBox>
			<div>
				<label for="cars">Size and Weight :</label>
				<br />
				{datas?.data?.size?.length !== 0 ? (
					<div>
						<select name="cars" id="cars">
							{datas.loading
								? "brand"
								: datas?.data?.size?.map((el) => <option>{el}</option>)}
						</select>
						<br />
					</div>
				) : null}
				<label for="cars">Chip:</label>
				<br />
				{datas?.data?.size?.length !== 0 ? (
					<div>
						<select name="cars" id="cars">
							{datas.loading
								? "brand"
								: datas?.data?.size?.map((el) => <option>{el}</option>)}
						</select>
						<br />
					</div>
				) : null}
				{datas?.data?.storage?.length !== 0 ? (
					<div>
												<label for="cars">storage:</label>

						<select name="cars" id="cars">
							{datas.loading
								? "brand"
								: datas?.data?.storage?.map((el) => <option>{el}</option>)}
						</select>
						<br />
					</div>
				) : null}
				{datas?.data?.memory?.length !== 0 ? (
					<div>
						<label for="cars">Memory:</label>

						<select name="cars" id="cars">
							{datas.loading
								? "brand"
								: datas?.data?.memory?.map((el) => <option>{el}</option>)}
						</select>
						<br />
					</div>
				) : null}
				<button className="butn">Add To Cart</button>
				<br />
			</div>
		</div>
	);
}

export default ProductText;
