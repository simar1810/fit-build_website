"use client";

import Image from "next/image";

const CoachPhoto = ({
    src,
    alt,
    className = "",
    imageClassName = "object-cover object-center",
    priority = false,
    sizes = "(max-width: 768px) 100vw, 480px",
}) => {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                className={imageClassName}
                priority={priority}
            />
        </div>
    );
};

export default CoachPhoto;
