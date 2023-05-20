import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";


const MyToys = () => {
    const [myToys, seMytToys] = useState([]);
    const { user } = useContext(AuthContext)

    // console.log(user)
    useEffect(() => {
        const getToy = async () => {
            const res = await fetch(`https://power-toy-land-server.vercel.app/mytoys?email=${user?.email}`);
            const data = await res.json();
            seMytToys(data);

        }
        getToy()
    }, [user])



    //function to delete a toy
    const deleteToy = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://power-toy-land-server.vercel.app/mytoys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => {
                        if (res.ok) {
                            const resting = myToys.filter(toy => toy._id !== id)
                            seMytToys(resting)
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded p-10">
            <table className="w-full AllUserTable text-center text-gray-500">
                <thead className="text-xl text-gray-200 uppercase bg-transparent  ">
                    <tr >
                        <th scope="col" className="px-4 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Seller  Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Seller  Email
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Toy  Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Sub-Category
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Rating
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Available  quantity
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Description
                        </th>
                    </tr>
                </thead>
                {
                    myToys.map(toy => <MyToysTable deleteToy={deleteToy} toy={toy} key={toy._id}></MyToysTable>)
                }
            </table>
        </div>
    );
};

export default MyToys;