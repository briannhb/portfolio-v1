import { Montserrat_Alternates } from "next/font/google"
import { MouseEventHandler } from "react"
import styled from "styled-jsx/style"

const montserratAlternates = Montserrat_Alternates({
    subsets: ["latin"],
    weight: "500"
})

export default function AboutCard({
    title,
    items,
    urlImage,
    handleCursorAnimation
}: {
    title: String
    items: String[]
    urlImage: String
    handleCursorAnimation: Function
}) {
    return (
        <div
            onMouseEnter={() => handleCursorAnimation("card")}
            onMouseLeave={() => handleCursorAnimation("default")}
            className={
                montserratAlternates.className +
                "mt-12 px-10 py-16 border border-white rounded-md group hover:bg-white transition-colors duration-250 ease-in"
            }
        >
            <div>
                <h3
                    className={
                        "lg:text-title-vw text-lg-vw tracking-wide group-hover:text-[#06141B] transition-colors duration-250 ease-in"
                    }
                >
                    {title}
                </h3>
                <div className="my-8">
                    <ul className="text-secondary group-hover:text-[#253745] transition-colors duration-250 ease-in">
                        {items.map((item, index) => (
                            <li key={index} className="my-4">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    )
}
