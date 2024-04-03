"use client"

import Image from "next/image";

import { useTheme } from "next-themes";
import Link from "next/link";

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/darren-portfolio' : '';

export default function BottomNav(props: any) {
    const { theme, setTheme } = useTheme();

    const {
        leftTitle,
        leftLink,
        rightTitle,
        rightLink
    } = props;

    return (
        <div className="flex flex-row w-full items-center justify-between px-14">
            <Link href={leftLink} className="flex flex-row items-center gap-1 text-xl font-bold">
            <Image src={`${assetPrefix}/images/Iconography/Arrow icon_32px.png`} alt="left-arrow" width={32} height={32} className={'h-8'} />
                {leftTitle}
            </Link>
            <Link href={rightLink} className="flex flex-row items-center gap-1 text-xl font-bold">
                {rightTitle}
                <Image src={`${assetPrefix}/images/Iconography/Arrow icon_24px.png`} alt="right arrow" width={32} height={32} className='h-8'/>
            </Link>
        </div>
    );
}
