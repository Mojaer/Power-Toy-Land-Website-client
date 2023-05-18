import { Mousewheel } from 'swiper';
import 'swiper/css';
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from 'react';

const Banner = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log(screenWidth)
    return (


        <div className='mx-auto mt-5'>
            <Swiper
                watchSlidesProgress={true} slidesPerView={screenWidth > 992 ? 3.7 : screenWidth > 760 ? 2.7 : screenWidth > 576 ? 1.8 : 1.2}
                direction={"horizontal"} modules={[Mousewheel]}
                mousewheel={true}
                className="mySwiper">
                <SwiperSlide className='Slide-6 text-center '>
                    <div className='space-y-1 p-4'>
                        <h2 className='font-bold text-4xl'>Grab Your Heros</h2>
                        <h3 className='my-3'>Power Up Your Playtime with Superhero Toys From the </h3>
                        <img className='w-2/3 mx-auto' src="/public/power_toy_land-2.png" alt="" />
                    </div>

                </SwiperSlide>

                <SwiperSlide className='Slide-1 text-center '>
                    <img className='banner-img' src="/BannerImage/Thor.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='Slide-2 text-center'>
                    <img className='banner-img' src="/BannerImage/captain-america.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='Slide-3 text-center'>
                    <img className='banner-img' src="/BannerImage/spiderman-webs.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='Slide-4 text-center'>
                    <img className='banner-img' src="/BannerImage/Batman.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='Slide-5 text-center'>
                    <img className='banner-img' src="/BannerImage/Deku.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='Slide-6 text-center '>
                    <img className='banner-img' src="/BannerImage/marvel.jpg" alt="" />
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Banner;