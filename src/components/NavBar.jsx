import React, { useState } from 'react'
import { NavLink } from "react-router-dom"


const NavBar = () => {

    const buttonClasses = 'text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300'

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-gray-800 text-white fixed w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex flex-row w-full justify-between">
                            <div className="text-x1 font-bold">
                                Matthew Hughes
                            </div>
                            <div className="hidden md:block">
                                <div className="flex ml-10 items-baseline space-x-2">
                                    <NavLink className={buttonClasses} to="/">Home</NavLink>
                                    <NavLink className={buttonClasses} to="/about">About</NavLink>
                                    <NavLink className={buttonClasses} to="/projects">Projects</NavLink>
                                    <NavLink className={buttonClasses} to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button type="button" className="fill-white" onClick={() => { setIsOpen(!isOpen) }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {
                    isOpen && (
                        <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
                            <NavLink className={buttonClasses} to="/">Home</NavLink>
                            <NavLink className={buttonClasses} to="/about">About</NavLink>
                            <NavLink className={buttonClasses} to="/projects">Projects</NavLink>
                            <NavLink className={buttonClasses} to="/contact">Contact</NavLink>
                        </div>
                    )
                }
            </nav>
        </div>
    )
}

export default NavBar
