"use client"
import { getProducts, ProductType } from '@/service/getProducts'
import React, { useState } from 'react'
import ProductCard from './ProductCard'

const RelatedProducts = () => {
    const [cetgoryName, setCategoryName] = useState<string | null>(null)
    const [tags, setTags] = useState<string | null>(null)
    const products: ProductType[] = getProducts(cetgoryName, tags)
    console.log(products)

    return (
        <div className='mt-[90px] mb-[128px]'>
            <h1 className='text-[17px] text-[#46A358] font-bold'>You may be interested in</h1>
            <div className="flex justify-between flex-wrap overflow-y-auto h-[370px] items-center w-full space-x-[33px] ">
                {products ? products.map((item: ProductType) => <ProductCard key={item.product_id} item={item} />) : "/public/images/empty.png"}
            </div>
        </div>
    )
}

export default RelatedProducts