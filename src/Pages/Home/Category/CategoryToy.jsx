import { Link } from "react-router-dom";


const CategoryToy = ({ toy }) => {
    // console.log(toy)
    const { imageUrl, toyName, price, rating, _id } = toy
    // console.log(_id)
    return (
        <div className="card lg:card-side  shadow-xl bg-pink-900 justify-between ">
            <figure
                className="md:w-1/2"><img src={imageUrl} className="w-full "
                    style={{ transform: "scale(1.3)" }}
                    alt="Album" />
            </figure>
            <div className="card-body space-y-4 ">
                <h2 className="card-title text-2xl">Toy Name: <br /> {toyName}</h2>
                <p className="text-xl">Price:  {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-start">
                    <Link to={`/viewdetails/${_id}`} className="btn bg-lime-950 text-lg font-bold">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryToy;