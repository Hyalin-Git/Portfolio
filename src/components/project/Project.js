"use client";
import { rajdhani } from "@/libs/utils";
import Image from "next/image";
import styles from "@/styles/components/project.module.css";
export default function Project({ project }) {
	return (
		<article className={styles.card}>
			<div className={styles.card__left}>
				<div className={styles.card__header}>
					<h2>
						{project.title} <span>{project.name}</span>
					</h2>
				</div>
				<div className={styles.card__content}>
					<p>{project.description}</p>
					<span>
						{project.status === "done"
							? "Projet terminé"
							: "Projet en cours de développement"}
					</span>
				</div>
				<div className={styles.card__skills}>
					{project.skills.map((skill) => {
						return (
							<Image src={skill} alt="compétence" width={25} height={25} />
						);
					})}
				</div>
				<div className={styles.buttons}>
					<button className={rajdhani.className}>
						Voir le <span>projet</span>
					</button>
					<button className={rajdhani.className}>Voir le code</button>
				</div>
			</div>
			<div className={styles.card__right}>
				<div className={styles.card__images}>
					<div className={styles.foreground}>
						<Image
							src={`/${project.images[0]}`}
							alt="back"
							width={620}
							height={620}
							quality={100}
						/>
					</div>
					<div className={styles.backgrounds}>
						<div>
							<Image
								className={styles.background__left}
								src="/images/kasa/KasaBackgroundLeft.png"
								alt="back"
								width={220}
								height={220}
							/>
						</div>
						<div>
							<Image
								className={styles.background__right}
								src="/images/kasa/KasaBackgroundRight.png"
								alt="back"
								width={420}
								height={220}
							/>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
