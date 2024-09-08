

import { NgoLowerCard } from "../components/ngoLowerCard";
import { Sidebar } from "../components/Sidebar";
import { Card } from "../components/Card";
import { RightSideBar } from "../components/RightSideBar";
import TransactionList from "../TransactionList";



export function NGO1({title, body}) {
  return <div>
      <div className="flex  ">
      <div >
        <Sidebar/>
      </div>
      <div>
        <div className="flex ml-20 mr-2">
          <Card value={"$4.1k"} topLeftHeadingValue={"Funds Raised"}/>
          <Card value={"3.5k"} topLeftHeadingValue={"People Helped"} />
        </div>
        <div className="mt-4 ml-20 h-[100px]">
            <NgoLowerCard  title={"Amnesty International"} body={"Amnesty International is a global human rights organization advocating for justice, freedom, and equality. It campaigns against abuses like torture, wrongful imprisonment, and discrimination, promoting human dignity and fundamental rights worldwide."} pastTransaction={<TransactionList address={'0x2b2f8794db9dac1422821c7df0ca514fb3d66b192565f93b0dc6d8915f1fe6db'}/>}/>
        </div>
      </div>
      <div>
        <RightSideBar title={"About us"} body={"At AnoCare, our mission is to transform the way content creators and non-governmental organizations (NGOs) collaborate to drive social impact. We are a forward-thinking platform dedicated to leveraging the power of Web3 and blockchain technology to facilitate secure, transparent, and anonymous fundraising for social welfare initiatives. By integrating Aptos blockchain, AnoCare ensures low transaction fees and robust security while preserving donor privacy."}/>
      </div>
    </div>
  </div>  
}
