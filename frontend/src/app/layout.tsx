import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const fonte = Montserrat({
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Portfolio Dev",
	description: "Descrição de trabalhos e projetos",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fonte.className} antialiased`}>{children}</body>
		</html>
	)
}
