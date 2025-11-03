import React from 'react'
import { UserProfile } from '@/components/user-profile';
import { Notification } from '@/components/notification';
//import { ClientRisk} from "@/components/client-risk";
import ClientRisk from "../../../components/client-risk"
import DashboardSidebar from '@/components/dashboard-sidebar';
import GoalTracker from '@/components/goal-tracker';

const Dashboard = () => {
  return (
  <>

  
  <UserProfile/>
  <Notification/>

  <div className='flex gap-5'>
        {/* <DashboardSidebar/> */}
        <div className="flex flex-col gap-5 w-full">
          <GoalTracker/> 
          <ClientRisk/>
        </div>
      </div>
 
  </>
  )
}

export default Dashboard;