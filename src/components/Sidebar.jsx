import { Profile } from "./profile";    
import { SidebarText } from "./SidebarText";
import { Link } from "react-router-dom";

export function Sidebar() {
    return <div className="h-[97%] justify-start w-[120%] shadow-lg border  rounded-2xl ml-4 bg-indigo-200">
        <div className="subtext">
            <Profile label={"A"}/>
            <Link to={"/ngo1"}><SidebarText title={"Amnesty International"} label={"Amnesty International"} /></Link>
            <Link to={"/ngo2"}><SidebarText title={"Doctors Without Borders"} label={"Doctors Without Borders"} /></Link>
            <Link to={"/ngo3"}><SidebarText title={"Greenpeace"} label={"Greenpeace"} /></Link>
            <Link to={"/ngo4"}><SidebarText title={"Oxfam"} label={"Oxfam"} /></Link>
            <Link to={"/ngo5"}><SidebarText title={"CARE"} label={"CARE"} /></Link>
            
        </div>
    </div>
}