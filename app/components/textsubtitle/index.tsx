"use client"

import { useTheme } from "next-themes";

export default function TextSubtitle(props: any) {
    const { theme, setTheme } = useTheme();

    const {
        text
    } = props;
    
    return (
        <div className={`flex flex-col max-w-5xl w-full text-center -mt-4 md:mt-0`}>
            <p className="text-white text-sm md:text-lg italic">{text}</p>
        </div>
    );
};