
export function Card({value, topLeftHeadingValue }) {
    return <div className="flex flex-col w-[400px] shadow-lg border border-neutral-300 rounded-xl ml-4 bg-indigo-200 p-4 h-[250px]">
        <div className="font-bold titletext text-xl">
            {topLeftHeadingValue}
        </div>
        <div className="flex flex-1 subtext justify-center items-center font-bold text-7xl pl-0 ">
            {value}
        </div>
    </div>
}