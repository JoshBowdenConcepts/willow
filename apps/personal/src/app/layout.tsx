import type { Metadata } from 'next'
import './globals.css'
import { Box, Link, Text } from 'components'

function yearsSince(year: number): number {
	const currentYear = new Date().getFullYear()
	return currentYear - year
}

export const yearsSinceStartingDev = yearsSince(2018)

export const metadata: Metadata = {
	title: 'Josh Bowden Concepts',
	description: `Design System Architect with ${yearsSinceStartingDev} years experience building unique systems that simplify the lives of designers and engineers.`,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<Box as="body" maxWidth="80%" margin={[0, 'auto']}>
				<Box
					display="flex"
					justifyContent="space-between"
					flexDirection="row"
					alignItems="center"
					margin={[300, 0]}
				>
					<Box>
						<Text variant="caption">JOSHBOWDENCONCEPTS.COM</Text>
					</Box>
					<Box display="flex" alignItems="center">
						<Box
							padding={[300, 0]}
							display="inline-grid"
							gridAutoFlow="column"
							gap={300}
						>
							<Link href="/" type="nav">
								Home
							</Link>
							<Link href="/about" type="nav">
								About
							</Link>
							<Link href="/services" type="nav">
								Services
							</Link>
							<Link href="/blog" type="nav">
								Writing
							</Link>
							<Link href="/contact" type="nav">
								Contact
							</Link>
						</Box>
					</Box>
				</Box>
				{children}
			</Box>
		</html>
	)
}
