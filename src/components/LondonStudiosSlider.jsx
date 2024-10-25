import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/components/londonStudiosSlide.css'

import { Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from "../assets/londonStudiosImg/img_4.jpg";
import slide_image_2 from "../assets/londonStudiosImg/img_1.jpg";
import slide_image_3 from "../assets/londonStudiosImg/img_2.jpg";
import slide_image_4 from "../assets/londonStudiosImg/img_3.jpg";
import slide_image_5 from "../assets/londonStudiosImg/img_6.jpeg";
import slide_image_6 from "../assets/londonStudiosImg/img_7.jpg";
import slide_image_7 from "../assets/londonStudiosImg/img_9.jpg";

const LondonStudiosSlider = () => {
    return (
        <div className="container">
            <h1 className="heading">London Studios</h1>
            <Swiper
                effect={'fade'}  // Nutze 'fade' anstelle von 'coverflow'
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                pagination={{ el: 'swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className='swiper_container'
            >
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-container">
                    <div className="swiper-button-prev slider-arrow">
                        <FaArrowAltCircleLeft name="arrow-back-outline" />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <FaArrowAltCircleRight name="arrow-forward-outline" />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default LondonStudiosSlider;
