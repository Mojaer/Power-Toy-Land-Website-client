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


    //sorting function for prices
    const sortByLow = () => {
        fetch('https://power-toy-land-server.vercel.app/sort/1')
            .then((response) => response.json())
            .then(data => setAllToys(data));
    }

    const sortByHigh = () => {
        fetch('https://power-toy-land-server.vercel.app/sort/-1')
            .then((response) => response.json())
            .then(data => setAllToys(data));

    }


    const handleConvertToPDF = async () => {
        try {
            const url = window.location.href; // URL of the webpage to convert
            const response = await fetch(`https://power-toy-land-server.vercel.app/convert-to-pdf?url=${encodeURIComponent(url)}`);
            const pdfBlob = await response.blob();

            // // Optionally, you can save the PDF file locally or display it in an iframe
            const pdfUrl = URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'converted.pdf';
            link.style.display = 'none';

            // Append the anchor element to the DOM
            document.body.appendChild(link);

            // Simulate a click on the anchor element to start the download
            link.click();

            // Clean up the temporary URL and remove the anchor element
            URL.revokeObjectURL(url);
            document.body.removeChild(link);
        } catch (error) {
            console.error('PDF conversion request failed:', error);
        }

    };

    // console.log(limitedToy)
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded p-10">
            <button className="btn bg-blue-800 " onClick={handleConvertToPDF}> Make it PDF</button>
            <div className="flex items-center justify-end">
                <form onSubmit={searchItem}>
                    <div className="my-7 flex md:justify-end mr-4">
                        <input type="text" name="search" className="bg-transparent border border-r-0 border-gray-300 text-white text-lg rounded-lg block pl-5 p-2.5 -mr-2 " required />
                        <input type="submit" className="rounded-lg  pl-5 p-2.5  font-semibold border border-l-0 border-gray-300 bg-blue-700" value='Search' />
                    </div>
                </form>

                <div className="my-3 ">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn m-1 bg-blue-700">Sort</label>
                        <ul tabIndex={0} className="text-black dropdown-content menu p-2 shadow bg-base-300 rounded w-52">
                            <li><button onClick={sortByLow} >By Lowest price</button></li>
                            <li><button onClick={sortByHigh}>By Highest price</button></li>
                        </ul>
                    </div>
                </div>
            </div>



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