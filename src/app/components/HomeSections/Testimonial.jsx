'use client'
import React from "react";
import User from "../assets/User Img.svg";
import Quotes from "../assets/Quotes.svg";
import Star from "../assets/star.svg";
import GrayStar from "../assets/grey star.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      userImage: User,
      quoteImage: Quotes,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      stars: [Star, Star, Star, Star, GrayStar],
      userName: "Alamin Hasan",
      userRole: "Food Specialist",
    },
    {
      userImage: User,
      quoteImage: Quotes,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      stars: [Star, Star, Star, Star, GrayStar],
      userName: "RHS",
      userRole: "Food Vlogger",
    },
    {
      userImage: User,
      quoteImage: Quotes,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      stars: [Star, Star, Star, Star, GrayStar],
      userName: "Hasan",
      userRole: "Food Vlogger",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-12">
          <p className="primary-color fs-4 Great-Vibes">Testimonials</p>
          <p className="fs-2 fw-bold text-white mb-5">
            What our clients are saying
          </p>
          <div className="container bg-flower">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="container whiteTestimonial">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-sm-8">
                        <div className="text-center">
                          <Image
                            src={testimonial.userImage}
                            alt="user"
                            className="img-fluid mt-3 user"
                          />
                          <div className="text-center">
                            <Image
                              src={testimonial.quoteImage}
                              alt="quotes"
                              className="img-fluid"
                            />
                            <p className="text-muted">{testimonial.text}</p>
                            <div className="d-flex justify-content-center">
                              {testimonial.stars.map((star, starIndex) => (
                                <Image
                                  src={star}
                                  alt="star"
                                  className="img-fluid mx-1"
                                  key={starIndex}
                                />
                              ))}
                            </div>
                            <div className="my-3">
                              <p className="text-black">
                                {testimonial.userName}
                              </p>
                              <p className="text-muted">
                                {testimonial.userRole}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
