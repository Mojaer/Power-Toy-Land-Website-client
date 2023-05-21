

const Blogs = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 py-16 px-4 gap-8">
            <div className="text-lg text-cyan-300 space-y-3">
                <h1 className="text-2xl text-cyan-300 px-12">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>

                <h4 className="text-lg text-gray-300 p-10 "><span className="text-gray-400">Access token: </span>
                    An access token is a token that represents a users authority to access particular resources or execute specific operations. usually it is issued by server <br /> <br />
                    <span className="text-gray-400">Refresh token: </span>
                    A refresh token is a long expiration time token that is used to get new Access token when old one is expired.
                    <br /><br />

                    <span className="text-gray-400">Storing the token: </span>
                    To make authenticated requests to APIs, the access token is frequently saved in a user's memory, in the form of a variable or a session.On the other hand the refresh token is needed more secure storage mechanism. The refresh is stored  in a secure HTTP-only cookie or in a local storage mechanism provided by the client's runtime environment.

                </h4>
            </div>
            <div className="text-lg text-cyan-300 space-y-3">
                <h1 className="text-2xl text-cyan-300 px-12">Compare SQL and NoSQL databases</h1>

                <h4 className="text-lg text-gray-300 p-10 "><span className="text-gray-400">SQL Database: </span>
                    <ul className="list-disc ms-4">
                        <li>Provide strong capabilities through SQL in quarrying</li>
                        <li>Ideal for strict data integrity</li>
                        <li>enhance strong data consistency and ACID properties</li>
                        <li>Provide efficiency for structured data with well defined relationship</li>
                    </ul>
                    <p className="text-gray-400">On the other Other hand in No-SQL database</p>
                    <ul className="list-disc ms-4">
                        <li>Sacrifice complex querying for scalability and performance.</li>
                        <li>Designed for scalability and high-speed operations.</li>
                        <li>Provide consistency and availability.</li>
                        <li>Provide consistency and availability.</li>
                    </ul>

                </h4>
            </div>
            <div className="text-lg text-cyan-300 space-y-3">
                <h1 className="text-2xl text-cyan-300 px-12">What is express js? What is Nest JS ?</h1>

                <h4 className="text-lg text-gray-300 p-10 ">
                    Express.js is a Node.js lightweight online application framework, whereas NestJS is an Angular-inspired progressive framework. NestJS extends Node.js development with TypeScript, allowing for a more structured approach to building scalable server-side applications. It uses Express.js to handle HTTP requests and adds capabilities and abstractions to make creating powerful apps more efficient and maintainable.

                </h4>
            </div>
            <div className="text-lg text-cyan-300 space-y-3">
                <h1 className="text-2xl text-cyan-300 px-12 ">What is MongoDB aggregate and how does it work ?</h1>

                <h4 className="text-lg text-gray-300 p-10 ">
                    The aggregate function in MongoDB allows for extensive data processing and analysis on collections. It works in phases, with each stage performing specialized tasks such as filtering, sorting, grouping, and converting data. The input data is processed progressively via these steps, and at each level, the data is updated based on the prescribed operation. The aggregate function in the database enables powerful data manipulation and aggregation, making it suited for tasks such as generating reports, performing analytics, and retrieving summary findings from big datasets.

                </h4>
            </div>

        </div>
    );
};

export default Blogs;