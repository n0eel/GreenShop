"use client"
import { usePathname } from "next/navigation"
import React, { ReactNode } from "react"

const layout:React.FC<{children:ReactNode}> = ({children}) => {
    const path = usePathname()


  return (
    <div>
        <div className="flex items-center text-[#3D3D3D] font-medium mt-[36px]">
            <span className="font-bold">Home /</span>
            <span className="pl-1">Shop</span>
            <span className="pl-1">{path.includes("shopping-cart") && "/ Shopping Cart"}</span>
        </div>
        {children}
    </div>
  )
}

export default layout