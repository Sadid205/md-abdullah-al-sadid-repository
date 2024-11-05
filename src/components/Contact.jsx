const Contact = ()=>{
    return (
        <div className="h-full w-11/12 m-auto flex flex-col gap-4 sm:ms-auto">
            <div className="flex mb-8 justify-between p-2 border-b border-dashed">
                <h1 className="text-gray-600 font-bold text-xl">CONTACT</h1>
                <h1 className="text-gray-600 font-bold text-xl">06</h1>
            </div>
            <div>
                <form className="flex flex-col items-center">
                    <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <div className="flex flex-col md:flex-row">
                        <input id="name" type="text" className="my-2 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Name" />
                        <input id="email" type="email" className="my-2 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email" />
                    </div>
                    <input id="subject" type="text" placeholder="Subject" className="my-2 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600" />
                    <textarea id="message" rows={5} placeholder="Say Something" className="my-2 py-2 px-4 rounded-md bg-gray-800 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600" defaultValue={""} />
                    </div>
                    <button className="text-md mt-5 rounded-md py-2 px-4 bg-yellow-400 hover:bg-amber-400 text-gray-500 font-bold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Send Message
                    </button>
                </form>
                </div>
        </div>
    )
}

export default Contact

