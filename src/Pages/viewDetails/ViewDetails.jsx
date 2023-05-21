import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'


const ViewDetails = () => {
    const toy = useLoaderData()
    // console.log(toy)

    const { imageUrl, toyName, price, sellerName, sellerEmail,
        rating, quantity, description, subCategory } = toy
    const AltImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
    return (
        <section style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }} className="bg-fixed bg-cover bg-center bg-no-repeat w-full">
            <div className=" min-h-screen bg-black/40  w-full" >
                <div className="flex flex-col lg:flex-row justify-center items-center w-full ">
                    <div className="card  w-full max-w-sm  bg-base-300">
                        <div className="card-body w-full p-4">
                            <img className="w-full" src={imageUrl || AltImg} alt="" />

                        </div>
                    </div>
                    <div className="text-center lg:text-left w-3/4 md:ms-10 space-y-3 bg-slate-900/50 p-8 rounded-lg">
                        <h1 className="md:text-base lg:text-4xl font-bold text-green-500">{toyName}</h1>
                        <p className="md:text-base lg:text-3xl font-medium"><span className="font-semibold text-gray-300">Price : </span> {price}</p>
                        <p className="md:text-base lg:text-3xl font-medium"><span className="font-semibold text-gray-300">
                            <Rating
                                initialRating={rating}
                                emptySymbol={<AiOutlineStar></AiOutlineStar>}
                                fullSymbol={<AiFillStar></AiFillStar>}
                                readonly
                            /> </span> {rating}</p>
                        <p className="md:text-base lg:text-3xl font-medium"><span className="font-semibold text-gray-300">Quantity : </span> {quantity}</p>
                        <p className="md:text-base lg:text-3xl font-medium"><span className="font-semibold text-gray-300">Sub-Category : </span>  {subCategory}</p>
                        <p className="md:text-base lg:text-3xl font-medium"><span className="font-semibold text-gray-300">Seller-Name : </span>  {sellerName}</p>
                        <p className="md:text-base lg:text-3xl font-medium"><span className="font-semibold text-gray-300">Seller-Email : </span> {sellerEmail}</p>
                        <p className="md:text-base lg:text-3xl font-medium"><span className="font-semibold text-gray-300">Description : </span> {description}</p>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default ViewDetails;