"use client";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import styles from "../../styles/components/hero.module.css";
import clsx from "clsx";
import { rajdhani } from "@/libs/fonts";
import Unlocker from "./Unlocker";
import { UnlockedContext } from "@/context/UnlockedContext";
import Head from "next/head";

export default function Hero() {
	const { isUnlocked } = useContext(UnlockedContext);
	const [index, setIndex] = useState(0);
	const leftBackground = useRef(null);
	const rightBackground = useRef(null);
	const PreloadImages = ({ images }) => (
		<Head>
			{images.map((image, idx) => (
				<link key={idx} rel="preload" as="image" href={image} />
			))}
		</Head>
	);

	const banners = [
		{
			id: 1,
			text: `#Développeur web **full-stack** **full-stack**`,
			image: "/images/first-banner.webp",
		},
		{
			id: 2,
			text: "#En apprendre plus, sur moi.",
			btn: "à propos de moi",
			link: "#about",
			image: "/images/second-banner.webp",
		},
		{
			id: 3,
			text: "#Un voyage à travers la créativité.",
			btn: "Voir mes projets",
			link: "#projects",
			image: "/images/third-banner.webp",
		},
		{
			id: 4,
			text: "#Toc à ma porte numérique.",
			btn: "Me contacter",
			link: "#contact",
			image: "/images/fourth-banner.webp",
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
		// Hydrate index color

		const indexTracker = document.getElementsByClassName("index-tracker");

		for (let i = 0; i < indexTracker.length; i++) {
			const getTrack = indexTracker[i].getAttribute("data-idx");
			indexTracker[i].classList.toggle(styles.color, getTrack <= index);
		}
	}, [index]);

	return (
		<div className={styles.container}>
			<PreloadImages images={banners.map((banner) => banner.image)} />
			<div className={styles.background} ref={leftBackground}>
				<Image
					src={banners[index]?.image}
					fill
					quality={100}
					sizes="100vw"
					priority
					style={{
						objectFit: "cover",
					}}
					alt="foreground"
				/>
				<div className={styles.content} data-unlocked={isUnlocked}>
					{/* title */}
					<div>
						<div className={styles.title}>
							<Markdown>{banners[index]?.text}</Markdown>
						</div>
						{banners[index].btn && (
							<div className={styles.buttons}>
								<Link href={`${banners[index].link}`}>
									<button className={clsx(rajdhani.className, "hero-btn")}>
										{banners[index].btn}
									</button>
								</Link>
							</div>
						)}
					</div>
					{/* unlocker */}
					{!isUnlocked && <Unlocker />}
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
			{isUnlocked && (
				<div
					className={styles.background}
					ref={rightBackground}
					onClick={swapBanners}>
					<Image
						src={banners[checkIndex]?.image}
						fill
						quality={100}
						sizes="100vw"
						alt="background"
						priority={true}
						style={{
							objectFit: "cover",
						}}
					/>
					<div className={styles.content}>
						<div>
							<div className={styles.title}>
								<Markdown>{banners[checkIndex]?.text}</Markdown>
							</div>
							{banners[checkIndex].btn && (
								<div className={styles.buttons}>
									<button className={clsx(rajdhani.className, "hero-btn")}>
										{banners[checkIndex]?.btn}
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
