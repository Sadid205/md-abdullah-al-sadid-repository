const Languages = ()=>{
    return (
        <div className="h-full sm:w-11/12 sm:ms-auto">
            <div className="border-b flex justify-between mb-8 mt-4 border-dashed">
                <h1 className="font-bold text-xl text-gray-500">LANGUAGES</h1>
                <h1 className="text-gray-600 font-bold text-xl">02</h1>
            </div>
           <div className="sm:flex">
           <div className="sm:w-1/2 w-full">
                <div className="relative max-w-sm mx-auto">
                    <div className="flex mb-2 items-center justify-between">
                        <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-amber-200">
                                English
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-amber-400">
                                80%
                            </span>
                        </div>
                    </div>
                        <div className="flex rounded-full h-2 bg-gray-200">
                            <div style={{width: '80%'}} className="rounded-full bg-amber-400" />
                        </div>
                </div>
                <div className="relative max-w-sm mx-auto">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-amber-200">
                                    HINDI
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-amber-400">
                                    70%
                                </span>
                            </div>
                        </div>
                            <div className="flex rounded-full h-2 bg-gray-200">
                                <div style={{width: '70%'}} className="rounded-full bg-amber-400" />
                            </div>
                    </div>
            </div>
            <div className="relative sm:w-1/2 max-w-sm mx-auto">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-amber-200">
                            Bangla
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-amber-400">
                            90%
                        </span>
                    </div>
                </div>
                <div className="flex rounded-full h-2 bg-gray-200">
                    <div style={{width: '90%'}} className="rounded-full bg-amber-400" />
                </div>
            </div>
           </div>
            </div>
    )
}

export default Languages