"use client"
import React, { SetStateAction } from "react"
import Button from "../Button"
import Input from "../Input"

interface LoginType {
    setIsLogin:React.Dispatch<SetStateAction<"login" | "register" | "verifyRegister" | "forgotPassword" | "reset-password">>
}

const LoginInput:React.FC<LoginType> = ({setIsLogin}) => {
    return (
        <>
            <p className="text-[13px] mb-[14px]">Enter your username and password to login.</p>
            <Input extraClass="mb-[17px]" placeholder="almamun_uxui@outlook.com" type="email" name="email"/>
            <Input placeholder="Password" type="password" name="password"/>
            <p onClick={() => setIsLogin("forgotPassword")} className="mt-[14px] text-[#46A358] text-end cursor-pointer text-[14px]">Forgot Password?</p>
            <Button extraStyle="!w-full mt-[27px]" type="submit" title="Login"/>
        </>
    )
}

export default LoginInput    