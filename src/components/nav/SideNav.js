import styles from "@/styles/components/sideNav.module.css";
import Image from "next/image";
export default function SideNav() {
	return (
		<div className={styles.container}>
			<nav>
				<div className={styles.header}>
					<h2>Hyalin</h2>
					<h2>Hyalin</h2>
				</div>
				<div className={styles.links}>
					<ul>
						<li>Accueil</li>
						<li>À propos de moi</li>
						<li>Mes projets</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className={styles.social}>
					<div>
						<Image
							src="./images/svg/linkedIn.svg"
							alt="yas"
							width={40}
							height={40}
						/>
					</div>
					<div>
						<Image
							src="./images/svg/twitter.svg"
							alt="yas"
							width={40}
							height={40}
						/>
					</div>
					<div>
						<Image
							src="./images/svg/github.svg"
							alt="yas"
							width={40}
							height={40}
						/>
					</div>
				</div>
			</nav>
		</div>
	);
}
