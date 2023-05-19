

const CategoryToy = ({ toy }) => {
    console.log(toy)
    const { pictureUrl, name, price, rating } = toy
    console.log(name, pictureUrl)
    return (
        <div className="card lg:card-side  shadow-xl bg-pink-900 justify-between ">
            <figure
                className="w-1/2"><img src={pictureUrl} className="w-full "
                    style={{ transform: "scale(1.3)" }}
                    alt="Album" />
            </figure>
            <div className="card-body space-y-4 ">
                <h2 className="card-title text-2xl">Toy Name: <br /> {name}</h2>
                <p className="text-xl">Price:  {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-start">
                    <button className="btn bg-lime-950 text-lg font-bold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryToy;