"use client"
import React, { ReactNode } from 'react'

interface ButtonType {
    leftIcon?: ReactNode
    title: string
    rightIcon?: ReactNode
    extraStyle?: string
    onClick?:() => void
    type: "submit" | "button" | "reset"
}

const Button:React.FC<ButtonType> = ({leftIcon, title ,rightIcon, extraStyle, onClick, type}) => {


  return (
    <button type={type} onClick={onClick} className={`${extraStyle} bg-[#46A358] font-medium text-[16px] rounded-[6px] text-white py-[7px] flex items-center justify-center gap-[4px] px-[17px]`}>
        {leftIcon && leftIcon}
        <span>{title}</span>
        {rightIcon && rightIcon}
    </button>
  )
}

export default Button