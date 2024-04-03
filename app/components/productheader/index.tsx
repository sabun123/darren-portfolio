"use client"

import { useTheme } from "next-themes";
import Link from "next/link";
import Badge from "../badge";
import { GreenLine } from "../greenline";


export default function ProductHeader(props: any) {
    const { theme, setTheme } = useTheme();

    const {
        company,
        title,
        subtitle,
        image,
        badgeTitle
    } = props;

    return (
        <div className={`flex flex-col  max-w-5xl w-full justify-between gap-4`}>
        <div className="flex flex-row-reverse justify-between items-center">
            {image}
            <div className="flex flex-col gap-4 w-3/4 md:w-3/5">
                <div className="flex flex-row gap-4 ">
                    <p className="text-white text-2xl font-semibold">{company}</p>
                    <Badge title={badgeTitle} />
                </div>
                <p className="text-white text-3xl font-bold">{title}</p>
            </div>
        </div>
        <p className="text-white text-lg">{subtitle}</p>
        {GreenLine('w-28')}
        </div>
    );
}
