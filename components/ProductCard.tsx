"use client"
import { BasketIcon, HeartIcon, SearchIcon } from "@/public/icon/Icon"
import { ProductType } from "@/service/getProducts"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useContext } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { instance } from "@/hook/instance"
import { Context } from "@/context/AuthContext"
import toast from "react-hot-toast"

const ProductCard: React.FC<{ item: ProductType }> = ({ item }) => {
    const queryClient = useQueryClient()
    const { token } = useContext(Context)
    const router = useRouter()

    const likeMutation = useMutation({
        mutationFn: (id: string) => instance().post(`/like/${id}`, {}, {
            headers: { "Authorization": `Bearer ${token}` }
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
        }
    })


    function handleLikeBtnClick(id: string) {
        if (!token) {
            toast.error("You can't add to favorite until login")
        } else {
            likeMutation.mutate(id)
        }
    }


    const basketMutation = useMutation({
        mutationFn: (data:{productId:string}) => instance().post(`/basket`, data, {
            headers: { "Authorization": `Bearer ${token}` }
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"]})
            queryClient.invalidateQueries({queryKey:['basket_list']})
        }
    })

    function handleBasketBtnClick(productId: string) {
        if (!token) {
            toast.error("You can't add to basket until login")
        } else {
            const data = { productId }
            basketMutation.mutate(data)
        }
    }

    return (
        <div className="!w-[258px]">
            <div className="group cursor-pointer">
                <Image onClick={() => router.push(`/shop/${item.product_id}`)} className="bg-[#FBFBFB]" style={{ width: "250px", height: "250px" }} src={item.image_url ? item.image_url[0] : "/images/broken-img.png"} alt="Product img" width={250} height={250} priority />
                <div className="flex items-center space-x-[10px] justify-center">
                    <button onClick={() => handleBasketBtnClick(item.product_id)} className={`${item.basket ? "text-[#46A358]" : "text-[#3D3D3D]"} group-hover:opacity-100 rounded-[4px] bg-white p-[8px] opacity-0 duration-300`}><BasketIcon /></button>
                    <button onClick={() => handleLikeBtnClick(item.product_id)} className={`${item.liked ? "text-red-500" : "text-[#3D3D3D]"} group-hover:opacity-100 text-[#3D3D3D] rounded-[4px] bg-white p-[8px] opacity-0 duration-300`}><HeartIcon /></button>
                    <button className="group-hover:opacity-100 text-[#3D3D3D] rounded-[4px] bg-white p-[8px] opacity-0 duration-300"><SearchIcon /></button>
                </div>
            </div>
            <h2 className="mt-[31px] text-[#3D3D3D] text-[16px] font-medium">{item.product_name}</h2>
            <div className="flex items-center space-x-[16px]">
                <strong className="text-[18px] text-[#46A358] font-bold">${item.cost}</strong>
                {item.discount && <del className="text-[#A5A5A5] text-[18px]">${item.discount}</del>}
            </div>
            <div>
            </div>
        </div>


    )
}

export default ProductCard