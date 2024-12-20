"use client"
import { BasketIcon, LeaveIcon, SearchIcon } from "@/public/icon/Icon"
import Button from "./Button"
import { FormEvent, useContext, useState } from "react"
import Modal from "./Modal"
import LoginInput from "./LoginInput/index"
import { instance } from "@/hook/instance"
import RegisterInput from "./RegisterInput"
import toast, { Toaster } from "react-hot-toast"
import VerifyRegister from "./RegisterInput/VerifyRegister"
import ForgotPassword from "./ForgotPassword"
import ResetPassword from "./ResetPassword/ResetPassword"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Context } from "@/context/AuthContext"
import { useQuery, useQueryClient } from "@tanstack/react-query"

const Header = () => {
    const { token } = useContext(Context)
    const queryClient = useQueryClient()
    const { setToken } = useContext(Context)
    const [registerEmail, setRegisterEmail] = useState<string>("")
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<"login" | "register" | "verifyRegister" | "forgotPassword" | "reset-password">("login")
    const path = usePathname()
    const router = useRouter()


    function loginSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (isLogin == "login") {
            const data = {
                password: (e.target as HTMLFormElement).password.value,
                usernameoremail: (e.target as HTMLFormElement).email.value
            }
            instance().post("/login", data).then((res) => {
                setLoginModal(false)
                setToken(res.data.access_token)
                queryClient.invalidateQueries({ queryKey: ['products'] })
                toast.success('Successfully logined!')
            })
        }
        else if (isLogin == "register") {
            const data = {
                firstName: (e.target as HTMLFormElement).username.value,
                lasttName: (e.target as HTMLFormElement).username.value,
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value
            }
            if ((e.target as HTMLFormElement).password.value == (e.target as HTMLFormElement).confirm_password.value) {
                instance().post("/register", data).then(() => {
                    setRegisterEmail(data.email)
                    setIsLogin("verifyRegister")
                })
            } else {
                toast.error("The password isn't correct!")
            }
        }
        else if (isLogin == "verifyRegister") {
            const data = {
                email: registerEmail,
                code: (e.target as HTMLFormElement).code.value
            }
            instance().post("/users/verify", {}, {
                params: data
            }).then(() => setIsLogin("login"))
        }
        else if (isLogin == "forgotPassword") {
            const email = (e.target as HTMLFormElement).email.value
            instance().post(`/forgot/${email}`, {}).then(() => {
                setRegisterEmail(email)
                setIsLogin("reset-password")
            })
        }
        else if (isLogin == "reset-password") {
            const data = {
                email: registerEmail,
                new_password: (e.target as HTMLFormElement).password.value,
                otp: (e.target as HTMLFormElement).otp.value
            }
            instance().put(`/reset-password`, data).then(() => setIsLogin("login"))
        }
    }

    // const getLikeList = async () => {
    //     const data = await instance().get("/wishlist", {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         },
    //         params: { page: 1, limit: 1000 }
    //     }).then(res => res.data)
    //     return data
    // }

    // const { data:likeProductsList } = useQuery({
    //     queryKey: ['liked_list'],
    //     queryFn: () => token ? getLikeList : {}
    // })

    const { data: BasketProducts } = useQuery({
        queryKey: ['basket_list'],
        queryFn: () => token ? instance().get(`/basket`, {
            headers: token ? { "Authorization": `Bearer ${token}` } : {},
            params: { page: 1, limit: 1000 }
        }).then(res => res.data.ProductId) : []
    })

    return (
        <header className="py-[26px] flex items-center justify-between">
            <Toaster position="top-center" reverseOrder={false} />
            <Image onClick={() => router.push("/")} className="cursor-pointer" src={"/images/Logo.svg"} alt="Logo img" width={150} height={35} />
            <ul className="flex items-center space-x-[50px]">
                <li onClick={() => router.push("/")} className={`${path == "/" && "border-b-[2px] border-[#46A358] font-bold"} text-[16px] text-[#3D3D3D] font-medium cursor-pointer py-[25px]`}>Home</li>
                <li onClick={() => router.push("/shop")} className={`${path.includes("/shop/shopping-cart") && "border-b-[2px] border-[#46A358] font-bold"} ${path.includes("/shop") && "border-b-[2px] border-[#46A358] font-bold"} text-[16px] text-[#3D3D3D] font-medium cursor-pointer py-[25px]`}>Shop</li>
                <li className={`text-[16px] text-[#3D3D3D] font-medium cursor-pointer`}>Plant Care</li>
                <li className={`text-[16px] text-[#3D3D3D] font-medium cursor-pointer`}>Blogs</li>
            </ul>
            <div className="flex items-center space-x-[30px]">
                <button><SearchIcon /></button>
                <button onClick={() => router.push("/shop/shopping-cart")}><BasketIcon /></button>
                <Button type="button" onClick={() => setLoginModal(true)} title="Login" leftIcon={<LeaveIcon />} />
                <Modal isOpen={loginModal} setIsOpen={setLoginModal} width={500}>
                    <ul className="flex items-center justify-center gap-[10px] mb-[53px]">
                        <li onClick={() => setIsLogin("login")} className={`${isLogin == "login" && "text-[#46A358]"} font-medium text-[20px] cursor-pointer`}>Login</li>
                        <li className="w-[1px] h-[16px] bg-black"></li>
                        <li onClick={() => setIsLogin("register")} className={`${isLogin == "register" && "text-[#46A358]"} font-medium text-[20px] cursor-pointer`}>Register</li>
                    </ul>
                    <form onSubmit={loginSubmit} className="w-[300px] mx-auto text-center">
                        {isLogin == "login" && <LoginInput setIsLogin={setIsLogin} />}
                        {isLogin == "register" && <RegisterInput />}
                        {isLogin == "verifyRegister" && <VerifyRegister registerEmail={registerEmail} />}
                        {isLogin == "forgotPassword" && <ForgotPassword />}
                        {isLogin == "reset-password" && <ResetPassword />}

                    </form>
                </Modal>
            </div>

        </header>
    )
}

export default Header