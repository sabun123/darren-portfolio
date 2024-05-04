"use client"

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useState } from "react";

export type ImageWithFadeInProps = {
    src: string | StaticImport;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

const ImageWithFadeInAnimation = (props: ImageWithFadeInProps) => {
    
    const {
        src,
        alt,
        className,
        width,
        height,
    } = props;

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // When the component mounts, fade the image in
        const timer = setTimeout(() => {
            setOpacity(100);
        }, 100); // delay can be adjusted

        return () => clearTimeout(timer); // Cleanup the timeout on component unmount
    }, []);

    return       <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className + ` transition-opacity duration-500 ease-in ${opacity === 100 ? 'opacity-100' : 'opacity-0'}`}
  />
};

export default ImageWithFadeInAnimation;