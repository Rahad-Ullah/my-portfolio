
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { Link } from "react-router-dom";

const Project = ({title, description, img1, img2, img3, liveLink, codeLink, rowDirection}) => {
    return (
        <div className={`flex flex-col md:flex-${rowDirection} justify-between items-center gap-12`}>
                <div className="w-full md:w-6/12">
                    <div className="mockup-browser border bg-base-300 z-10">
                        <div className="mockup-browser-toolbar">
                            <div className="input">{liveLink}</div>
                        </div>
                        <div className="flex justify-center px-4 pb-4 bg-base-200">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
                <div className={`flex-1 space-y-6 flex flex-col items-${rowDirection === 'row' ? 'start' : 'end'} text-${rowDirection === 'row' ? 'start' : 'end'}`}>
                    <h2 className="text-2xl md:text-3xl font-medium">{title}</h2>
                    <p className="text-sm md:text-base">{description}</p>
                    <div className="flex gap-5 pt-2">
                        <Link to={liveLink} target="_blank" className="btn btn-primary lg:text-base">Visit Now</Link>
                        <Link to={codeLink} target="_blank" className="btn btn-primary btn-outline lg:text-base">Source Code</Link>
                    </div>
                </div>
        </div>
    );
};

export default Project;