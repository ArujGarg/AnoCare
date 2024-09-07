export function Appbar() {
    return <div className="shadow h-20 flex justify-between m-2 ml-4 rounded-lg bg-indigo-300 ">
        <div className="flex titletext flex-col justify-center h-full ml-10 font-bold  text-3xl cursor-pointer ">
            AnoCare
        </div>
        <div className="flex">
            <div style={{borderRadius:"4px"}} className="flex flex-col subtext justify-center font-bold text-2xl h-full mr-6   hover:bg-indigo-400 cursor-pointer">
                Get Verified 
            </div>
            {/* <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-4 mr-2">
                <div className="flex flex-col justify-center h-full text-2xl">
                    
                </div>
            </div> */}

        </div>
    </div>
}