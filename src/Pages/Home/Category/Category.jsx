import { useEffect, useState } from "react";


const Category = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        const fetchToys = async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json();
            setToys(data);
        }
        fetchToys();
    }, [])
    console.log(toys)
    return (
        <div>

        </div>
    );
};

export default Category;