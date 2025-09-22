"use client"
import { ClientProfile } from "@/components/client-profile";
import HistoryPlan from "@/components/history-plan";

export default function PlanHistory(){
    return(
        <>

         <div className="flex gap-5 ">
          <ClientProfile showOverview={false} showPlanDetails={true}/>
     <HistoryPlan/>
           </div>
        </>
    )
};