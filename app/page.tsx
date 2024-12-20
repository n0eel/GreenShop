"use client"
import Button from "@/components/Button";
import CactusCards from "@/components/CactusCards";
import ProductCard from "@/components/ProductCard";
import { CategoryType, getCategories } from "@/service/getCategories";
import { getProducts, ProductType } from "@/service/getProducts";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [cetgoryName, setCategoryName] = useState<string | null>(null)
  const [tags, setTags] = useState<string | null>(null)
  const categories: CategoryType[] = getCategories()
  const products: ProductType[] = getProducts(cetgoryName, tags)




  return (
    <main>
      <section className="mb-[50px] bg-[#F5F5F580] flex justify-between">
        <div className="px-[43px] py-[68px] w-[700px]">
          <p className="text-[14px] text-[#3D3D3D] mb-[7px]">Welcome to GreenShop</p>
          <div className="gap-4 mb-[5px]">
            <h1 className="text-[#3D3D3D] text-[70px] font-bold leading-[70px]">LET'S MAKE A BETTER <span className="text-[#46A358] text-[70px] font-bold leading-[70px] mb-[5px]">PLANET</span></h1>
          </div>
            <p className="text-[14px] text-[#727272] mb-[55px]">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
            <Button title="SHOP NOW" type="button" extraStyle="rounded-[6px] font-bold"/>
        </div>
        <Image src={"/images/hero.png"} alt="Hero img" width={518} height={518}/>
      </section>
      <section className="flex justify-between">
        <ul className="w-[20%] bg-[#FBFBFB] space-y-[20px]">
          <h4 className="text-[18px] leading-[16px] text-[#3D3D3D] font-bold pl-[18px] pt-[14px]">Categories</h4>
          {[{ category_name: "All", category_id: null }, ...categories].map((item: CategoryType) => (<li onClick={() => setCategoryName(item.category_name)} className={`${cetgoryName == cetgoryName ? "" : "text-[#3D3D3D]"} pl-[30px] pr-[24px] text-[15px] font-mdeium cursor-pointer`} key={item.category_id}>{item.category_name}</li>))}
          <h4 className="text-[18px] leading-[16px] text-[#3D3D3D] font-bold pl-[18px] pt-[14px] mt-[]">Size</h4>
          <li className="pl-[30px] pr-[24px] text-[15px] font-mdeium cursor-pointer text-[#3D3D3D]">Small</li>
          <li className="pl-[30px] pr-[24px] text-[15px] font-mdeium cursor-pointer text-[#3D3D3D]">Medium</li>
          <li className="pl-[30px] pr-[24px] text-[15px] font-mdeium cursor-pointer text-[#3D3D3D]">Large</li>
        </ul>
        <div className="w-[80%]">
          <div className="mb-[31px]">
            <ul className="flex gap-[38px] pl-[50px]">
              <li onClick={() => setTags(null)} className={`${tags == null ? "border-b-[2px] border-[#46A358] text-[#46A358] font-bold" : "border-none"} text-[#3D3D3D] text-[15px] font-medium cursor-pointer`}>All plants</li>
              <li onClick={() => setTags("new-arrivals")} className={`${tags == "new-arrivals" ? "border-b-[2px] border-[#46A358] text-[#46A358] font-bold" : "border-none"} text-[#3D3D3D] text-[15px] font-medium cursor-pointer`}>New Arrivals</li>
              <li onClick={() => setTags("sale")} className={`${tags == "sale" ? "border-b-[2px] border-[#46A358] text-[#46A358] font-bold" : "border-none"} text-[#3D3D3D] text-[15px] font-medium cursor-pointer`}>Sale</li>
            </ul>
          </div>
          <div className="flex justify-between flex-wrap gap-[33px] pl-[50px]">
            {products ? products.map((item: ProductType) => <ProductCard key={item.product_id} item={item} />) : "/public/images/empty.png"}
          </div>
        </div>
      </section>
      <CactusCards />
    </main>
  );
}
