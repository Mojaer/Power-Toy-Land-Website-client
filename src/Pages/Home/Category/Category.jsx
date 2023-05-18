import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const Category = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        const fetchToys = async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json();
            setToys(data);
        }
        fetchToys();
    }, [])
    console.log(toys)

    return (
        <section className="my-10">
            <h1 className="text-5xl font-bold text-center my-8">Toy Categories: Explore & Choose</h1>
            <div>
                <Tabs>
                    <TabList className='flex justify-evenly flex-wrap mb-3 bg-slate-700'>
                        <Tab className="mr-2 py-2" >
                            <h1 className="px-3 border-b-2  border-transparent rounded-b-lg hover:text-red-400 hover:border-red-700 ">DC</h1>
                        </Tab>
                        <Tab className="mr-2 py-2">
                            <h1 className="px-3 border-b-2  border-transparent rounded-b-lg hover:text-red-300 hover:border-red-700 ">Marvel</h1>
                        </Tab>
                        <Tab className="mr-2 py-2">
                            <h1 className="px-3  border-b-2  border-transparent rounded-b-lg hover:text-red-300 hover:border-red-700 ">Anime</h1>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>

        </section>
    );
};

export default Category;