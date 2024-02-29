"use client";
import { observeLinks } from "@/libs/utils";
import styles from "@/styles/components/sideNav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";

export default function SideNav() {
	useEffect(() => {
		observeLinks();
	}, []);
	return (
		<div className={styles.container}>
			<nav>
				<div className={styles.header}>
					<h2>Hyalin</h2>
					<h2>Hyalin</h2>
				</div>
				<div className={styles.links} id="nav-links">
					<ul>
						<Link href="#">
							<li
								onClick={() => {
									window.scrollTo(0, 0);
								}}>
								Accueil
							</li>
						</Link>
						<Link href="#about">
							<li>À propos de moi</li>
						</Link>
						<Link href="#projects">
							<li>Mes projets</li>
						</Link>
						<Link href="#contact">
							<li>Contact</li>
						</Link>
					</ul>
				</div>
				<div className={styles.social}>
					<div>
						<a
							href="https://www.linkedin.com/in/n-t-dev-b72892265/"
							target="_bank">
							<Image
								src="./images/svg/linkedIn.svg"
								alt="yas"
								width={40}
								height={40}
							/>
						</a>
					</div>
					<div>
						<a href="https://twitter.com/Hyalin_dev" target="_bank">
							<Image
								src="./images/svg/twitter.svg"
								alt="yas"
								width={40}
								height={40}
							/>
						</a>
					</div>
					<div>
						<a href="https://github.com/Hyalin-Git" target="_bank">
							<Image
								src="./images/svg/github.svg"
								alt="yas"
								width={40}
								height={40}
							/>
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}
