"use client"
import { ClientProfile } from "@/components/client-profile";
import { ResultEvaluation } from "@/components/result-evaluation";


export default function Profile(){
    return(
        <>
       

        <div className="flex gap-5">
        <ClientProfile/>
        <ResultEvaluation/>
        </div>
        </>
    )
};