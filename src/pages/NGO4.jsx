import { Card } from "../components/Card";
import { NgoLowerCard } from "../components/ngoLowerCard";
import { RightSideBar } from "../components/RightSideBar";
import { Sidebar } from "../components/Sidebar";



export function NGO4({title, body}) {
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
              <NgoLowerCard title={"Oxfam"} body={"Oxfam is an international NGO working to alleviate global poverty and inequality. They provide emergency relief, support sustainable development, and advocate for social justice, focusing on empowering marginalized communities worldwide."} pastTransaction={""}/>
          </div>
        </div>
        <div>
          <RightSideBar title={"About us"} body={"At AnoCare, our mission is to transform the way content creators and non-governmental organizations (NGOs) collaborate to drive social impact. We are a forward-thinking platform dedicated to leveraging the power of Web3 and blockchain technology to facilitate secure, transparent, and anonymous fundraising for social welfare initiatives. By integrating Aptos blockchain, AnoCare ensures low transaction fees and robust security while preserving donor privacy."}/>
        </div>
      </div>
    </div>  
}

