'use client'

import Image from 'next/image'
import React from 'react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonial = () => {
  const FeedBack = [
    {
      id: 1,
      des: 'CareXYZ provided a very caring and responsible babysitter for our child. We are completely satisfied with the service.',
      name: 'Rashed Mahmud',
      title: 'Parent',
      destination: 'student',
      image:
        'https://i.ibb.co.com/1GzR4GDV/alexandru-zdrobau-BGz8v-O3p-K8k-unsplash.jpg',
    },
    {
      id: 2,
      des: 'The caregiver for my elderly mother was very patient and supportive. CareXYZ is truly a trustworthy platform.',
      name: 'Nasrin Akter',
      destination: 'student',
      title: 'Family Member',
      image:
        'https://i.ibb.co.com/hJm87nWF/avi-richards-GJIc8-O6s-M5-M-unsplash.jpg',
    },
    {
      id: 3,
      des: 'The online booking process was very easy, and the caregiver arrived on time. Excellent service overall.',
      name: 'Mohammad Imran',
      title: 'Service User',
      destination: 'student',
      image:
        'https://i.ibb.co.com/1GzR4GDV/alexandru-zdrobau-BGz8v-O3p-K8k-unsplash.jpg',
    },
    {
      id: 4,
      des: 'CareXYZ has become a reliable care solution for our family. Their support team also responds very quickly.',
      name: 'Farhana Islam',
      title: 'Working Mother',
      destination: 'student',
      image:
        'https://i.ibb.co.com/d4KD3Kdp/nora-hutton-t-CJ44-OIqce-U-unsplash.jpg',
    },
    {
      id: 5,
      des: 'We feel stress-free after taking home care services for my father. The caregiver was highly professional.',
      name: 'Saiful Alam',
      title: 'Client',
      destination: 'student',
      image:
        'https://i.ibb.co.com/wN1vWRjr/navid-sohrabi-9y-ublr8b-Fk-unsplash.jpg',
    },
    {
      id: 6,
      des: 'CareXYZ delivered better service than we expected. We will definitely use their services again in the future.',
      name: 'Tania Rahman',
      title: 'Customer',
      destination: 'student',
      image:
        'https://i.ibb.co.com/0VVG3cZS/ayo-ogunseinde-Yd9t-GOc8-Gi0-unsplash.jpg',
    },
  ]

  return (
    <div>
      <h1 className="md:text-3xl font-bold text-center">Feedback</h1>
      <div className="mt-8">
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
          {FeedBack.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-64  bg-gray-200 rounded-xl p-5 relative">
                <div className="">
                  <p className="text-black text-2xl font-bold">{item.des}</p>
                </div>
                <div className="flex items-center absolute right-0 gap-2 ">
                  <div className="">
                    <h1 className="">{item.name}</h1>
                    <h1 className="">{item.destination}</h1>
                  </div>
                  <div className=" relative  h-12 w-12 ">
                    <Image
                      src={item.image}
                      fill
                      alt="careImage"
                      className=" rounded-full "
                    />
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

export default Testimonial
