"use client"
import RelatedProducts from "@/components/RelatedProducts"
import { instance } from "@/hook/instance"
import { ProductType } from "@/service/getProducts"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"

const page = () => {
  const { id } = useParams()

  const { data: singleProduct = [] } = useQuery({
    queryKey: ['get_single_product'],
    queryFn: () => instance().get(`/product/${id}`).then(res => res.data)
  })

  return (
    <>
      <div className="flex items-center">
        {/* {singleProduct.map((item:ProductType) => (
        <div>
        
        </div>
        ))} */}
      </div>
      <RelatedProducts/>
    </>
  )
}

export default page