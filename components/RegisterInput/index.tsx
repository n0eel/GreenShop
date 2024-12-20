import Button from "../Button"
import Input from "../Input"

const RegisterInput = () => {
  return (
    <>
      <p className="text-[13px] mb-[14px]">Enter your email and password to register.</p>
      <Input extraClass="mb-[17px]" placeholder="Username" type="text" name="username" />
      <Input extraClass="mb-[17px]" placeholder="Enter your email address" type="email" name="email" />
      <Input extraClass="mb-[17px]" placeholder="Password" type="password" name="password" />
      <Input placeholder="Confirm Password" type="password" name="confirm_password" />
      <Button extraStyle="!w-full mt-[27px]" type="submit" title="Register" />
    </>
  )
}

export default RegisterInput