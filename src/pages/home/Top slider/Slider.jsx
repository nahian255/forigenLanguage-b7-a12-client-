import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import img from "../../../assets/img (4).jpg"
import img2 from '../../../assets/img (2).jpg'
import img3 from '../../../assets/img (5).jpg'
import img4 from '../../../assets/pasted-image-0-6-1024x619.jpg'
import img5 from '../../../assets/img (6).jpg'


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
                        <figure><img src={img2} alt="langauge" /></figure>
                        <div className="card-body">
                            <h2 className="text-4xl text-orange-400">Journey of Words </h2>
                            <p> Exploring Foreign Languages and Cultures .The Transformative Benefits of Learning a Foreign Language.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img3} alt="langauge" /></figure>
                        <div className="card-body">
                            <h2 className="text-4xl text-orange-400">Language Connections</h2>
                            <p> Bridging Cultures through Foreign Language Learning.  Expanding Horizons through Language Acquisition.Speaking of career prospects. </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img4} alt="langauge" /></figure>
                        <div className="card-body">
                            <h2 className="text-4xl text-orange-400">Embracing Linguistic Diversity</h2>
                            <p>The Joys and Challenges of Learning a Foreign Language.Additionally, learning a foreign language deepens your appreciation for your native language.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img2} alt="langauge" /></figure>
                        <div className="card-body">
                            <h2 className="text-4xl text-orange-400">Mastering the World</h2>
                            <p>Speaking of career prospects, being multilingual gives you a competitive edge in todays global job market...</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img} alt="langauge" /></figure>
                        <div className="card-body">
                            <h2 className="text-4xl text-orange-400">The Language Mosaic</h2>
                            <p>Foreign language learning is an enriching and transformative experience with numerous benefits. One of the key advantages is the cognitive boost it provides. When learning a foreign language.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;