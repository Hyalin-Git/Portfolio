"use client";
import styles from "@/styles/pages/home.module.css";
import Projects from "@/components/project/Projects";
import SideNav from "@/components/nav/SideNav";
import Contact from "@/components/contact/Contact";
import About from "@/components/about/About";
import { useContext } from "react";
import { UnlockedContext } from "@/context/UnlockedContext";

export default function Home() {
	const { isUnlocked } = useContext(UnlockedContext);
	return (
		<>
			{isUnlocked && (
				<main>
					<div className={styles.main}>
						<aside>
							<SideNav />
						</aside>
						<div className={styles.content}>
							<div className={styles.about} id="about">
								<About />
							</div>
							<div className={styles.underline}></div>
							<div className={styles.projects} id="projects">
								<Projects />
							</div>
							<div className={styles.underline}></div>
							<div className={styles.contact} id="contact">
								<Contact />
							</div>
						</div>
					</div>
				</main>
			)}
		</>
	);
}
