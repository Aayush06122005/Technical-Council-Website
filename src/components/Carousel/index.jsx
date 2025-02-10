// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/index.jsx'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card title="EYSA" />
        </SwiperSlide>

        <SwiperSlide>
          <Card title="ODYSSEY"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <Card title="TEST1"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <Card title="TEST2"/>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
