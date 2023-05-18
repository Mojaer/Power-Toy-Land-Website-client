import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Toy_Gallary/Gallery";


const Home = () => {
    return (
        <div className="px-4">
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;