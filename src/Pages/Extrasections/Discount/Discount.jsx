import { FaLessThan } from "react-icons/fa";


const Discount = () => {
    return (
        <section className="md:flex text-gray-300 justify-around py-16 content-center items-center bg-slate-800 my-8 ">

            <div>
                <h1 className="text-5xl font-bold text-center mb-10 mt-5">
                    Choose Your Discount Plan
                    <br />
                    Save your Precious money</h1>
            </div>
            <div>
                <h1 className="text-xl font-semibold p-5 my-6 bg-gradient-to-r from-blue-600 to-blue-300 rounded-lg text-amber-800"><button><FaLessThan className="inline me-2 text-red-700 "></FaLessThan> Spend 100$+ to save 10$ Discount</button> </h1>
                <h1 className="text-xl font-semibold p-5 my-6 bg-gradient-to-r from-blue-600 to-blue-300 rounded-lg text-amber-800"><button><FaLessThan className="inline me-2 text-red-700 "></FaLessThan> Spend 100$+ to save 10$ Discount</button> </h1>
                <h1 className="text-xl font-semibold p-5 my-6 bg-gradient-to-r from-blue-600 to-blue-300 rounded-lg text-amber-800"><button><FaLessThan className="inline me-2 text-red-700 "></FaLessThan> Spend 100$+ to save 10$ Discount</button> </h1>
                <h1 className="text-xl font-semibold p-5 my-6 bg-gradient-to-r from-blue-600 to-blue-300 rounded-lg text-amber-800"><button><FaLessThan className="inline me-2 text-red-700 "></FaLessThan> Spend 100$+ to save 10$ Discount</button> </h1>

            </div>


        </section>
    );
};

export default Discount;