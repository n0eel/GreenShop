"use client"
import Button from '@/components/Button'
import Input from '@/components/Input'
import RelatedProducts from '@/components/RelatedProducts'
import { Context } from '@/context/AuthContext'
import { instance } from '@/hook/instance'
import { ProductType } from '@/service/getProducts'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

const page = () => {
  const { token } = useContext(Context)
  const { data = [] } = useQuery({
    queryKey: ['basket_get_all'],
    queryFn: () => token ? instance().get(`/basket`, {
      headers: token ? { "Authorization": `Bearer ${token}` } : {},
      params: { page: 1, limit: 1000 }
    }).then(res => res.data.ProductId) : []
  })  

  const [basketProducts, setBasketProducts] = useState<ProductType[]>(data.map((item: ProductType) => {
    item.count = 1
    item.totalPrice = item.count * item.cost
    return item
  }))
  useEffect(() => {
    if (data.length > 0) {
      setBasketProducts(data)
    }
  }, [data])

  return (
    <>
    <div className='mt-[51px] flex space-x-[86px]'>
      <table className='w-[70%]'>
        <thead>
          <tr className='flex border-b-[1px] border-[#46A35880] mb-[22px] py-[11px] items-center'>
            <th className='text-[16px] leading-[16px] text-[#3D3D3D] font-medium text-start w-[40%]'>Products</th>
            <th className='text-[16px] leading-[16px] text-[#3D3D3D] font-medium w-[20%] text-start'>Price</th>
            <th className='text-[16px] leading-[16px] text-[#3D3D3D] font-medium w-[20%] text-start'>Quantity</th>
            <th className='text-[16px] leading-[16px] text-[#3D3D3D] font-medium w-[20%]'>Total</th>
          </tr>
        </thead>
        <tbody className='py-[11px]'>
          {basketProducts.map((item: ProductType) => (
            <tr key={item.product_id} className='flex items-center space-x-[40px]'>
              <td className='w-[40%] flex items-center justify-start'>
                <Image src={item.image_url[0]} alt='Single product img' width={70} height={70} />
                <div className='flex flex-col pl-[15px]'>
                  <strong className='text-[16px] text-[#3D3D3D]'>{item.product_name}</strong>
                  <span className='text-[14px] text-[#727272]'>SIZE: {item.size[0]}</span>
                </div>
              </td>
              <td className='w-[20%]'>
                <strong className='text-[#727272] text-[16px] leading-[16px] pl-[35px]'>${item.cost}</strong>
              </td>
              <td className='w-[20%] flex gap-[16px] pl-[20px]'>
                <button className='bg-[#46A358] w-[25px] h-[25px] rounded-full text-white items-center'>-</button>
                <span>{item.count}</span>
                <button className='bg-[#46A358] w-[25px] h-[25px] rounded-full text-white items-center'>+</button>
              </td>
              <td className='w-[20%] pl-[95px]'>
                <strong className='text-[16px] text-[#46A358] font-bold'>${item.totalPrice}</strong>
              </td>
              <td>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='w-[30%] mt-[6px] flex flex-col'>
        <strong className='text-[#3D3D3D] text-[18px] leading-[16px] border-[#46A35880] border-b-[1px] py-[11px]'>Cart Totals</strong>
        <span className='text-[14px] mt-[11px]'>Coupon Apply</span>
        <div className='flex items-center mt-[8px]'>
          <Input type='email' name='email' placeholder='Enter coupon code here...' extraClass='rounded-r-[1px] w-[250px]' />
          <Button title='Apply' type='button' extraStyle='bg-[#46A358] rounded-l-0 rounded-l-[1px] py-[13px]' />
        </div>
        <div>

        </div>
      </div>
    </div>
    <RelatedProducts/>
    </>
  )
}

export default page