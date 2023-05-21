import { useLoaderData } from "react-router-dom";
import AlluserTable from "./AlluserTable";
import { useMemo } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import dynamicTitle from "../../assets/dynamictitle";


const AllUserToys = () => {

    AOS.init({
        duration: 700,
        mirror: true,
        offset: 60,
    });

    dynamicTitle('All toys')

    const allToys = useLoaderData()
    const limitedToy = useMemo(() => allToys.slice(0, 20), [allToys]);

    // console.log(limitedToy)
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded p-10">
            <table className="w-full AllUserTable text-center text-gray-500" data-aos="fade-up">
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