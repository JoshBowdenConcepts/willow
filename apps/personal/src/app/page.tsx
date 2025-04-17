import Image from "next/image";
import styles from "./page.module.css";
import { Text, Box } from "components";
import { yearsSinceStartingDev } from "./layout";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Box padding={[0, 1200]} display="flex" alignItems="center">
          <Box
            maxWidth={"700px"}
            padding={[1400, 0]}
            display="flex"
            alignItems="center"
          >
            <Text as="h1" align="center">
              Hello 👋, I'm Josh Bowden, a Design Systems Architect with
              {" " + yearsSinceStartingDev} years of experience helping
              companies create consistent design through development.
            </Text>
            <Box padding={[500, 0, 0, 0]} maxWidth={"650px"}>
              <Text as="p" align="center">
                From infrastructure to governance, I am passionate about making
                the complex dynamic between design and engineering easier and
                more efficient. Does your company need help? My experience from
                companies including <strong>GitHub</strong>,{" "}
                <strong>American Express</strong>, and <strong>CarGurus</strong>{" "}
                have taught me the skills to help no matter where you are in
                your design system journey.
              </Text>
            </Box>
          </Box>
        </Box>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
