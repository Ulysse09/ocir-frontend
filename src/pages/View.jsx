import DashboardLayout from "@/components/DashboardLayout"
import { useState } from "react";
export default function Page() {
  const [campaigns,setCampaigns] = useState([])
  return (
  <DashboardLayout>
    <div className="mt-8 mx-4 sm:mx-6 md:mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> 
          
              {campaigns.map((campaign) => {
                const percentage = Math.min((campaign.raised/campaign.goal)*100,100);

              return (

                <div key={campaign.id} className=" bg-white shadow-lg rounded-lg">

                <div key={campaign.id} onClick={() => setSelectedCampaign(campaign)} >
                  <h3>{campaign.title}</h3>
                  <p className="">{campaign.desc}</p>
                  <p>
                    Goal: {campaign.goal} ETH | Collected: {campaign.raised} ETH
                  </p>
                  <p>
                    Status: {campaign.active?'Active':'Not-active'} 
                  </p>
                    <p>Progress :{percentage} %</p>
                  <div className="w-full bg-gray-300 rounded-full h-1 overflow-hidden">
                    <div className="h-full bg-green-500 transition-all duration-500" 
                    style={{ width: `${percentage}%` }}/>

                  </div>
                
                </div>
                </div>
              )
              })}
        </div>
  </DashboardLayout>
  )
     
}
