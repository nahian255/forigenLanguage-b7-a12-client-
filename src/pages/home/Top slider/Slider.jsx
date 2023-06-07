import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import img from "../../../assets/img (4).jpg"


const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img} alt="langauge" /></figure>
                        <div className="card-body">
                            <h2 className="text-4xl text-orange-400">Language Courses </h2>
                            <p>Group or one-to-one classes, online or in Spain, beginner to advanced … our Spanish courses are suited to every learner.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img} alt="langauge" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Spanish Courses </h2>
                            <p>Group or one-to-one classes, online or in Spain, beginner to advanced … our Spanish courses are suited to every learner.</p>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img} alt="langauge" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Internships</h2>
                            <p>Group or one-to-one classes, online or in Spain, beginner to advanced … our Spanish courses are suited to every learner.</p>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;