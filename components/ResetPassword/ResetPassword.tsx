import React from 'react'
import Button from '../Button'
import Input from '../Input'

const ResetPassword = () => {
  return (
    <>
      <Input extraClass="mb-[17px]" placeholder="Enter new password" type="password" name="password" />
      <Input extraClass="mb-[17px]" placeholder="Enter code" type="number" name="otp" />
      <Button extraStyle="!w-full mt-[27px]" type="submit" title="Reset Password"/>
    </>
  )
}

export default ResetPassword