import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryToy from "./CategoryToy";


const Category = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        const fetchToys = async () => {
            const res = await fetch('https://power-toy-land-server.vercel.app/toy')
            const data = await res.json();
            setToys(data);
        }
        fetchToys();
    }, [])

    const Marvel = toys.filter(toy => toy.subCategory === 'Marvel')
    const DC = toys.filter(toy => toy.subCategory === 'DC')
    const Transformer = toys.filter(toy => toy.subCategory === 'Transformer')

    //active the tab
    const [active, setActive] = useState(null)

    const activeMaker = (num) => {
        setActive(num)
    }


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
        <section className="pt-5 pb-4">
            <h1 className="text-5xl font-bold text-center mb-10 mt-5">Toy Categories: Explore & Choose</h1>
            <div>
                <Tabs>
                    <TabList className='flex justify-evenly flex-wrap mb-3 bg-slate-700'>
                        <Tab className={`mr-2 py-2 ${active == 1 ? 'bg-pink-900' : ''}`} onClick={() => activeMaker(1)}>
                            <h1 className="px-3 text-xl border-b-2  border-transparent rounded-b-lg hover:text-red-400 hover:border-red-700 ">
                                DC
                            </h1>
                        </Tab>
                        <Tab className={`mr-2 py-2 ${active == 2 ? 'bg-pink-900' : ''}`} onClick={() => activeMaker(2)}>
                            <h1 className="px-3 text-xl border-b-2  border-transparent rounded-b-lg hover:text-red-300 hover:border-red-700 ">
                                Marvel
                            </h1>
                        </Tab>
                        <Tab className={`mr-2 py-2 ${active == 3 ? 'bg-pink-900' : ''}`} onClick={() => activeMaker(3)}>
                            <h1 className="px-3 text-xl border-b-2  border-transparent rounded-b-lg hover:text-red-300 hover:border-red-700 ">
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