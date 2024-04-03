"use client"

import { useTheme } from "next-themes";

export default function Badge(props: any) {
    const { theme, setTheme } = useTheme();

    const {
        title
    } = props;

    return (
        <div className={`flex flex-col px-2.5 py-0.5 rounded-md`} style={{backgroundColor: '#6BB394'}}>
            <p className="text-white text-base">{title}</p>
        </div>
    );
}