"use client"

// write a component that displays a copyright text center aligned and says Copyright (C) Darren 2024

import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <header className="w-full flex flex-col md:flex-row">
            <div className="flex flex-row items-center justify-center mb-2 md:mb-0">
            <Link href={"/"} className="text-3xl font-bold">DARREN CHNG</Link>
            </div>
            <div className="flex flex-row items-center justify-center ml-0 md:ml-auto gap-4 md:gap-16 text-base font-semibold">
            <Link href={"https://www.linkedin.com/in/darren-chng/"} target="_blank">Linkedin</Link>
            <Link href={"mailto:cjunkang97@gmail.com"}>Email</Link>
            <Link href={"https://docs.google.com/document/d/1NypJYtL_rylD_XE7O80URyXDZaqBzRqQ/edit?usp=sharing&ouid=116400383302547759333&rtpof=true&sd=true"} target="_blank">Resume</Link>
            </div>
        </header>
    );
}