"use client"
import { ClientProfile } from "@/components/client-profile";
import { ResultEvaluation } from "@/components/result-evaluation";
import { Suspense } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Profile() {
    const showNoPlans = true;


    return (
        <>
<ProtectedRoute>
  <Suspense fallback={<div>Loading client profile...</div>}>
            <div className="flex gap-5">
                <div className="">
                    
                <ClientProfile
                    //showPlanDetails={!showNoPlans} 
                    />
                    
                </div>
                {/* {showNoPlans && <div className="flex-1"><NoPlans /></div>}  */}
                <ResultEvaluation />
            </div>
            </Suspense>
            </ProtectedRoute>
        </>
    )
};