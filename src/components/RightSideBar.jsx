import "./CSS/font.css"
export function RightSideBar({title, body}) {
    return <div className="h-[97%] justify-start w-[310px] shadow-lg border  rounded-2xl mr-2 ml-4 bg-indigo-200">
        <div className="font-semibold titletext text-2xl ml-[30%] mr-[90px] mt-3 ">
            {title}
        </div>
        <div className="m-4 p-8 text-lg subtext">
            {body}
        </div>
    </div>
}