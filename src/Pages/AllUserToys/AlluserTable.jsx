import { Link } from "react-router-dom";


const AlluserTable = ({ toy }) => {

    const { price, quantity, subCategory, toyName, sellerName, _id } = toy
    return (
        <tbody>
            <tr className="bg-gray-700 text-gray-300  font-medium text-xl border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap ">
                    {sellerName}
                </th>
                <td className="px-6 py-4">
                    {toyName}
                </td>
                <td className="px-6 py-4">
                    {subCategory}
                </td>
                <td className="px-6 py-4">
                    ${price}
                </td>
                <td className="px-6 py-4">
                    {quantity}
                </td>
                <th scope="col" className="px-6 py-3">
                    <Link to={`/viewdetails/${_id}`} className="btn bg-gray-800 text-lg font-semibold">View Details</Link>
                </th>
            </tr>
        </tbody>
    );
};

export default AlluserTable;