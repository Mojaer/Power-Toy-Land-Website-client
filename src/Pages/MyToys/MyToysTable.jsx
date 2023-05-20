import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToysTable = ({ toy, deleteToy }) => {

    const { price, quantity, subCategory, toyName, sellerName, _id,
        description, imageUrl, rating, sellerEmail } = toy




    return (
        <tbody>
            <tr className="bg-gray-700 text-gray-300  font-medium text-lg border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap ">
                    <img src={imageUrl} alt="" />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap ">
                    {sellerName}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap ">
                    {sellerEmail}
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
                    ${rating}
                </td>
                <td className="px-6 py-4">
                    {quantity}
                </td>
                <td className="px-6 py-4">
                    {description.slice(0, 15) + '...'}
                </td>
                <th scope="col" className="px-6 py-3">
                    <Link to={`/viewdetails/${_id}`} className="btn bg-gray-700 text-lg font-semibold">View</Link>
                    <Link to={`/viewdetails/${_id}`} className="btn bg-gray-700 text-lg font-semibold">Edit</Link>
                    <button onClick={() => deleteToy(_id)} className="btn bg-gray-700 text-lg text-red-500 font-semibold">delete</button>
                </th>
            </tr>
        </tbody>
    );
};

export default MyToysTable;