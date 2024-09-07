import { Profile } from "./profile";
import { SidebarText } from "./SidebarText";

export function Sidebar() {
    return <div className="h-screen justify-start w-[20%] shadow-xl ">
        <div>
            <Profile label={"A"}/>
            <SidebarText label={"Overview"} />
            <SidebarText label={"Supporters"} />
            <SidebarText label={"Tools"} />
            <SidebarText label={"Page Settings"} />
            <SidebarText label={"My Account"} />
        </div>
    </div>
}