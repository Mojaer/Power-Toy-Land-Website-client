import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const toy = useLoaderData()


    const { price, quantity,
        description, _id } = toy

    const handleToyUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = {
            price, quantity, description,

        }

        fetch(`https://power-toy-land-server.vercel.app/toyupdate/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then((res) => {
                if (res.ok) {

                    Swal.fire({
                        icon: 'success',
                        title: 'Your toy is successfully updated',
                        confirmButtonText: 'ok',
                    })
                }

            })

        // console.log(toyName, sellerName, sellerEmail,
        //     description, imageUrl, subCategory, price, rating, quantity)
    }
    return (
        <div className="mt-10 mx-10 h-screen">
            <h1 className="text-5xl font-semibold w-3/4 mb-5 ">Update Your Toy </h1>

            <form className=" w-full " onSubmit={handleToyUpdate}>
                <div className="grid md:grid-cols-2 items-end gap-4">
                    <div className="py-1 w-full mx-auto">
                        <label className="ms-1 block mb-2 text-md font-medium text-white ">Toy Price</label>
                        <input type="number" defaultValue={price} name="price" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5" placeholder="$" required />
                    </div>


                    <div className="py-1 w-full mx-auto">
                        <label className="ms-1 block mb-2 text-md font-medium text-white ">Available Quantity</label>
                        <input type="number" defaultValue={quantity} name="quantity" className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5" placeholder="quantity" required />
                    </div>
                </div>
                <div className="py-3 w-2/3">
                    <label className="ms-1 block mb-2 text-md font-medium text-white ">Description</label>
                    <input type="text" defaultValue={description} name="description" maxLength={150} className="bg-transparent border border-gray-300 text-white text-lg rounded-lg block w-3/4 pl-5 p-2.5" placeholder="Tell about toy" required />
                </div>
                <div className="my-7 ">
                    <input className="btn text-gray-800 text-xl bg-blue-200 font-bold w-1/3" type="submit" value='Update The Toy' />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;