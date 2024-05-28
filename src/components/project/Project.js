"use client";
import { rajdhani } from "@/libs/fonts";
import Image from "next/image";
import styles from "@/styles/components/project.module.css";
import { useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
export default function Project({ project }) {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle(
						`${styles.isInView}`,
						entry.isIntersecting
					);
				});
			},
			{
				threshold: 0.7,
			}
		);
		window.addEventListener("resize", () => {
			if (window.innerWidth <= 780) {
				return;
			}
		});
		const cards = document.getElementsByClassName("cards");
		for (const card of cards) {
			observer.observe(card);
		}
	}, []);
	return (
		<article className={clsx(styles.card, "cards")}>
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
					{project.skills.map((skill, idx) => {
						return (
							<Image
								src={skill}
								alt="compétence"
								width={25}
								height={25}
								key={idx}
							/>
						);
					})}
				</div>
				<div className={styles.buttons}>
					<Link href={project.website ?? ""} target="blank">
						<button
							className={rajdhani.className}
							data-disabled={project.website ? false : true}>
							Voir le <span>projet</span>
						</button>
					</Link>
					<Link href={project.code ?? ""} target="blank">
						<button
							className={rajdhani.className}
							data-disabled={project.code ? false : true}>
							Voir le <span>code</span>
						</button>
					</Link>
				</div>
			</div>
			<div className={styles.card__right}>
				{project.images ? (
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
									src={`/${project.images[1]}`}
									alt="back"
									width={620}
									height={220}
									quality={100}
								/>
							</div>
							<div>
								<Image
									className={styles.background__right}
									src={`/${project.images[2]}`}
									alt="back"
									width={620}
									height={220}
									quality={100}
								/>
							</div>
						</div>
					</div>
				) : (
					<div className={styles.card__no__image}>
						<h3>Aucune image n'est disponible pour le moment</h3>
					</div>
				)}
			</div>
		</article>
	);
}
