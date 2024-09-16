export function NgoLowerCard({ title, body, pastTransaction }) {
    return (
        <div className="h-[380%] w-[97%] shadow-lg border rounded-2xl ml-[16px] mr-[30px] mt-[10px] bg-slate-500">
            <div className="titletext text-white"> {/* White text */}
                {title}
            </div>
            <div className="subtext font-semibold mt-4 ml-5 mr-5 mb-4 text-white"> {/* White text */}
                {body}
            </div>
            <div className="subtext text-base font-semibold mt-6 text-white"> {/* White text */}
                {pastTransaction}
            </div>
        </div>
    );
}
