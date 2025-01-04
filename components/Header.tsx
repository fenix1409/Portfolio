import { GitHub } from '@/public/icon/Icons'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#272727] p-[10px] flex items-center justify-between border-b-[#FFFFFF40] border-px'>
        <h1 className='text-[22px] leading-[28px] font-medium text-white'>BOBUR ORIPOV</h1>
        <div className='flex items-center gap-[24px]'>
            <Link href={'/'} className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]'>Bosh sahifa</Link>
            <Link href={'/about'} className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]'>Haqida</Link>
            <Link href={'/projects'} className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]'>Loyihalar</Link>
            <Link href={'/contact'} className='text-[16px] leading-[24px] text-white pb-[7px] border-b-2 border-transparent hover:border-[#39965F]'>Bog'lanish</Link>
            <Link href={'https://github.com/fenix1409'} target='_blank'><GitHub/></Link>
        </div>
    </div>
  )
}

export default Header