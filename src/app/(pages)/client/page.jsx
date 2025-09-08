"use client"

import ClientTable from "@/components/clientTable"
import Search from "@/components/search"

export default function Client() {
    return (
        <>
            <p className="text-black">Client Page</p>
            {/* <Search/> */}
            <ClientTable/>
        </>
    )
}