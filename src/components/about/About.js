import styles from "@/styles/components/about.module.css";
import Image from "next/image";
export default function About() {
	return (
		<div className={styles.container}>
			<div className={styles.container__left}>
				{/* titile */}
				<div className={styles.title}>
					<h2>
						Codeur
						<br />
						passionné<span className={styles.punctuation}>,</span>
						<br />
						<span className={styles.marginOne}>tisseur de</span>
						<br />
						<span className={styles.marginTwo}>
							site web<span className={styles.punctuation}>.</span>
						</span>
					</h2>
				</div>
				<div className={styles.bottom}>
					{/* des */}
					<div className={styles.description}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
							dapibus augue pellentesque felis pretium pharetra. Ut quis
							tincidunt nisi, eget ornare mi. Aenean fermentum arcu faucibus,
							bibendum neque vitae, pulvinar magna. Fusce ornare magna non
							vulputate facilisis. Integer egestas iaculis eros sed porta.
							tincidunt nisi, eget ornare mi. Aenean fermentum arcu faucibus,
							bibendum neque vitae, pulvinar magna. Fusce ornare magna non
							vulputate facilisis. Integer egestas iaculis eros sed porta.
						</p>
					</div>
					{/* img  */}
					<div className={styles.image}>
						<Image
							src="/images/portrait.png"
							alt="portrait"
							width={280}
							height={400}
						/>
						<br />
						<button>
							Télécharge<span>r mon cv</span>
						</button>
					</div>
				</div>
			</div>
			<div className={styles.container__right}>
				{/* skills  */}
				<div className={styles.skills}>
					<h2>
						Compétences variées,
						<br />
						Mélange de savoirs.
					</h2>
					<div className={styles.skills__tree}>
						<span className={styles.frontend__title}>Frontend</span>
						<div className={styles.frontend__skills}>
							<ul>
								<li>
									<Image
										src="./images/svg/html.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/css.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/sass.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/bootstrap.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/styled-components.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/javascript.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/next-js.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/react.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/redux.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
							</ul>
						</div>
						<div className={styles.line}></div>
						<div className={styles.backend__skills}>
							<ul>
								<li>
									<Image
										src="./images/svg/nodeJs.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/expressJs.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/mongodb.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
								<li>
									<Image
										src="./images/svg/mySQL.svg"
										alt="logo de compétence"
										width={25}
										height={25}
									/>
								</li>
							</ul>
						</div>
						<span className={styles.backend__title}>Backend</span>
					</div>
				</div>
				{/* ex */}
				<div className={styles.experience}>
					<h2>Éxpériences.</h2>
					<div>
						<ul>
							<li>
								<span>- OpenClassRooms</span>
							</li>
							<li>
								<span>- Freelance</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
