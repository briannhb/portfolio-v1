import Link from "next/link"
import { Variants, motion } from "framer-motion"
import React, { useState, useEffect } from "react"
import Image from "next/image"

export default function TopBar() {
    const [isVisible, setIsVisible] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const MIN_SCROLL_DISTANCE = 100 // Set your minimum scroll distance here

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            const isScrollingDown = currentScrollPos < prevScrollPos

            // Check if the user has scrolled past the minimum distance
            setIsVisible(
                currentScrollPos > MIN_SCROLL_DISTANCE && !isScrollingDown
            )
            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [prevScrollPos])

    return (
        <header>
            {/* Navigation for mobile */}
            <div className="justify-between items-center z-40 flex md:hidden">
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        priority
                        src={"/icon.svg"}
                        width={30}
                        height={30}
                        alt="Briannhb. Logo"
                    ></Image>
                </motion.div>
                <motion.button
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={toggleSidebar}
                    className="p-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </motion.button>

                {/* Dark overlay */}
                {isOpen && (
                    <div
                        onClick={toggleSidebar} // Close the sidebar when clicking the overlay
                        className="fixed top-0 right-0 h-full w-full bg-black opacity-50"
                    />
                )}

                {/* Sidebar */}
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: isOpen ? 0 : "100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-4"
                >
                    <button onClick={toggleSidebar} className="p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <nav
                        itemScope
                        className="flex items-center flex-col gap-8 tracking-widest font-medium"
                    ></nav>
                </motion.div>
            </div>
            {/* Navigation For Wide */}
            <motion.div
                className="justify-between items-center z-40 hidden md:flex"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Link href="/">
                    <Image
                        priority
                        src={"/icon.svg"}
                        width={40}
                        height={40}
                        alt="Briannhb. Logo"
                    ></Image>
                </Link>
                <Link href="/">
                    <span className="text-lg tracking-wider">Briannhb.</span>
                </Link>
            </motion.div>
            {/* Floating navigation Bar */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed rounded-lg border-[#e1e1e1] border-2 p-4 right-1/2 top-8 backdrop-blur-lg backdrop-opacity-80`}
                style={{
                    translateX: "50%",
                    width: "80vw",
                    maxWidth: "1000px",
                    minWidth: "300px"
                }}
            >
                <div>
                    <nav
                        itemScope
                        className="flex justify-center items-center gap-8 tracking-widest text-[#e1e1e1] font-medium"
                    ></nav>
                </div>
            </motion.div>
        </header>
    )
}
