const Button = ({ children, href, variant = "primary", download }) => {
    const baseStyles = "px-4 py-2 rounded-md text-white transition-colors duration-300 font-bold text-sm min-w-[120px] text-center min-h-[40px]";
    const variants = {
        primary: "bg-black hover:bg-gray-700",
        secondary: "border-2 border-zinc-700 text-zinc-700 hover:bg-zinc-200",
        default: "bg-green-500 hover:bg-green-700"
    }

    return (
        <a href={href} download={download} className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </a>
    )
}

export default Button;