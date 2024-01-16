"use client";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header>
			<nav className={styles.nav}>
				{/* logo */}
				<div className={styles.logo}>
					<h1>Hyalin</h1>
					<h1>Hyalin</h1>
				</div>
				{/* Burger menu  */}
				<div className={styles.burger_menu}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</nav>
		</header>
	);
}
