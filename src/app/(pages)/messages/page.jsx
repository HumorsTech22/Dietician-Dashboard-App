"use client"

import AllChats from "@/components/all-chats"
import ChatProfile from "@/components/chatprofile"

export default function Messages(){
    return(
        <>
    
        <div className="flex gap-5">
        <AllChats/>
        <ChatProfile/>
        </div>
        </>
    )
};