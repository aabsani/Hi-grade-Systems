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
        <div className={styles.overlay}></div> {/* ← dark overlay */}
        {/* overlay content */}
        <div className={styles.homeoverlay}>
          <h1>Welcome to Hi-Grade Systems Ltd</h1>
          <p>
            Your one-stop destination for graded quality real estate
            construction & fiscal management consultancy.
          </p>
          <Link to="/about">
            <button className={styles.btnHome}>
              <div className={styles.homeAbout}>About Us</div>
              <div>
                <FaArrowRight />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Who we are section on homepage */}
      <section className={styles.aboutHomeLayout}>
        <div className={styles.container}>
          <div className={styles.innerWrapper}>
            <h1>Who We Are</h1>
            <p>
              At Allah Inna’so Nigeria Limited, we specialize in the supply and
              distribution of high-quality frozen foods to retail outlets,
              hospitality establishments, and individual customers. Our diverse
              product range includes frozen foods such as Turkey, Chicken, Fish
              and Beef in a wide range of variations.
            </p>
            <Link to="/about">
              <button className={styles.btnHome}>
                <div className={styles.homeAbout}>More</div>
                <div>
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
          <div className="about-img-container">
            <img
              src="/images/operations-2.jpeg"
              className={styles.homeImages}
              alt="about image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
