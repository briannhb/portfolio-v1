import "../styles/globals.css"
import type { Metadata } from "next"
import { Author } from "next/dist/lib/metadata/types/metadata-types"
import { Poppins } from "next/font/google"

const poppins = Poppins({ weight: "400", subsets: ["latin"] })

const authors: Author[] = [
    { name: "Instagram", url: "https://www.instagram.com/briannhb" },
    { name: "Github", url: "https://github.com/BrianNath" },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/brian-nathan-161487263/"
    },
    { name: "Email", url: "mailto:briannhb1@gmail.com" }
]

export const metadata: Metadata = {
    title: "Briannhb | Portfolio",
    description: `Welcome to Brian's portfolio website`,
    authors,
    icons: "/icon.svg"
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <main className="flex min-h-screen flex-col items-center justify-between pt-12">
                    {children}
                </main>
            </body>
        </html>
    )
}
