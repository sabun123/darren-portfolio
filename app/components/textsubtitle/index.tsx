"use client"

import { useTheme } from "next-themes";

export default function TextSubtitle(props: any) {
    const { theme, setTheme } = useTheme();

    const {
        text
    } = props;
    
    return (
        <div className={`flex flex-col max-w-5xl w-full text-center`}>
            <p className="text-white text-lg italic">{text}</p>
        </div>
    );
};