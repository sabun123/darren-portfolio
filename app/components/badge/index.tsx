"use client"

import { useTheme } from "next-themes";

export default function Badge(props: any) {
    const { theme, setTheme } = useTheme();

    const {
        title
    } = props;

    return (
        <div className={`flex items-center px-2 md:px-2.5 py-0.5 rounded-md mr-auto md:mr-0`} style={{backgroundColor: '#6BB394'}}>
            <p className="text-white text-xs md:text-base">{title}</p>
        </div>
    );
}