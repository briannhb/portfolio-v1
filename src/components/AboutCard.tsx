import React from "react"
import { motion } from "framer-motion"

interface AboutCardProps {
    title: String
    description: String
    items: String[]
}

export default function AboutCard({
    title,
    description,
    items
}: AboutCardProps) {
    return (
        <div
            style={{
                borderWidth: "1px",
                backgroundColor: "rgb(94,106,108, 0.05)"
            }}
            className="p-8 py-6 border-primary-do rounded-xl w-3/4"
        >
            <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-sm">{description}</p>
                <div></div>
            </div>
            <div className="text-md flex justify-end gap-1 items-center">
                <HoverSeeMore />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                </svg>
            </div>
            {/* {items} */}
        </div>
    )
}

function HoverSeeMore() {
    const textMotion = {
        rest: {
            y: 0,
            transition: { duration: 0.5, ease: "backOut" }
        },
        hover: {
            y: -25,
            decoration: "underline",
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    }
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative overflow-hidden cursor-pointer max-h-5 flex flex-col"
        >
            <motion.span variants={textMotion}>See More</motion.span>
            <motion.span variants={textMotion}>See More</motion.span>
        </motion.div>
    )
}
