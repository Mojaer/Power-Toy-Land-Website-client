import { MdOutlinePeopleAlt, MdShoppingCartCheckout, MdStarPurple500 } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Achievements = () => {
    AOS.init({
        duration: 700,
        mirror: false,

    });
    return (
        <section className="pt-5 pb-8">
            <h1 className="text-5xl font-bold text-center mb-10 mt-5">Our Achievements</h1>
            <div className="grid lg:grid-cols-3">
                <article className='flex items-center py-8'>
                    <p ><MdOutlinePeopleAlt className='border-2 rounded-full text-orange-400 p-2 border-red-400 text-9xl'></MdOutlinePeopleAlt></p>
                    <div className='ms-3'>
                        <h4 className='from-neutral-400 text-2xl'>Customers</h4>
                        <h1 className='from-neutral-300 text-5xl font-semibold'>10,000+</h1>

                    </div>

                </article>
                <article className='flex items-center py-8'>
                    <p ><MdStarPurple500 className='border-2 rounded-full text-orange-400 p-2 border-red-400 text-9xl'></MdStarPurple500></p>
                    <div className='ms-3'>
                        <h4 className='from-neutral-400 text-2xl'>Reviews</h4>
                        <h1 className='from-neutral-300 text-5xl font-semibold'>9,000+</h1>

                    </div>

                </article>
                <article className='flex items-center py-8'>
                    <p ><MdShoppingCartCheckout className='border-2 rounded-full text-orange-400 p-2 border-red-400 text-9xl'></MdShoppingCartCheckout></p>
                    <div className='ms-3'>
                        <h4 className='from-neutral-400 text-2xl'>Sales</h4>
                        <h1 className='from-neutral-300 text-5xl font-semibold'>34,000+</h1>

                    </div>

                </article>
            </div>
            <div className='py-8 relative'>
                <p data-aos="fade-down" className='w-2/5 flex justify-center mx-auto'> <img className='w-2/6' src="/number-one.png" alt="" /></p>
                <h1 data-aos="fade-up" className=' lg:text-5xl text-lg bg-gradient-to-t from-orange-800 via-orange-700 to-orange-600 rounded-xl border-4 border-gray-400 text-gray-300 text-center  w-2/5 mx-auto py-7 lg:py-14 -mt-8 lg:-mt-16'>Best seller of january 2023</h1>

            </div>

        </section>
    );
};

export default Achievements;