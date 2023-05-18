import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";


const Gallery = () => {
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        const galleryUpdate = async () => {

            const res = await fetch('/pictureGallery.json')
            const data = await res.json()
            setGallery(data)
        }
        galleryUpdate()
    }, [])

    return (
        <div className="my-12">
            <h1 className="text-5xl font-bold text-center my-8">Our Toy Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    gallery.map(pic => <GalleryCard key={pic.id} gallery={pic}></GalleryCard>)
                }

            </div>

        </div>
    );
};

export default Gallery;