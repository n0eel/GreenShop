"use client"
import { Context } from "@/context/AuthContext";
import { instance } from "@/hook/instance"
import { useQuery } from "@tanstack/react-query"
import React, { SetStateAction, useContext } from "react";

export interface ProductType {
    basket: boolean;
    category_id: string;
    cost: number;
    count: number;
    discount: number;
    image_url: string[];
    liked: boolean;
    product_description: string;
    product_id: string;
    product_name: string;
    product_status: string;
    short_description: string;
    size: string[];
    tags: string[];
    totalPrice?: string | number | null;
    price?: string | number | null
}

interface ParamsType {
    page: number,
    limit: number,
    category: string | null
    tags: string | null
}

export const getProducts = (cetgoryName:string | null, tags:string | null) => {
    const {token} = useContext(Context)

    const params:ParamsType = { 
        page: 1,
        limit: 9,
        category:cetgoryName == "All" ? null : cetgoryName,
        tags:tags
    }
    const { data = [] } = useQuery({
        queryKey: ['products', cetgoryName, tags],
        enabled:true,
        queryFn: () => instance().get("/products", { 
            headers:token ? {"Authorization":`Bearer ${token}`} : {},
            params:params
         }).then(res => res.data.products)

    })
    return data
}