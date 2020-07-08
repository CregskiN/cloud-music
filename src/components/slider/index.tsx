import React from 'react';

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'

import { SliderContainer } from './style';


interface SliderProps {
    bannerList: CloudMusic.BannerType[];
};

SwiperCore.use([Pagination]);


const Slider: React.FC<SliderProps> = (props) => {
    console.log('component Slider render ...');
    const {
        bannerList
    } = props;

    return (
        <SliderContainer>
            <div className="before"></div>
            <Swiper
                className="slider-container"
                slidesPerView={1}
                loop={true}
                speed={300}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true, el: ".swiper-pagination" }}
            >
                {
                    bannerList.map(slider => (
                        <SwiperSlide className="swiper-slide" key={slider.imageUrl}>
                            <div className="slider-nav">
                                <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                            </div>
                        </SwiperSlide>
                    ))
                }
                <div className="swiper-pagination"></div>
            </Swiper>
        </SliderContainer>
    )
}

export default React.memo(Slider);