// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FlexBox, StyledPrice, StyledSubHeading } from "../../../Global.Style";

export default (props) => {
	return (
		<div className="categories-wrapper">
			<Swiper
				// install Swiper modules
				modules={[Pagination, A11y, Autoplay]}
				centeredSlides={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{props.data.data.map((el) => (
					<SwiperSlide>
						<div>
							<div className="discounts">SALE -70%</div>
							<img src={el.images} alt="logo" className="ph-sal" />

							<FlexBox>
								<StyledSubHeading fontSize="22px"> {el.name}</StyledSubHeading>
								<StyledPrice
									color="#0EA965"
									bgColor="white"
									borderRadius="5px"
									fontSize="15px"
								>
									{el.price}$
								</StyledPrice>
							</FlexBox>
							<FlexBox>
								<p className="name-cust">Brand: Buma</p>
								<p className="prev-price">
									<s>{el.price}$</s>{" "}
								</p>
							</FlexBox>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
