import { Facebook, FooterImg, FooterImg2, FooterImg3, InIcon, Instagram, LocationIcon, MessageIcon, PhoneIcon, Twitter, Youtube } from '@/public/icon/Icon'
import Image from 'next/image'
import React from 'react'
import Input from './Input'
import Button from './Button'

const Footer = () => {
  return (
    <footer className="mt-[100px]">
    <div className="flex bg-[#FBFBFB] py-[25px] px-[25px] justify-between">
      <div className="w-[260px] flex flex-col border-r-[1px] border-[#46A3581A] pr-[30px]">
        <FooterImg />
        <strong className="mt-[17px] text-[#3D3D3D] text-[17px] font-bold  mb-[9px]">Garden Care</strong>
        <p className="text-[#727272] text-[14px] font-medium">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>
      <div className="w-[260px] flex flex-col border-r-[1px] border-[#46A3581A] pr-[30px]">
        <FooterImg2 />
        <strong className="mt-[17px] text-[#3D3D3D] text-[17px] font-bold  mb-[9px]">Plant Renovation</strong>
        <p className="text-[#727272] text-[14px] font-medium">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>
      <div className="w-[260px] flex flex-col pr-[35px]">
        <FooterImg3 />
        <strong className="mt-[17px] text-[#3D3D3D] text-[17px] font-bold  mb-[9px]">Watering Graden</strong>
        <p className="text-[#727272] text-[14px] font-medium">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>
      <div className="w-[350px]">
        <h4 className="text-[18px] font-bold text-[#3D3D3D] mb-[30px]">Would you like to join newsletters?</h4>
        <div className='flex items-center mb-[17px]'>
          <Input type='email' name='email' placeholder='enter your email address...' extraClass='rounded-r-[1px] w-[250px]' />
          <Button title='Join' type='button' extraStyle='bg-[#46A358] rounded-l-0 rounded-l-[1px] py-[13px]'/>
        </div>
        <p className="text-[#727272] text-[13px]">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
      </div>
    </div>
    <div className="w-full flex bg-[#46A3581A] py-[27px] px-[23px] items-center justify-between">
      <Image src={"/images/Logo.svg"} alt="Logo" width={150} height={35}/>
      <div className="flex items-center space-x-[9px] w-[200px]">
        <LocationIcon/>
        <p className="text-[14px] text-[#3D3D3D]">70 West Buckingham Ave.
        Farmingdale, NY 11735</p>
      </div>
      <div className="flex items-center space-x-[9px] w-[200px]">
        <MessageIcon/>
        <p className="text-[14px] text-[#3D3D3D]">contact@greenshop.com</p>
      </div>
      <div className="flex items-center space-x-[9px] w-[200px]">
        <PhoneIcon/>
        <p className="text-[14px] text-[#3D3D3D]">+88 01911 717 490</p>
      </div>
    </div>
    <div className="bg-[#FBFBFB] flex items-center justify-between px-[23px] py-[33px] border-b-[1px] border-[#46A35833]">
      <ul className="flex flex-col space-y-[8px]">
        <li className="font-bold text-[18px] text-[#3D3D3D] cursor-pointer">My Account</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">My Account</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Our stores</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Contact us</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Career</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Specials</li>
      </ul>
      <ul className="flex flex-col space-y-[8px]">
        <li className="font-bold text-[18px] text-[#3D3D3D] cursor-pointer">Help & Guide</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Help Center</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">How to Buy</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Shipping & Delivery</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Product Policy</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">How to Return</li>
      </ul>
      <ul className="flex flex-col space-y-[8px]">
        <li className="font-bold text-[18px] text-[#3D3D3D] cursor-pointer">Categories</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">House Plants</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Potter Plants</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Seeds</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Small Plants</li>
        <li className="text-[14px] cursor-pointer text-[#3D3D3D] font-medium">Accessories</li>
      </ul>
      <div className="flex flex-col">
        <strong className="text-[18px] text-[#3D3D3D] leading-[16px] mb-[20px]">Social Media</strong>
        <div className="flex items-center gap-[10px]">
          <button className="flex w-[30px] h-[30px] items-center justify-center border-[1px] border-[#46A35833] rounded-[4px]"><Facebook/></button>
          <button className="flex w-[30px] h-[30px] items-center justify-center border-[1px] border-[#46A35833] rounded-[4px]"><Instagram/></button>
          <button className="flex w-[30px] h-[30px] items-center justify-center border-[1px] border-[#46A35833] rounded-[4px]"><Twitter/></button>
          <button className="flex w-[30px] h-[30px] items-center justify-center border-[1px] border-[#46A35833] rounded-[4px]"><InIcon/></button>
          <button className="flex w-[30px] h-[30px] items-center justify-center border-[1px] border-[#46A35833] rounded-[4px]"><Youtube/></button>
        </div>
        <strong className="text-[18px] text-[#3D3D3D] leading-[16px] mb-[20px] mt-[33px]">We accept</strong>
        <Image src={"/images/brands.png"} alt="Brands img" width={224} height={26}/>
      </div>
    </div>
    <div className="text-center py-[10px]">
      <p className="text-[#3D3D3D] text-[14px] leading-[30px]">© 2021 GreenShop. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer