"use client"
import { ClientProfile } from "@/components/client-profile";
import NoPlans from "@/components/no-plans";
import { ResultEvaluation } from "@/components/result-evaluation";


export default function Profile(){
     const showNoPlans = true;
    return(
        <>
       

        <div className="flex gap-5">
     <ClientProfile showPlanDetails={!showNoPlans} />
    {/* {showNoPlans && <div className="flex-1"><NoPlans /></div>}  */}
    <ResultEvaluation /> 
        </div>
        </>
    )
};