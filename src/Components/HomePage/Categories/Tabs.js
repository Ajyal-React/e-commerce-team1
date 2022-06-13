import React from "react";
import { FlexBox, FlexBoxCol, StyledSubHeading, StyledUl } from "../../../Global.Style";
import "./Categories.css";

function Tabs() {
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
                        <a className="tabs-cat active-tab">MOBILES</a>
                        <a className="tabs-cat">LAPTOPS</a>
                        <a className="tabs-cat">PLAY STATIONS</a>
                        <a className="tabs-cat">IPADS</a>
                        <a className="tabs-cat">SCREENS</a>
                        <a className="tabs-cat">AIRPODS</a>
                        <a className="tabs-cat">MORE &gt;</a>

                    </FlexBox>
				</div>
			</FlexBox>
		</div>
	);
}

export default Tabs;
