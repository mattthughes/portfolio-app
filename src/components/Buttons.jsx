const Buttons = ({ children, href, variant = "primary" }) => {
    const baseStyles = "px-4 py-2 rounded-md text-white transition-colors duration-300 m-1 font-bold text-sm ";
    const variants = {
        primary: "bg-black hover:bg-gray-700",
        secondary: "border-2 border-zinc-700 text-zinc-700 hover:bg-zinc-200",
        default: "bg-green-500 hover:bg-green-700"
    }

    return (
        <a href={href} className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </a>
    )
}

export default Buttons;