"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/layouts/header.module.css";
import clsx from "clsx";
import { observeLinks } from "@/libs/utils";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	function handleBurgerMenu(e) {
		e.preventDefault();
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	}

	useEffect(() => {
		if (isOpen) {
			observeLinks();
		}
	}, [isOpen]);

	return (
		<header>
			<nav className={styles.nav}>
				{/* logo */}
				<div className={styles.nav__logo}>
					<h1>Hyalin</h1>
					<h1>Hyalin</h1>
				</div>
				{/* Burger menu  */}
				<div onClick={handleBurgerMenu} className={styles.nav__burger__btn}>
					<div></div>
					<div></div>
					<div></div>
				</div>

				{isOpen && (
					<div className={clsx(styles.nav__burger, "open")}>
						<div id="nav-links">
							<ul>
								<li>Accueil</li>
								<li>À propos de moi</li>
								<li>Mes projets</li>
								<li>Contact</li>
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
					</div>
				)}
			</nav>
		</header>
	);
}
