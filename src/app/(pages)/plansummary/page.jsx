import Preview from "@/components/preview";
import { ClientProfile } from "@/components/client-profile";

export default function PlanSummary(){
    return(
        <>
<div className="flex gap-2.5 ">
          <ClientProfile />
        <Preview/>
        </div>
        </>
    )
};