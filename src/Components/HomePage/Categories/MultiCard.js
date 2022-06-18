import React from "react";
import { AiFillHeart, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { FlexBox, StyledPrice, StyledSubHeading } from "../../../Global.Style";

function MultiCard(props) {
	const [likes, setLikes] = React.useState(100);
	const [isClicked, setIsClicked] = React.useState(false);
  
	const handleClick = () => {
	  // if (isClicked) {
		// setLikes(likes - 1);
	  // } else {
		// setLikes(likes + 1);
	  // }
	  setIsClicked(!isClicked);
	};

	return (
		<div className="card-phone">
			<div>
				<AiFillHeart  className={ `i-hert ${isClicked && 'liked'}` } onClick={ handleClick }  />
				<div className="cont-img-multi">
				<img src={`/Images/${props.img}.png`} className="img-multi" alt="logo" />
				</div>               

				<FlexBox>
					<StyledSubHeading fontSize="12px">HP laptop</StyledSubHeading>
					<StyledPrice
						color="#0EA965"
						bgColor="white"
						borderRadius="5px"
						fontSize="8px"
					>
						$99
					</StyledPrice>
				</FlexBox>
				<hr className="lines" />
				<FlexBox>
					<p className="name-cust">
						<AiFillStar className="ico-star" />
						<AiFillStar className="ico-star" />
						<AiFillStar className="ico-star" />
						<AiFillStar className="ico-star" />
						<AiFillStar className="ico-star" />
					</p>
					<p className="prev-price">
						<AiOutlineShoppingCart  className="ico-shop" />
					</p>
				</FlexBox>
			</div>
		</div>
	);
}

export default MultiCard;
