import React from 'react';
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import '../styles/components/londonStudiosSlide.scss'
import "../styles/main.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from "../assets/londonStudiosImg/img_4.jpg";
import slide_image_2 from "../assets/londonStudiosImg/img_1.jpg";
import slide_image_3 from "../assets/londonStudiosImg/img_2.jpg";
import slide_image_4 from "../assets/londonStudiosImg/img_3.jpg";
import slide_image_5 from "../assets/londonStudiosImg/img_6.jpeg";
import slide_image_6 from "../assets/londonStudiosImg/img_7.jpg";
import slide_image_7 from "../assets/londonStudiosImg/img_9.jpg";

const LondonStudiosSlider = () => {
        const progressCircle = useRef(null);
        const progressContent = useRef(null);
        const onAutoplayTimeLeft = (s, time, progress) => {
          progressCircle.current.style.setProperty('--progress', 1 - progress);
          progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        };
        return (
          <>
            <div>
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      onAutoplayTimeLeft={onAutoplayTimeLeft}
                      className="mySwiper"
                    >
                    
                      <SwiperSlide><img src={slide_image_1} alt="slide_image" /></SwiperSlide>
                      <SwiperSlide><img src={slide_image_2} alt="slide_image" /></SwiperSlide>
                      <SwiperSlide><img src={slide_image_3} alt="slide_image" /></SwiperSlide>
                      <SwiperSlide><img src={slide_image_4} alt="slide_image" /></SwiperSlide>
                      <SwiperSlide><img src={slide_image_5} alt="slide_image" /></SwiperSlide>
                      <SwiperSlide><img src={slide_image_6} alt="slide_image" /></SwiperSlide>
                      <SwiperSlide><img src={slide_image_7} alt="slide_image" /></SwiperSlide>
                      <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                          <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                      </div>
                    </Swiper>
            </div>
        </>
    );
}

export default LondonStudiosSlider;
