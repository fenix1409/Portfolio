"use client"
import Image from 'next/image';
import React, { useState } from 'react'

interface HoverEffectProps {
    src: string;
    alt: string;
    text: string
}
const HoverEffects: React.FC<HoverEffectProps> = ({ src, alt, text }) => {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <div className="relative w-[64px] h-[64px]">
            <Image className={`absolute transition-opacity duration-300 ${hover ? 'opacity-0' : 'opacity-100'}`} src={src} alt={alt} priority width={64} height={64} />
            <span className={`absolute text-white text-[24px] flex items-center justify-center transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}>{text}</span>
        </div>
    )
}

export default HoverEffects