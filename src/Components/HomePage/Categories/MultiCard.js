import React, { useEffect } from "react";
import { AiFillHeart, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { FlexBox, StyledPrice, StyledSubHeading } from "../../../Global.Style";
import { Link } from "react-router-dom";

function MultiCard(props) {
	const [likes, setLikes] = React.useState(100);
	const [isClicked, setIsClicked] = React.useState(false);

	const handleClick = () => {
		if (isClicked) {
			setLikes(likes == true);
		} else {
			setLikes(likes == false);
		}
		setIsClicked(!isClicked);
	};

	return (
		<div className="card-phone">
			<div>
				<AiFillHeart
					className={`i-hert ${isClicked && "liked"}`}
					onClick={handleClick}
				/>
				<div className="cont-img-multi">
					<img src={`${props.img}`} className="img-multi" alt="logo" />
				</div>

				<FlexBox>
					<StyledSubHeading fontSize="12px">{props.name}</StyledSubHeading>
					<StyledPrice
						color="#0EA965"
						bgColor="white"
						borderRadius="5px"
						fontSize="8px"
					>
						{props.price}
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
					<Link to={`/details/${props.id}`}>

						<AiOutlineShoppingCart className="ico-shop" />
						</Link>
					</p>
				</FlexBox>
			</div>
		</div>
	);
}

export default MultiCard;
