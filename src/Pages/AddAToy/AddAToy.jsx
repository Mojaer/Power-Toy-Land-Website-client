import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";



const AddAToy = () => {

    const { user } = useContext(AuthContext);



    const handleToyAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const imageUrl = form.url.value;
        const subCategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const userToy = {
            toyName, sellerName, sellerEmail,
            description, imageUrl, subCategory,
            price, rating, quantity
        }

        fetch('http://localhost:5000/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userToy)
        })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Your toy is added',
                })
            })

        console.log(toyName, sellerName, sellerEmail,
            description, imageUrl, subCategory, price, rating, quantity)
    }


    return (
        <div className="mt-10 mx-10 ">
            <h1 className="text-5xl font-semibold w-3/4 mb-5 ">Add Your Toy </h1>

            <form className=" w-full h-full" onSubmit={handleToyAdd}>
                <div className="my-3 w-2/3">
                    <label className="ms-1 block mb-2 text-md font-medium text-white ">Name</label>
                    <input type="text" name="name" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5 " placeholder="name" required />
                </div>
                <div className="my-3 w-2/3">
                    <label className="ms-1 block mb-2 text-md font-medium text-white ">Your Name</label>
                    <input type="text" name="sellerName" defaultValue={user.displayName} className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5 " placeholder="YourName" required />
                </div>
                <div className="my-3 w-2/3">
                    <label className="ms-1 block mb-2 text-md font-medium text-white ">Your Email</label>
                    <input type="email" defaultValue={user.email} name="sellerEmail" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5" placeholder="name@domain.com" required />
                </div>



                <div className="grid md:grid-cols-2 items-end gap-4">
                    <div className="my-1 w-full mx-auto">
                        <label className="ms-1 block mb-2 text-md font-medium text-white ">Toy Price</label>
                        <input type="number" name="price" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5" placeholder="$" required />
                    </div>
                    <div className="my-3 w-2/3">
                        <label className="ms-1 block mb-2 text-md font-medium text-white ">Sub Category</label>
                        <select className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5" name="subcategory">
                            <option className="bg-black border border-gray-300 text-white" selected>Marvel</option>
                            <option className="bg-black border border-gray-300 text-white">DC</option>
                            <option className="bg-black border border-gray-300 text-white">Transformer</option>
                            <option className="bg-black border border-gray-300 text-white">Anime</option>
                        </select>
                    </div>
                    <div className="my-1 w-full mx-auto">
                        <label className="ms-1 block mb-2 text-md font-medium text-white ">Rating</label>
                        <input type="number" name="rating" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5" placeholder="rating" required />
                    </div>
                    <div className="my-1 w-full mx-auto">
                        <label className="ms-1 block mb-2 text-md font-medium text-white ">Available Quantity</label>
                        <input type="number" name="quantity" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5" placeholder="quantity" required />
                    </div>
                </div>


                <div className="my-3 w-2/3 ">
                    <label className="ms-1 block mb-2 text-md font-medium text-white ">Image Url</label>
                    <input type="url" name="url" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg  block w-3/4 pl-5 p-2.5" placeholder="Image url" />
                </div>
                <div className="my-3 w-2/3">
                    <label className="ms-1 block mb-2 text-md font-medium text-white ">Description</label>
                    <input type="text" name="description" maxLength={150} className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5" placeholder="Tell about toy" required />
                </div>

                <div className="py-7 ">
                    <input className="btn text-gray-800 text-xl bg-blue-200 font-bold w-1/3" type="submit" value='Add The Toy' />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;