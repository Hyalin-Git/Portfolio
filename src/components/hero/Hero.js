"use client";
import { useEffect, useRef, useState } from "react";
import Markdown from "markdown-to-jsx";
import styles from "../../styles/components/hero.module.css";

export default function Hero() {
	const [index, setIndex] = useState(0);
	const leftBackground = useRef(null);
	const rightBackground = useRef(null);

	const banners = [
		{
			id: 1,
			text: `<h1>Développeur web, <br> <span className={${styles.top}}>full-stack</span><span className={${styles.bottom}}>full-stack</span></h1>`,
			image: "/images/first_banner.png",
		},
		{
			id: 2,
			text: "<h1>à propos de moi</h1>",
			image: "/images/second_banner.png",
		},
		{ id: 3, text: "<h1>Mes projets</h1>", image: "/images/third_banner.png" },
		{
			id: 4,
			text: "<h1>Me contacter</h1>",
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
				<div className={styles.content}>
					{/* title */}
					<div>
						<Markdown>{banners[index]?.text}</Markdown>
					</div>
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
				<div className={styles.content}>
					<Markdown>{banners[checkIndex]?.text}</Markdown>
				</div>
			</div>
		</div>
	);
}
