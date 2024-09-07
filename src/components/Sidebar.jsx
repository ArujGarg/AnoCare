import { Profile } from "./profile";    
import { SidebarText } from "./SidebarText";

export function Sidebar() {
    return <div className="h-[97%] justify-start w-[120%] shadow-lg border  rounded-2xl ml-4 bg-indigo-200">
        <div className="subtext">
            <Profile label={"A"}/>
            <SidebarText label={"Amnesty International"} />
            <SidebarText label={"Doctors Without Borders "} />
            <SidebarText label={"Greenpeace"} />
            <SidebarText label={"Oxfam"} />
            <SidebarText label={"CARE"} />
        </div>
    </div>
}