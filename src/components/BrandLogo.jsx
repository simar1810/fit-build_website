const BrandLogo = ({ className = "", size = "default" }) => {
    const titleSize = size === "large" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl";
    const tagSize = size === "large" ? "text-xs md:text-sm" : "text-[9px] md:text-[10px]";

    return (
        <div className={`flex flex-col leading-none select-none ${className}`}>
            <span className={`${titleSize} font-extrabold tracking-tight whitespace-nowrap`}>
                <span className="text-white">Fit</span>
                <span className="text-white/70">&nbsp;</span>
                <span className="text-[#8b1a1a]">Build</span>
            </span>
            <span className={`${tagSize} text-gray-400 font-semibold tracking-[0.2em] uppercase mt-1 self-end`}>
                by Jehangir
            </span>
        </div>
    );
};

export default BrandLogo;
