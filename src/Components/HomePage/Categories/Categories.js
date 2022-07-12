import React, { useEffect, useState } from "react";
import {
	Center,
	Container,
	FlexBox,
	MainContainer,
	StyledButton2,
} from "../../../Global.Style";
import "./Categories.css";
import MultiCard from "./MultiCard";
import SpecCard from "./SpecCard";
import Tabs from "./Tabs";
import { useSelector, useDispatch } from "react-redux";
import { FeaturedAct } from "../../../Redux/products/actions/featured-categ-act";
import Loader from "../../../GlobalUtil/Loader";
function Categories() {
	const data = useSelector((store) => store.Featured);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(FeaturedAct("MOBILES"));
	}, []);
	return (
		<MainContainer>
			<div className="container-card">
				<Container>
					<Tabs />
					<FlexBox>
						<div className="multi-card">
							{data.loading ? (
								<Loader />
							) : (
								data.data.map((el , index) => (
									<MultiCard key={index} id={el._id} img={el.images} name={el.name} price={el.price} />
								))
							)}
						</div>
						<div className="spec-card">
							{data.loading ? <Loader /> : <SpecCard data={data} />}
						</div>
					</FlexBox>
					<Center>
						<StyledButton2 borderRadius="3px" bgColor="white" className="btn">
							View More Laptops
						</StyledButton2>
					</Center>
				</Container>
			</div>
		</MainContainer>
	);
}

export default Categories;
