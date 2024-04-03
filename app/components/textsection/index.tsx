"use client"

import { useTheme } from "next-themes";

export default function TextSection(props: any) {
    const { theme, setTheme } = useTheme();

    const {
        title,
        paragraph
    } = props;

    return (
        <div className={`flex flex-col max-w-5xl w-full gap-3`}>
            <p className="text-white text-2xl font-bold">{title}</p>
            <p className="text-white text-lg">{paragraph}</p>
        </div>
    );
};