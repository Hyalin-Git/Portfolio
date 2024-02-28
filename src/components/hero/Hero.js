"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import styles from "../../styles/components/hero.module.css";
import clsx from "clsx";
import { rajdhani } from "@/libs/utils";

export default function Hero() {
	const [index, setIndex] = useState(0);
	const leftBackground = useRef(null);
	const rightBackground = useRef(null);

	const banners = [
		{
			id: 1,
			text: `#Développeur web, **full-stack** **full-stack**`,
			image: "/images/first_banner.png",
		},
		{
			id: 2,
			text: "#En apprendre plus, sur moi.",
			btn: "à propos de moi",
			link: "#about",
			image: "/images/second_banner.png",
		},
		{
			id: 3,
			text: "#Un voyage à travers la créativité.",
			btn: "Voir mes projets",
			link: "#projects",
			image: "/images/third_banner.png",
		},
		{
			id: 4,
			text: "#Toc à ma porte numérique.",
			btn: "Me contacter",
			link: "#contact",
			image: "/images/fourth_banner.png",
		},
	];

	const checkIndex = banners.length === index + 1 ? 0 : index + 1;

	function swapBanners(e) {
		e.preventDefault();

		leftBackground.current.classList.add(styles.swap);
		rightBackground.current.classList.add(styles.swap);

		setTimeout(() => {
			banners.length === index + 1 ? setIndex(0) : setIndex(index + 1);

			leftBackground.current.style.backgroundImage = `url(${banners[index].image})`;
			rightBackground.current.style.backgroundImage = `url(${banners[checkIndex].image})`;

			leftBackground.current.classList.remove(styles.swap);
			rightBackground.current.classList.remove(styles.swap);
		}, 480);
	}

	useEffect(() => {
		leftBackground.current.style.backgroundImage = `url(${banners[index].image})`;
		rightBackground.current.style.backgroundImage = `url(${banners[checkIndex].image})`;

		// Hydrate index color
		const indexTracker = document.getElementsByClassName("index-tracker");

		for (let i = 0; i < indexTracker.length; i++) {
			const getTrack = indexTracker[i].getAttribute("data-idx");
			indexTracker[i].classList.toggle(styles.color, getTrack <= index);
		}
	}, [index]);

	return (
		<div className={styles.container}>
			<div className={styles.background} ref={leftBackground}>
				<div className={styles.content}>
					{/* title */}
					<div>
						<div className={styles.title}>
							<Markdown>{banners[index]?.text}</Markdown>
						</div>
						{banners[index].btn && (
							<div className={styles.buttons}>
								<Link href={`${banners[index].link}`}>
									<button className={clsx("hero-btn")}>
										{banners[index].btn}
									</button>
								</Link>
							</div>
						)}
					</div>
					{/* unlocker */}
					<div></div>
				</div>

				<div className={styles.social}>
					<div>
						<Image
							src="./images/svg/linkedIn.svg"
							alt="yas"
							width={40}
							height={40}
						/>
					</div>
					<div>
						<Image
							src="./images/svg/twitter.svg"
							alt="yas"
							width={40}
							height={40}
						/>
					</div>
					<div>
						<Image
							src="./images/svg/github.svg"
							alt="yas"
							width={40}
							height={40}
						/>
					</div>
				</div>
				{/* index  */}
				<div className={styles.index}>
					{banners.map((banner, idx) => {
						return (
							<div
								className={clsx("index-tracker")}
								key={idx}
								data-idx={idx}></div>
						);
					})}
				</div>
			</div>
			<div
				className={styles.background}
				ref={rightBackground}
				onClick={swapBanners}>
				<div className={styles.content}>
					<div>
						<div className={styles.title}>
							<Markdown>{banners[checkIndex]?.text}</Markdown>
						</div>
						{banners[checkIndex].btn && (
							<div className={styles.buttons}>
								<button className={clsx("hero-btn")}>
									{banners[checkIndex]?.btn}
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
