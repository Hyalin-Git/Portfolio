import styles from "@/styles/pages/home.module.css";
import Projects from "@/components/project/Projects";
import SideNav from "@/components/nav/SideNav";
import Contact from "@/components/contact/Contact";
import About from "@/components/about/About";

export default function Home() {
	return (
		<main>
			<div className={styles.main}>
				<aside>
					<SideNav />
				</aside>
				<div className={styles.content}>
					<div className={styles.about}>
						<About />
					</div>
					<div className={styles.projects}>
						<Projects />
					</div>
					<div className={styles.contact}>
						<Contact />
					</div>
				</div>
			</div>
		</main>
	);
}
