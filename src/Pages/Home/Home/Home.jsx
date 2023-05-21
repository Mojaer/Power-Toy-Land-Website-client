import Achievements from "../../Extrasections/Achievements.jsx/Achievements";
import Discount from "../../Extrasections/Discount/Discount";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Toy_Gallary/Gallery";


const Home = () => {
    return (
        <div className="px-4">
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Discount></Discount>
            <Achievements></Achievements>
        </div>
    );
};

export default Home;