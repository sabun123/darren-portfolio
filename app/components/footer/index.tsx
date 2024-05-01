"use client"

import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
    const { theme, setTheme } = useTheme();

    return (
        <footer className="w-full flex flex-col items-center justify-center mt-10 mb-10 md:mt-20 md:mb-20">
            <div className="flex flex-col items-center justify-center">
                <p className="text-white text-sm font-semibold">© 2024 Darren Chng</p>
            </div>
        </footer>
    );
}
