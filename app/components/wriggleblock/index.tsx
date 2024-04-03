"use client"

import Image from "next/image";
import { useTheme } from "next-themes";

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/darren-portfolio' : '';

export const WriggleBlock = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Image src={`${assetPrefix}/images/Iconography/Wriggle block.png`} alt="homage logo" width={100} height={4} className='h-1'/>
    );
}