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
        <section className="mb-5 mt-10 mx-auto ">
            <h1 className="text-5xl font-bold text-center my-8">Our Toy Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8  mx-auto">
                {
                    gallery.map(pic => <GalleryCard key={pic.id} gallery={pic}></GalleryCard>)
                }

            </div>

        </section>
    );
};

export default Gallery;