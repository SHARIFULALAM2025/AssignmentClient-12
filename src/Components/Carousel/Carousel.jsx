'use client'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import React from 'react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
const Carousel = () => {
  const carouselData = [
    {
      title: 'Tom Cruise ',
      image: 'https://i.ibb.co.com/fft2GXV/cdc-Jusy7vx-GPLM-unsplash.jpg',
      des: 'Founder & Chairman',
    },
    {
      title: 'Emma Watson ',
      image:
        'https://i.ibb.co.com/jkBNnDkb/bagoes-ilhamy-Pi-H3-N-qb-VQ-unsplash.jpg',
      des: 'Managing Director',
    },
    {
      title: 'Will Smith ',
      image:
        'https://i.ibb.co.com/ks0F4Hjb/valentin-fernandez-vf-N7r6-Jg2-WU-unsplash.jpg',
      des: 'Product Designer',
    },
    {
      title: 'Tom Cruise ',
      image:
        'https://i.ibb.co.com/1GpMVn66/hush-naidoo-jade-photography-ZCO-5-Y29s8k-unsplash.jpg',
      des: 'Founder & Chairman',
    },
    {
      title: 'Emma Watson ',
      image:
        'https://i.ibb.co.com/JR0QQ4sy/annie-spratt-Ha-Cq-GNFgi-GE-unsplash.jpg',
      des: 'Managing Director',
    },
    {
      title: 'Will Smith ',
      image:
        'https://i.ibb.co.com/nNMf8ZDj/julia-taubitz-v-N5s-G5-SPk-Y-unsplash.jpg',
      des: 'Product Designer',
    },
  ]
  return (
    <div className="">
      <div className="">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="" key={index}>
                <div className="relative h-75 w-full">
                  <Image
                    src={item.image}
                    fill
                    alt="careImage"
                    className="object-cover rounded"
                  />
                  <div className="absolute top-1/2">
                    {' '}
                    <h1 className="text-green-500 text-2xl font-bold">
                      {item.title}
                    </h1>
                    <p className="text-green-500 text-2xl font-bold">
                      {item.des}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Carousel
