import TransactionList from "../TransactionList";
import { Card } from "./Card";
import { LowerCard } from "./LowerCard";
import { RightSideBar } from "./RightSideBar";
import { Sidebar } from "./Sidebar";

export function Home() {
    return <div>
        <div className="flex">
        <div >
          <Sidebar/>
        </div>
        <div>
          <div className="flex ml-20 mr-2">
            <Card value={"$16.5k"} topLeftHeadingValue={"Funds Raised"}/>
            <Card value={"13.1k"} topLeftHeadingValue={"People Helped"} />
          </div>
          <div className="mt-4">
              <LowerCard />
              
          </div>
        </div>
        <div>
          <RightSideBar title={"About us"} body={"At AnoCare, our mission is to transform the way content creators and non-governmental organizations (NGOs) collaborate to drive social impact. We are a forward-thinking platform dedicated to leveraging the power of Web3 and blockchain technology to facilitate secure, transparent, and anonymous fundraising for social welfare initiatives. By integrating Aptos blockchain, AnoCare ensures low transaction fees and robust security while preserving donor privacy."}/>
        </div>
      </div>
    </div>
}