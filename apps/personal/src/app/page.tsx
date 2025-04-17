import Image from "next/image";
import styles from "./page.module.css";
import { Text, Box } from "components";
import { yearsSinceStartingDev } from "./layout";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Box padding={[0, 1200]} display="flex" justifyContent="center">
          <Box
            maxWidth={"700px"}
            padding={[1400, 0]}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="h1" align="center">
              Hello 👋, I'm Josh Bowden, a Design Systems Architect with
              {" " + yearsSinceStartingDev} years of experience helping
              companies create consistent design through development.
            </Text>
            <Box padding={[500, 0, 0, 0]} maxWidth={"650px"}>
              <Text as="p" align="center">
                From setting up the right tools to forming robust processes and
                teams, I love making complex systems easier and more efficient
                to manage. Does your team need help? Some of the most well known
                organizations out there trust the work I do, including Adobe,
                Amazon, AT&T, Cisco, Microsoft and U.S. Government.
              </Text>
            </Box>
          </Box>
        </Box>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
