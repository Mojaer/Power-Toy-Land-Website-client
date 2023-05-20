import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToysTable from "./MyToysTable";


const MyToys = () => {
    const [myToys, seMytToys] = useState([]);
    const { user } = useContext(AuthContext)

    // console.log(user)
    useEffect(() => {
        const getToy = async () => {
            const res = await fetch(`http://localhost:5000/mytoys?email=${user?.email}`);
            const data = await res.json();
            seMytToys(data);

        }
        getToy()
    }, [user])

    console.log(myToys)

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded p-10">
            <table className="w-full AllUserTable text-center text-gray-500">
                <thead className="text-2xl text-gray-200 uppercase bg-transparent  ">
                    <tr >
                        <th scope="col" className="px-6 py-3">
                            Seller  Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Toy  Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sub-Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Available  quantity
                        </th>
                    </tr>
                </thead>
                {
                    myToys.map(toy => <MyToysTable toy={toy} key={toy._id}></MyToysTable>)
                }
            </table>
        </div>
    );
};

export default MyToys;