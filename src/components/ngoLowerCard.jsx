


export function NgoLowerCard({title, body, pastTransaction}) {
    return <div className="h-[380%]  w-[97%] shadow-lg border  rounded-2xl ml-[16px] mr-[30px] mt-[10px] bg-indigo-200">
        <div className="titletext">
            {title}
        </div>
        <div className="subtext font-semibold mt-4 ml-5 mr-5 mb-4">
            {body}
        </div>
        <div className="subtext text-base font-semibold mt-6">
            {pastTransaction}
        </div>
    </div>
}