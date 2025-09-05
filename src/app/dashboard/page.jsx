import React from 'react'
import Header from '@/components/Header';
import { UserProfile } from '@/components/user-profile';
import { Notification } from '@/components/notification';

const Dashboard = () => {
  return (
  <>
  <Header/>
  
  <UserProfile/>
  <Notification/>
  </>
  )
}

export default Dashboard;