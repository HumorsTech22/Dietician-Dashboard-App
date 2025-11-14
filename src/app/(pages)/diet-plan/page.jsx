"use client"
import { Suspense } from 'react'
import { ClientProfile } from "@/components/client-profile";
import CreateDietPlan from "@/components/create-diet-plan";

export default function DietPlan(){
    return(
        <>
   <div className="flex gap-2.5">
            <Suspense fallback={<div>Loading client profile...</div>}>
                    <ClientProfile />
                </Suspense>
     <CreateDietPlan/>
           </div>
        </>
    )
}