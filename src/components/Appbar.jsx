import { Link } from "react-router-dom";
export function Appbar() {
    return (
        <div className="shadow h-20 flex justify-between m-2 ml-4 rounded-lg bg-slate-500"> {/* Greyish black */}
            <div className="flex titletext flex-col justify-center h-full ml-10 font-bold text-3xl cursor-pointer text-white"> {/* White text */}
                <Link to="/">AnoCare</Link>
            </div>
            <div className="flex">
                <Link to={"/verify"}>
                    <div 
                        style={{ borderRadius: "4px" }} 
                        className="flex flex-col subtext justify-center font-bold text-2xl h-full mr-6 text-white hover:bg-slate-700 cursor-pointer"> {/* White text and greyish black hover */}
                        Get Verified
                    </div>
                </Link>
            </div>
        </div>
    );
}
