import React from "react";
import styles from "./Home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* main section on homepage */}
      <section className={styles.home}>
        {/* carousel slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          className={styles.homeslider}
        >
          <SwiperSlide>
            <img src="/images/homepage-cover.JPG" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/background-cover.jpg" alt="Slide 2" />
          </SwiperSlide>
        </Swiper>

        {/* overlay content */}
        <div className={styles.homeoverlay}>
          <h1>Welcome to Hi-Grade Systems Ltd</h1>
          <p>
            Your one-stop destination for graded quality real estate
            construction & fiscal management consultancy.
          </p>
          <Link to="/about">
            <button className="btn-home">
              <div className="home-about">About Us</div>
              <div>
                <FaArrowRight />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
