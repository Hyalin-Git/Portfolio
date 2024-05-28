"use client";
import { UnlockedContext } from "@/context/UnlockedContext";
import styles from "@/styles/components/footer.module.css";
import { useContext } from "react";

export default function Footer() {
	const { isUnlocked } = useContext(UnlockedContext);
	return (
		<>
			{isUnlocked && (
				<footer className={styles.footer}>
					<div className={styles.container}></div>
				</footer>
			)}
		</>
	);
}
