import { Bars } from "react-loader-spinner";
import './GalleryCard.css'


const GalleryCard = ({ gallery }) => {

    if (!gallery) {
        return <>
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </>
    }

    const { image_url, name, instrument } = gallery
    return (
        <div className="max-w-sm my-5 ">
            <div className="gallery-card">
                <a href="#">
                    <img className="rounded-lg w-full h-auto gallery-card-image" src={image_url} alt="" />
                </a>
                <div className="p-5 gallery-card-title ">
                    <h1 className="font-semibold text-3xl">{name.toUpperCase()}</h1>
                    <h3 className="text-xl">{instrument.toUpperCase()}</h3>

                </div>

            </div>


        </div>
    );
};

export default GalleryCard;