// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FlexBox, StyledPrice, StyledSubHeading } from "../../../Global.Style";

export default () => {
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
        <SwiperSlide>
          <div>
            <div className="discounts">SALE -70%</div>

            <img src="/Images/phone2.png" alt="logo" className="ph-sal" />

            <FlexBox>
              <StyledSubHeading fontSize="22px">DELL laptop</StyledSubHeading>
              <StyledPrice
                color="#0EA965"
                bgColor="white"
                borderRadius="5px"
                fontSize="15px"
              >
                $99
              </StyledPrice>
            </FlexBox>
            <FlexBox>
              <p className="name-cust">Brand: Buma</p>
              <p className="prev-price">
                <s>100.00$</s>{" "}
              </p>
            </FlexBox>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="discounts">SALE -90%</div>

            <img src="/Images/phone3.png" alt="logo" className="ph-sal" />
            <FlexBox>
              <StyledSubHeading fontSize="22px">ACER laptop</StyledSubHeading>
              <StyledPrice
                color="#0EA965"
                bgColor="white"
                borderRadius="5px"
                fontSize="15px"
              >
                $99
              </StyledPrice>
            </FlexBox>
            <FlexBox>
              <p className="name-cust">Brand: Nike</p>
              <p className="prev-price">
                <s>139.00$</s>{" "}
              </p>
            </FlexBox>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="discounts">SALE -50%</div>
            <img src="/Images/phone2.png" alt="logo" className="ph-sal" />
            <FlexBox>
              <StyledSubHeading fontSize="22px">HP laptop</StyledSubHeading>
              <StyledPrice
                color="#0EA965"
                bgColor="white"
                borderRadius="5px"
                fontSize="15px"
              >
                $99
              </StyledPrice>
            </FlexBox>
            <FlexBox>
              <p className="name-cust">Brand: Nike</p>
              <p className="prev-price">
                <s>139.00$</s>{" "}
              </p>
            </FlexBox>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
