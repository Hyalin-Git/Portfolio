"use client";
import { useState } from "react";
import styles from "@/styles/layouts/header.module.css";

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
					<div className={styles.nav__burger}>
						<ul>
							<li>Accueil</li>
							<li>À propos de moi</li>
							<li>Mes projets</li>
							<li>Contact</li>
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
}
