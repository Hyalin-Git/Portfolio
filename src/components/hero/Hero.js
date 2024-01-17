"use client";
import { useState } from "react";
import styles from "./hero.module.css";

export default function Hero() {
	const [index, setIndex] = useState(1);

	const banners = [
		{
			text: "Développeur web, full-stack",
			image: "/images/first_banner.png",
		},
		{
			image: "/images/second_banner.png",
		},
		{
			image: "/images/third_banner.png",
		},
		{
			image: "/images/fourth_banner.png",
		},
	];

	const checkIndex = banners.length === index + 1 ? 0 : index + 1;

	function swapBanners(e) {
		const rightBanner = e.target;
		const LeftBanner = rightBanner.previousSibling;

		LeftBanner.classList.add("swap");
		rightBanner.classList.add("swap");

		setTimeout(() => {
			banners.length === index + 1 ? setIndex(0) : setIndex(index + 1);
			LeftBanner.style.backgroundImage = `url(${banners[index].image})`;
			rightBanner.style.backgroundImage = `url(${banners[checkIndex].image})`;
			LeftBanner.classList.remove("swap");
			rightBanner.classList.remove("swap");
		}, 480);
	}

	return (
		<div className={styles.hero}>
			<div className={styles.hero__background}>
				<div>
					{/* title */}
					<div></div>
					{/* unlocker */}
					<div></div>
				</div>
				{/* index  */}
				<div></div>
			</div>
			<div className={styles.hero__background} onClick={swapBanners}>
				<div></div>
			</div>
		</div>
	);
}
