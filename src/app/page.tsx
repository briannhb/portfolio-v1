"use client"

import AboutCard from "@/components/AboutCard"
import TopBar from "@/components/TopBar"
import { Variants, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import Image from "next/image"

export default function Home() {
    return (
        <div className="w-full px-4">
            <Analytics/>
            <TopBar />
            <div className="mt-6 md:mt-12">
                <h3 className="relative overflow-hidden sub-title">
                    <motion.span
                        initial={{ y: 130 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 2, ease: "anticipate" }}
                        className="block"
                    >
                        Hi! I&apos;m Brian👋
                    </motion.span>
                </h3>
                <h1 className="flex justify-between">
                    <div>
                        <h1 className="relative overflow-hidden">
                            <motion.span
                                initial={{ y: 130 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 2,
                                    delay: 1,
                                    ease: "anticipate"
                                }}
                                className="title"
                            >
                                I Create Stories,
                            </motion.span>
                        </h1>
                        <h1 className="relative overflow-hidden pb-3">
                            <motion.span
                                initial={{ y: 130 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 2,
                                    delay: 1,
                                    ease: "anticipate"
                                }}
                                className="title"
                            >
                                Design and Code.
                            </motion.span>
                        </h1>
                    </div>
                    <motion.div
                        initial={{ x: 10, opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 1,
                            delay: 1
                        }}
                        className="mt-auto flex flex-col items-center"
                    >
                        <svg
                            width="46"
                            height="44"
                            viewBox="0 0 46 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.42456 25.9344V25.9344C5.42459 18.6592 13.7744 14.5496 19.5393 18.9873L26.5285 24.3675C32.3912 28.8805 40.8825 24.7012 40.8825 17.3027V17.3027"
                                stroke="#253745"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M12.0138 36.1767V36.1767C7.42868 30.5283 11.3213 22.0752 18.594 21.8873L27.4113 21.6594C34.8073 21.4683 38.7659 12.8718 34.103 7.12773V7.12773"
                                stroke="#253745"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div
                            style={{
                                width: "5px",
                                height: "60px",
                                borderRadius: "5px",
                                backgroundColor: "#D1D1D1"
                            }}
                        >
                            <motion.div
                                style={{
                                    width: "5px",
                                    height: "60px",
                                    borderRadius: "5px",
                                    backgroundColor: "#253745"
                                }}
                                initial={{ scaleY: 0 }}
                                animate={{
                                    scaleY: [0, 1, 0],
                                    y: ["-30px", "0px", "30px"]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                        <div
                            style={{ gap: "0.3" }}
                            className="flex cursor-pointer text-xs mt-2 text-[#9BA8AB]"
                        >
                            <MovingFont font={"S"} delay={0} />
                            <MovingFont font={"c"} delay={0.1} />
                            <MovingFont font={"r"} delay={0.2} />
                            <MovingFont font={"o"} delay={0.3} />
                            <MovingFont font={"l"} delay={0.4} />
                            <MovingFont font={"l"} delay={0.5} />
                            <MovingFont font={"!"} delay={0.6} />
                        </div>
                    </motion.div>
                </h1>
            </div>
            <section id="about"></section>
        </div>
    )
}

function MovingFont({ font, delay = 0 }: { font: String; delay: number }) {
    return (
        <motion.span
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: delay,
                repeatType: "mirror",
                bounce: 0.25,
                repeat: Infinity,
                repeatDelay: 2,
                type: "spring",
                ease: "easeInOut"
            }}
        >
            {font}
        </motion.span>
    )
}
