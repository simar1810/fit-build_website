"use client";

import Image from "next/image";

const BrandLogo = ({ className = "", size = "default", onDark = false }) => {
    const isLarge = size === "large";

    const image = (
        <Image
            src="/logo-fitnbuild-on-light.png"
            alt="Fit & Build by Jehangir"
            width={isLarge ? 220 : 168}
            height={isLarge ? 68 : 52}
            className={isLarge ? "h-12 md:h-14 w-auto" : "h-9 md:h-10 w-auto"}
            priority
        />
    );

    if (onDark) {
        return (
            <span
                className={`inline-flex items-center justify-center bg-white rounded-md ${
                    isLarge ? "px-3 py-2" : "px-2.5 py-1.5"
                } ${className}`}
            >
                {image}
            </span>
        );
    }

    return <span className={`inline-flex items-center ${className}`}>{image}</span>;
};

export default BrandLogo;
