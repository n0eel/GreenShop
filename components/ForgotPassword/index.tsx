import Button from "../Button"
import Input from "../Input"

const ForgotPassword = () => {
    return (
        <>
            <Input extraClass="mb-[17px]" placeholder="Enter email" type="email" name="email" />
            <Button extraStyle="!w-full mt-[27px]" type="submit" title="Get code"/>
        </>
    )
}

export default ForgotPassword