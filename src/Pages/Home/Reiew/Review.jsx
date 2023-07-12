
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Navigation, Pagination } from 'swiper';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

// import required modules


const Review = () => {

    return (
        <section className='mx-auto my-8'>
            <h1 className="text-5xl font-bold text-center mb-10 mt-5">Clients Review</h1>
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
                <SwiperSlide>
                    <div className="hero w-5/6 mx-auto py-5  bg-transparent">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://images.prothomalo.com/prothomalo-english/2021-09/36db072f-17ab-4aae-9e82-9acbfd2dc995/prothomalo_import_media_2020_04_23_7ccd107ec62a3b319a411828e405ffbb_5ea0fb46be8aa.jpg?w=1200&h=675"
                                className="w-5/6 md:w-2/6 shadow-2xl rounded" />
                            <div >
                                <h1 className="text-3xl md:text-left text-center font-bold">Habibul Bashar Shumon </h1>
                                <p className="py-6 md:text-left text-center"> My visit to ToyLandia was nothing short of amazing! The store was immaculately organized, and the staff greeted me with warm smiles and helpful attitudes. The wide variety of toys catered to every interest, and the quality of the products exceeded my expectations.</p>

                                <div className='text-4xl text-center text-yellow-200'>
                                    <Rating
                                        placeholderRating={4.3}
                                        emptySymbol={<AiOutlineStar />}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar />}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero w-5/6 mx-auto py-5 bg-transparent">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/WWx9RMg/4.jpg" className="w-5/6 md:w-2/6 shadow-2xl rounded" />
                            <div >
                                <h1 className="text-3xl md:text-left text-center font-bold">Shahidul Khabir Khan </h1>
                                <p className="py-6 md:text-left text-center"> Power Toyland provided an exceptional shopping experience with a wide variety of toys, friendly staff, and engaging sections for all ages. Highly recommended for imaginative play!</p>

                                <div className='text-4xl text-center text-yellow-200'>
                                    <Rating
                                        placeholderRating={4.8}
                                        emptySymbol={<AiOutlineStar />}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar />}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero w-5/6 mx-auto py-5  bg-transparent">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/yVgnnPr/number-1.jpg" className="w-5/6 md:w-2/6 shadow-2xl rounded" />
                            <div >
                                <h1 className="text-3xl md:text-left text-center font-bold">Khaled Uz Zaman </h1>
                                <p className="py-6 md:text-left text-center">Power Toyland had a decent selection of toys, but the cluttered and disorganized store layout was
                                    off-putting. The Action-Packed Adventure section lacked variety, and the Creative \Corner had low-quality supplies. Improvements in organization and product quality are needed.ToyLandia had a decent selection of toys, but the cluttered and disorganized store layout was off-putting. The Action-Packed Adventure section lacked variety, and the Creative Corner had low-quality supplies. Improvements in organization and product quality are needed.
                                </p>

                                <div className='text-4xl text-center text-yellow-200'>
                                    <Rating
                                        placeholderRating={3.7}
                                        emptySymbol={<AiOutlineStar />}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar />}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </section>
    );
}

export default Review
