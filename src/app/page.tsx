"use client"

import TopBar from "@/components/TopBar"
import { motion } from "framer-motion"
import { Analytics } from "@vercel/analytics/react"
import Image from "next/image"
import { useInView } from "framer-motion"
import aboutMeCircle from "@/resources/about_me_circle.svg"
import React, { useRef } from "react"
import AboutCard from "@/components/AboutCard"

export default function Home() {
    const aboutMeHeaderRef = useRef(null)
    const isAboutMeHeaderInView = useInView(aboutMeHeaderRef, { once: true })
    return (
        <React.Fragment>
            <div className="w-full px-4 wrapper">
                <Analytics />
                <TopBar />
                <section id="main" className="mt-6 md:mt-12 mb-12 md:mb-48">
                    <h3 className="relative overflow-hidden sub-title">
                        <motion.span
                            initial={{ y: 130 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 2, ease: "anticipate" }}
                            className="block"
                        >
                            Hi! I&apos;m Briannhb👋
                        </motion.span>
                    </h3>
                    <h1 className="flex justify-between">
                        <div>
                            <h1 className="relative overflow-hidden">
                                <motion.span
                                    initial={{ y: 300 }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 2,
                                        delay: 1,
                                        ease: "anticipate"
                                    }}
                                    className="title text-6xl"
                                >
                                    I Create Stories,
                                </motion.span>
                            </h1>
                            <h1 className="relative overflow-hidden pb-3">
                                <motion.span
                                    initial={{ y: 300 }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 2,
                                        delay: 1,
                                        ease: "anticipate"
                                    }}
                                    className="title text-6xl"
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
                            className="mt-auto hidden md:flex flex-col items-center"
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
                </section>
                <section id="about" className="mb-12 md:mb-48">
                    <div
                        className="relative overflow-hidden"
                        ref={aboutMeHeaderRef}
                    >
                        <motion.div
                            style={{
                                transform: isAboutMeHeaderInView
                                    ? "none"
                                    : "translateY(200px)",
                                opacity: isAboutMeHeaderInView ? 1 : 0,
                                transition: "all 1s ease 0.5s"
                            }}
                            className="flex justify-between items-center"
                        >
                            <h1 className="font-bold md:text-6xl sm:text-4xl text-2xl relative overflow-hidden md:text-left text-center underline md:no-underline">
                                About Myself
                            </h1>
                            <motion.div
                                animate={{
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "linear"
                                }}
                            >
                                <Image
                                    draggable="false"
                                    src={aboutMeCircle}
                                    width={30}
                                    height={30}
                                    className="sm:px-0 px-2 mx-0 sm:mx-4 w-auto h-auto"
                                    alt="About Me Circle"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="md:mt-8 mt-4 flex gap-8 items-center md:text-left text-center md:justify-normal justify-center">
                        <motion.div
                            style={{
                                width: "5px",
                                height: "100px",
                                borderRadius: "5px",
                                backgroundColor: "#253745"
                            }}
                            initial={{ scaleY: 0 }}
                            whileInView={{
                                scaleY: [0, 1, 0],
                                y: ["-50px", "0px", "50px"]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}
                            className="hidden md:flex"
                        />
                        <h4>
                            <motion.p
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="font-medium md:text-4xl sm:text-xl text-md"
                            >
                                Fueled by a relentless curiosity.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.7 }}
                                viewport={{ once: true }}
                                className="font-medium md:text-4xl sm:text-xl text-md md:mt-4 mt-1"
                            >
                                Driven by a passion to make a meaningful impact.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.7 }}
                                viewport={{ once: true }}
                                className="font-medium md:text-4xl sm:text-xl text-md md:mt-4 mt-1"
                            >
                                Determined to leave my legacy for the world.
                            </motion.p>
                        </h4>
                    </div>
                </section>
            </div>
            <div
                style={{ borderRadius: "7rem 7rem 0 0" }}
                className="bg-white pt-24 p-12 w-full"
            >
                <section id="what_i_do">
                    <div className="gap-4 grid grid-cols-2 wrapper text-primary-do">
                        <div>
                            <h1 className="font-bold text-6xl">
                                &#47;&#47; What Can I Do
                            </h1>
                            <p className="text-xl mt-8 tracking-wide">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Assumenda provident tenetur
                                ad! Ut saepe nam quos, laudantium quis earum sit
                                iste numquam perferendis ratione voluptatum et
                                consequatur nobis itaque animi?
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <AboutCard
                                title={"System Architect"}
                                description="Lorem ipsum dolor sit amet consectetur. Malesuada penatibus quam vitae quam ut libero  nisl. Turpis ultricies leo vel lectus odio nibh ut aliquam in."
                                items={["Erp Application", "HRMS Application"]}
                            />
                            <AboutCard
                                title={"UI/UX Design"}
                                description="Lorem ipsum dolor sit amet consectetur. Malesuada penatibus quam vitae quam ut libero  nisl. Turpis ultricies leo vel lectus odio nibh ut aliquam in."
                                items={["Erp Application", "HRMS Application"]}
                            />
                            <AboutCard
                                title={"Database"}
                                description="Lorem ipsum dolor sit amet consectetur. Malesuada penatibus quam vitae quam ut libero  nisl. Turpis ultricies leo vel lectus odio nibh ut aliquam in."
                                items={["Erp Application", "HRMS Application"]}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

function MovingFont({ font, delay = 0 }: { font: String; delay: number }) {
    return (
        <motion.span
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg"
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
