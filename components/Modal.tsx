"use client"
import { ExitIcon } from "@/public/icon/Icon"
import React, { ReactNode, SetStateAction, useState } from "react"

interface ModalType {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
    width: number
    children: ReactNode
}

const Modal: React.FC<ModalType> = ({ isOpen, setIsOpen, width, children }) => {
    return (
        <div onClick={(e) => (e.target as HTMLDivElement).id == "wrapper" ? setIsOpen(false) : ""} id="wrapper" className={`fixed inset-0 backdrop:blur bg-[#00000029] flex items-center justify-center ${!isOpen && "scale-0"}`}>
            <div style={{ width: `${width}px` }} className="absolute pt-[50px] px-5 pb-[68px] bg-white rounded-md">
                <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3">
                    <ExitIcon/>
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal