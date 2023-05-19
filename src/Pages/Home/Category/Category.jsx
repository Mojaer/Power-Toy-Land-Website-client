import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryToy from "./CategoryToy";


const Category = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        const fetchToys = async () => {
            const res = await fetch('http://localhost:5000/toy')
            const data = await res.json();
            setToys(data);
        }
        fetchToys();
    }, [])

    const Marvel = toys.filter(toy => toy.subCategory === 'Marvel')
    const DC = toys.filter(toy => toy.subCategory === 'DC')
    const Transformer = toys.filter(toy => toy.subCategory === 'Transformer')

    // category function for the different categories
    const categorizedToy = (category) => {
        return (
            <article className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
                {
                    category.map(toy => <CategoryToy key={toy._id} toy={toy}></CategoryToy>)
                }
            </article>)
    }
    return (
        <section className="py-10">
            <h1 className="text-5xl font-bold text-center my-8">Toy Categories: Explore & Choose</h1>
            <div>
                <Tabs>
                    <TabList className='flex justify-evenly flex-wrap mb-3 bg-slate-700'>
                        <Tab className="mr-2 py-2" >
                            <h1 className="px-3 border-b-2  border-transparent rounded-b-lg hover:text-red-400 hover:border-red-700 ">
                                DC
                            </h1>
                        </Tab>
                        <Tab className="mr-2 py-2">
                            <h1 className="px-3 border-b-2  border-transparent rounded-b-lg hover:text-red-300 hover:border-red-700 ">
                                Marvel
                            </h1>
                        </Tab>
                        <Tab className="mr-2 py-2">
                            <h1 className="px-3  border-b-2  border-transparent rounded-b-lg hover:text-red-300 hover:border-red-700 ">
                                Transformer
                            </h1>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        {categorizedToy(DC)}
                    </TabPanel>
                    <TabPanel>
                        {categorizedToy(Marvel)}
                    </TabPanel>


                    <TabPanel>
                        {categorizedToy(Transformer)}
                    </TabPanel>
                </Tabs>
            </div>

        </section>
    );
};

export default Category;