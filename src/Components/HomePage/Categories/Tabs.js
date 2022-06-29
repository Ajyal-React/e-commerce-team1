import React, { useEffect } from "react";
import { FlexBox, FlexBoxCol, StyledSubHeading } from "../../../Global.Style";
import "./Categories.css";
import {useDispatch} from 'react-redux';
import { FeaturedAct } from "../../../Redux/products/actions/featured-categ-act";

function Tabs() {
	const dispatch = useDispatch();


	function handleTaps(e) {
	 dispatch(FeaturedAct(e.target.name)) 
	}

	return (
	
		<div className="tab">
			<FlexBox>
				<div>
					<FlexBoxCol>
						<StyledSubHeading fontSize="12px">LAPTOPS</StyledSubHeading>
						<StyledSubHeading fontSize="26px">FEATURED CATEGORIES</StyledSubHeading>
					</FlexBoxCol>
				</div>
				<div>
					<FlexBox>
                        <a className="tabs-cat active-tab" name="MOBILES" onClick={(e) => handleTaps(e)}>MOBILES</a>
                        <a className="tabs-cat" name="LAPTOPS" onClick={(e) => handleTaps(e)}>LAPTOPS</a>
                        <a className="tabs-cat" name="PLAY_STATIONS" >PLAY STATIONS</a>
                        <a className="tabs-cat" name="IPADS" >IPADS</a>
                        <a className="tabs-cat" name="SCREENS" >SCREENS</a>
                        <a className="tabs-cat" name="AIRPODS" >AIRPODS</a>
                        <a className="tabs-cat">MORE &gt;</a>

                    </FlexBox>
				</div>
			</FlexBox>
		</div>
	);
}

export default Tabs;
