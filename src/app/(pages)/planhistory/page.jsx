"use client"
import { ClientProfile } from "@/components/client-profile";
import HistoryPlan from "@/components/history-plan";

export default function PlanHistory(){
    return(
        <>
        <p className="text-black">plan history page</p>

         <div className="flex gap-5">
          <ClientProfile />
     <HistoryPlan/>
           </div>
        </>
    )
};