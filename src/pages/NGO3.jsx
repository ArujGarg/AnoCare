import { Card } from "../components/Card";
import { NgoLowerCard } from "../components/ngoLowerCard";
import { RightSideBar } from "../components/RightSideBar";
import { Sidebar } from "../components/Sidebar";



export function NGO3({title, body}) {
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
              <NgoLowerCard title={"Greenpeace"} body={"Greenpeace is a global environmental organization advocating for climate action, ocean conservation, and protection of natural habitats. They use peaceful protests and campaigns to promote sustainable solutions and environmental justice."} pastTransaction={"G7b9K3yQ5FzX2Lw1J6nA8mD0Pq4R9TtV2hC8xZ1sM4gN5vW3kY6dL7jF1pQ0r donated! t5N4wL8xQ7pZ9K2mR1jB3gY6C0nV5qD2H7kM9aP3F8dT1sL6vW4zG0J3pY9X1r donated! L6rT4nV9K1jX7Y2dC5B8pF3W0N2mZ5qH9P6yR3L1gD7tW8kM0pJ2vQ4xC9sF5N donated! X1bG3zK4nY6qT7jV9P8mD5L2rN0F1wC3pR4xL8dM9W5kJ2tQ7vY6gP1nH0sF3Z donated! t9D7nX5kL1pV8gJ2mR4C0Y3B6wN1qZ9F2H5rP7T0dW8yL4M3jQ6xC2vP9K1sF7 donated!"}/>
          </div>
        </div>
        <div>
          <RightSideBar title={"About us"} body={"At AnoCare, our mission is to transform the way content creators and non-governmental organizations (NGOs) collaborate to drive social impact. We are a forward-thinking platform dedicated to leveraging the power of Web3 and blockchain technology to facilitate secure, transparent, and anonymous fundraising for social welfare initiatives. By integrating Aptos blockchain, AnoCare ensures low transaction fees and robust security while preserving donor privacy."}/>
        </div>
      </div>
    </div>  
}


