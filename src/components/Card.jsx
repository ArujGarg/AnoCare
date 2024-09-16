export function Card({ value, topLeftHeadingValue }) {
    return (
        <div className="flex flex-col w-[400px] shadow-lg border border-neutral-300 rounded-xl ml-4 bg-slate-500 p-4 h-[250px] hover:scale-105 hover:duration-200">
            <div className="font-bold titletext text-xl text-white"> {/* White text for heading */}
                {topLeftHeadingValue}
            </div>
            <div className="flex flex-1 subtext justify-center items-center font-bold text-7xl text-white pl-0"> {/* White text for value */}
                {value}
            </div>
        </div>
    );
}
