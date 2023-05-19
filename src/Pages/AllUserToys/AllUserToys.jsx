import { useLoaderData } from "react-router-dom";
import AlluserTable from "./AlluserTable";


const AllUserToys = () => {
    const allToys = useLoaderData()

    console.log(allToys)
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
                    allToys.map(toy => <AlluserTable toy={toy} key={toy._id}></AlluserTable>)
                }
            </table>
        </div>

    );
};

export default AllUserToys;