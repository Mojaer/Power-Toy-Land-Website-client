import { useLoaderData } from "react-router-dom";
import AlluserTable from "./AlluserTable";
import { useMemo, useState } from "react";
import dynamicTitle from "../../assets/dynamictitle";


const AllUserToys = () => {


    dynamicTitle('All toys')

    const toys = useLoaderData()
    const [allToys, setAllToys] = useState(toys)


    //search function for the toyname
    const searchItem = (event) => {
        event.preventDefault()
        const item = event.target.search.value
        const matchItem = allToys.filter(toy => toy.toyName.toLowerCase() === item.toLowerCase())
        setAllToys(matchItem)

    }


    const limitedToy = useMemo(() => allToys.slice(0, 20), [allToys]);

    // console.log(limitedToy)
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded p-10">
            <form onSubmit={searchItem}>
                <div className="my-7 flex md:justify-end">
                    <input type="text" name="search" className="bg-transparent border border-r-0 border-gray-300 text-white text-lg rounded-lg block pl-5 p-2.5 -mr-2 " required />
                    <input type="submit" className="rounded-lg  pl-5 p-2.5 font-semibold border border-l-0 border-gray-300 bg-blue-700" value='Search' />
                </div>
            </form>
            <table className="w-full AllUserTable text-center text-gray-500" >
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
                    limitedToy.map(toy => <AlluserTable toy={toy} key={toy._id}></AlluserTable>)
                }
            </table>
        </div>

    );
};

export default AllUserToys;