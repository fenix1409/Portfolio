"use client"
import { ArrorLeft, ArrorRight, Email, Github1, Phone, Telegram } from '@/public/icon/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className='w-[20%] bg-[#272727] h-auto border-r-[1px] border-[#FFFFFF40]'>
            <div className="flex items-center gap-[16px] border-y-[1px] border-r-[1px] p-[14px] border-y-[#FFFFFF40] border-r-[#FFFFFF40]">
                <button onClick={() => router.back()}><ArrorLeft /></button>
                <button onClick={() => router.forward()}><ArrorRight /></button>
            </div>
            <div className="p-[14px] border-b-[#FFFFFF40] border-b-[1px]">
                <Image className='object-cover mb-2' src={'/images/iman.webp'} alt='myself' width={260} height={260} priority style={{ width: "260px", height: "260px" }} />
                <strong className='text-[18px] leading-[24px] font-medium text-white mb-2 inline-block'>BOBUR ORIPOV</strong>
                <div className="flex items-center flex-wrap gap-[10px]">
                    <div className="w-[100px] p-[7px] bg-[#FFFFFF1A] rounded-lg text-[12px] leading-[14px] text-white text-center cursor-pointer">Veb dasturchi</div>
                    <div className="w-[53px] p-[7px] bg-[#FFFFFF1A] rounded-lg text-[12px] leading-[14px] text-white text-center cursor-pointer">Junior</div>
                </div>
            </div>
            <div className="p-[14px] space-y-[14px]">
                <div className="flex items-center gap-[10px]">
                    <button><Email /></button>
                    <div className="flex flex-col">
                        <span className='text-[16px] leading-[24px] font-medium text-white'>E-pochta</span>
                        <Link className='text-[14px] leading-[21px] text-[#FFFFFFB2]' href={'mailto:oripovbobur208@gmail.com'}>oripovbobur208@gmail.com</Link>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <button><Github1/> </button>
                    <div className="flex flex-col">
                        <span className='text-[16px] leading-[24px] font-medium text-white'>Github</span>
                        <Link className='text-[14px] leading-[21px] text-[#FFFFFFB2]' href={'https://github.com/fenix1409'} target='_blank'>https://github.com/fenix1409</Link>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <button><Telegram /></button>
                    <div className="flex flex-col">
                        <span className='text-[16px] leading-[24px] font-medium text-white'>Telegram</span>
                        <Link className='text-[14px] leading-[21px] text-[#FFFFFFB2]' href={'https://t.me/Boburjon_Oripov208'} target='_blank'>t.me/Boburjon_Oripov208</Link>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <button><Phone /></button>
                    <div className="flex flex-col">
                        <span className='text-[16px] leading-[24px] font-medium text-white'>Telefon raqam</span>
                        <Link className='text-[14px] leading-[21px] text-[#FFFFFFB2]' href={'tel:+998977772439'}>+998-97-777-24-39</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar