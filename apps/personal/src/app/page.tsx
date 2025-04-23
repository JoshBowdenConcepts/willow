import styles from './page.module.css'
import { Text, Box, Button } from 'components'
import { yearsSinceStartingDev } from './layout'
import { ChevronLeftIcon } from 'icons'

export default function Home() {
	return (
		<div>
			<main className={styles.main}>
				<Box padding={[0, 1200]} display="flex" alignItems="center">
					<Box
						maxWidth={'700px'}
						padding={[1400, 0]}
						display="flex"
						alignItems="center"
						gap={600}
					>
            <ChevronLeftIcon size={200} color='fgPrimaryBase' />
						<Text as="h1" align="center">
							Hello 👋, I'm Josh Bowden, a Design Systems
							Architect with
							{' ' + yearsSinceStartingDev} years of experience
							helping companies create consistent design through
							development.
						</Text>
						<Box maxWidth={'650px'}>
							<Text as="p" align="center" color="fgSubtle">
								From infrastructure to governance, I am
								passionate about making the complex dynamic
								between design and engineering easier and more
								efficient. Does your company need help? My
								experience from companies including{' '}
								<strong>GitHub</strong>,{' '}
								<strong>American Express</strong>, and{' '}
								<strong>CarGurus</strong> have taught me the
								skills to help no matter where you are in your
								design system journey.
							</Text>
						</Box>
						<Box display="grid" gridAutoFlow="column" gap={200}>
							<Button as="a" href="/about">
								Let's Talk
							</Button>
							<Button as="a" href="/about">
								Learn More
							</Button>
						</Box>
					</Box>
				</Box>
			</main>
			<footer className={styles.footer}></footer>
		</div>
	)
}
