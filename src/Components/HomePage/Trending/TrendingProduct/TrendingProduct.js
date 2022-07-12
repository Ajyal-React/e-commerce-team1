import React from "react";
import {
	StyledPrice,
	StyledImgFrame,
	StyledParagraph,
	StyledTrendingCard,
	FlexBox,
} from "../../../../Global.Style";
import { TrendingImage } from "../Trending.style";

const TrendingProduct = (props) => {
	return (
		<StyledTrendingCard>
			<StyledImgFrame>
				<TrendingImage src={props.imgUrl} alt={props.title}></TrendingImage>
			</StyledImgFrame>
			<FlexBox>
				<StyledParagraph>{props.title}</StyledParagraph>
				<StyledPrice color="#FF4F04" borderRadius="2rem" bgColor="#FFF0E9">
					{props.price}
				</StyledPrice>
			</FlexBox>
		</StyledTrendingCard>
	);
};

export default TrendingProduct;
