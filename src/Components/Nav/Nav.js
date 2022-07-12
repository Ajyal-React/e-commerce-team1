import React from "react";
import UserControlBar from "./UserControlBar";
import { Container, FlexBox, StyledButton } from "../../Global.Style";
import { Bars, StyledUlNav, SelectLang, Li } from "./Nav.Style";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FaSearch, FaBars , FaRegTimesCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
function Nav() {
	const isLoggedIn = useSelector((state) => state.user.token);
	const [likes, setLikes] = React.useState(false);
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
		<nav>
			{likes == true ? (
				<div className="serch">
					<input
						type="text"
						placeholder="type to search..."
						className="search-input"
					/>
					<FaSearch className="icon-srch" />
          <FaRegTimesCircle className="out-search"  onClick={handleClick} />
				</div>
			) : null}
			<Container>
				<FlexBox className="nav-bar">
					<Bars>
						<FaBars />
					</Bars>
					<SelectLang>
						<FlexBox>
							<select>
								<option value="English">English</option>
								<option value="Arabic">Arabic</option>
							</select>
							<FaSearch onClick={handleClick} />
						</FlexBox>
					</SelectLang>
					<StyledUlNav>
						<FlexBox>
							<Li>
								<Link style={{ textDecoration: "none" }} to="/">
									Home
								</Link>
							</Li>
							<Li>New arrival</Li>
							<Li>
								<Link style={{ textDecoration: "none" }} to="/Details">
									Mobiles
								</Link>
							</Li>
						</FlexBox>
					</StyledUlNav>
					<img src="/Images/logo.png" alt="logo" />

					<StyledUlNav>
						<FlexBox>
							<Li>
								<Link style={{ textDecoration: "none" }} to="/laptops">
									Laptops
								</Link>
							</Li>
							<Li>HeadPhones</Li>
							<Li>Accessories</Li>
						</FlexBox>
					</StyledUlNav>

					{isLoggedIn ? (
						<UserControlBar />
					) : (
						<Link to="/signup">
							<StyledButton borderRadius="3rem" bgColor="#F9F8F8" color="#FA7400">
								Sign In
							</StyledButton>
						</Link>
					)}
				</FlexBox>
			</Container>
		</nav>
	);
}

export default Nav;
