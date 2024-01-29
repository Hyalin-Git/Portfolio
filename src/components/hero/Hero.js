"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/components/hero.module.css";

export default function Hero() {
	const [index, setIndex] = useState(0);
	const leftBackground = useRef(null);
	const rightBackground = useRef(null);

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
		e.preventDefault();

		leftBackground.current.classList.add("swap");
		rightBackground.current.classList.add("swap");

		setTimeout(() => {
			banners.length === index + 1 ? setIndex(0) : setIndex(index + 1);

			leftBackground.current.style.backgroundImage = `url(${banners[index].image})`;
			rightBackground.current.style.backgroundImage = `url(${banners[checkIndex].image})`;

			leftBackground.current.classList.remove("swap");
			rightBackground.current.classList.remove("swap");
		}, 480);
	}

	useEffect(() => {
		leftBackground.current.style.backgroundImage = `url(${banners[index].image})`;
		rightBackground.current.style.backgroundImage = `url(${banners[checkIndex].image})`;
	}, [index]);

	return (
		<div className={styles.container}>
			<div className={styles.background} ref={leftBackground}>
				<div>
					{/* title */}
					<div></div>
					{/* unlocker */}
					<div></div>
				</div>
				{/* index  */}
				<div></div>
			</div>
			<div
				className={styles.background}
				ref={rightBackground}
				onClick={swapBanners}>
				<div></div>
			</div>
		</div>
	);
}
