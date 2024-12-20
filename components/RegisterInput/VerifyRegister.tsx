"use client"
import React from "react"
import Button from "../Button"
import Input from "../Input"


interface VerifyType {
    registerEmail:string
}

const VerifyRegister:React.FC<VerifyType> = ({registerEmail}) => {
    return (
        <>
            <p className="text-[13px] mb-[14px]">Enter the code that was sent to your email</p>
            <Input extraClass="mb-[10px]" placeholder="Verify Code" type="text" name="code" />
            <Button extraStyle="!w-full mt-[27px]" type="submit" title="Verify" />
        </>
    )
}

export default VerifyRegister