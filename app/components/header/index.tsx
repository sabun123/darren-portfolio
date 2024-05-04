"use client"

import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import Image from "next/image";

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/darren-portfolio' : '';

export default function Header() {
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const isOnHome = pathname === '/';

    const handleGoBack = () => {
        router.back();
      };

    const renderMobileHeader = () => {
        return (
            <>
            <button onClick={handleGoBack}><Image src={`${assetPrefix}/images/Iconography/Left_arrow.png`} alt="back arrow" width={0} height={0} className='w-[24px] h-auto'/></button>
            </>
        );
    };

    const renderDesktopHeader = () => {
        return (
            <>
            <div className="flex flex-row items-center justify-center mb-2 md:mb-0">
            <Link href={"/"} className="text-[24px] md:text-[28px] font-bold">DARREN CHNG</Link>
            </div>
            <div className="flex flex-row items-center justify-center ml-0 md:ml-auto gap-4 md:gap-4 text-sm md:text-base font-normal md:font-semibold">
            <Link href={"https://www.linkedin.com/in/darren-chng/"} target="_blank" className="hover:scale-105 hover:opacity-50 underline md:no-underline">Linkedin</Link>
            <Link href={"mailto:cjunkang97@gmail.com"} className="hover:scale-105 hover:opacity-50 underline md:no-underline">Email</Link>
            <Link href={"https://docs.google.com/document/d/1NypJYtL_rylD_XE7O80URyXDZaqBzRqQ/edit?usp=sharing&ouid=116400383302547759333&rtpof=true&sd=true"} target="_blank" className="hover:scale-105 hover:opacity-50 underline md:no-underline">Resume</Link>
            </div>
        </>
        );
    };

    if(isOnHome){
        return <>
            <header className=" w-full flex flex-col md:flex-row items-start md:items-center px-8 md:px-0">
                {renderDesktopHeader()}
            </header>
        </>
    }

    return (
        <>
            <header className="block md:hidden w-full flex flex-row items-start px-0 py-0">
                {renderMobileHeader()}
            </header>
            <header className="hidden mb:block w-full flex flex-col md:flex-row items-start md:items-center px-8 md:px-0">
                {renderDesktopHeader()}
            </header>
        </>
    );
}
