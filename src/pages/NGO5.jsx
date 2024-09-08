import { Card } from "../components/Card";
import { NgoLowerCard } from "../components/ngoLowerCard";
import { RightSideBar } from "../components/RightSideBar";
import { Sidebar } from "../components/Sidebar";
import TransactionList from "../TransactionList";



export function NGO5({title, body}) {
    return <div>
        <div className="flex">
        <div >
          <Sidebar/>
        </div>
        <div>
          <div className="flex ml-20 mr-2">
            <Card value={"$4.1k"} topLeftHeadingValue={"Funds Raised"}/>
            <Card value={"3.5k"} topLeftHeadingValue={"People Helped"} />
          </div>
          <div className="mt-4 ml-20 h-[100px]">
              <NgoLowerCard title={"CARE"} body={"CARE is a global humanitarian organization fighting poverty and providing disaster relief. They focus on empowering women and children, promoting education, healthcare, and economic development to create lasting positive change."} pastTransaction={<TransactionList address={'0xdb7ea3c6b345599f91d83b12a092e41736d985fdf92a416319dad54f9e333f15'}/>}/>
          </div>
        </div>
        <div>
          <RightSideBar title={"About us"} body={"At AnoCare, our mission is to transform the way content creators and non-governmental organizations (NGOs) collaborate to drive social impact. We are a forward-thinking platform dedicated to leveraging the power of Web3 and blockchain technology to facilitate secure, transparent, and anonymous fundraising for social welfare initiatives. By integrating Aptos blockchain, AnoCare ensures low transaction fees and robust security while preserving donor privacy."}/>
        </div>
      </div>
    </div>  
}
