import styles from "@/styles/components/contact.module.css";

export default function Contact() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>
					<h2>
						Entrons en contact, <br />
						N'hésitez pas à me joindre
					</h2>
				</div>
				<div className={styles.description}>
					<p>
						Je suis ouvert aux opportunités de collaboration et de conversation,
						<br />
						que vous ayez un projet en tête ou une question à poser, <br />
						vos messages sont toujours appréciés.
					</p>
				</div>
			</div>
			<div className={styles.form}>
				<form action="">
					<div className={styles.form__input}>
						<input type="text" placeholder="Nom" name="name" id="name" />
						<input type="email" placeholder="E-mail" name="email" id="email" />
					</div>
					<div>
						<textarea
							placeholder="Message"
							name="message"
							id="message"
							cols="30"
							rows="10"></textarea>
					</div>
					<div className={styles.buttons}>
						<button type="submit">Envoyer</button>
					</div>
				</form>
			</div>
		</div>
	);
}
