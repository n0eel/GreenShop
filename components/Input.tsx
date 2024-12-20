"use client"
import { HidePassIcon, ShowPassIcon } from "@/public/icon/Icon"
import React, { useState } from "react"

interface LoginType {
  placeholder: string
  name: string
  extraClass?: string
  type: "password" | "text" | "email" | "number"
}

const Input: React.FC<LoginType> = ({ placeholder, name, extraClass, type }) => {
  const [showPass, setShowPass] = useState<boolean>(false)


  return (
    <label className="relative">
      <input className={`${extraClass} w-full pl-[14px] py-3 outline-none focus:border-[#46A358] border-[1px] border-[#EAEAEA] rounded-[5px]`} required type={type == "password" ? (showPass ? "text" : "password") : type} placeholder={placeholder} name={name} />
      {type == "password" &&
        <div onClick={() => setShowPass(!showPass)} className="flex items-center justify-center absolute top-0 right-[10px] cursor-pointer">
          <button type="button" className={`${showPass ? "hidden" : ""}`}> <ShowPassIcon /> </button>
          <button type="button" className={`${showPass ? "" : "hidden"}`}> <HidePassIcon /> </button>
        </div>
      }
    </label>
  )
}

export default Input