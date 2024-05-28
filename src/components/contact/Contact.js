"use client";
import { formValidation } from "@/libs/utils";
import styles from "@/styles/components/contact.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
	const form = useRef(null);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isFailure, setIsFailure] = useState(false);
	function sendEmail(e) {
		e.preventDefault();

		const isValid = formValidation();
		if (!isValid) {
			return;
		}

		emailjs
			.sendForm(
				`${process.env.NEXT_PUBLIC_EMAILJSTOKEN}`,
				`${process.env.NEXT_PUBLIC_EMAILJSTEMPLATE}`,
				form?.current,
				`${process.env.NEXT_PUBLIC_EMAILJSACCESS}`
			)
			.then((res) => {
				if (res.status === 200) {
					document.getElementById("name").value = "";
					document.getElementById("email").value = "";
					document.getElementById("message").value = "";

					setIsSuccess(true);
				}
			})
			.catch((err) => {
				document.getElementById("btn").classList.add(styles.error);
			});
	}

	function closeModel(e) {
		e.preventDefault();
		setIsSuccess(false);
		setIsFailure(false);
	}
	return (
		<>
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
							Je suis ouvert aux opportunités de collaboration et de
							conversation,
							<br />
							que vous ayez un projet en tête ou une question à poser, <br />
							vos messages sont toujours appréciés.
						</p>
					</div>
				</div>
				<div className={styles.form}>
					<form onSubmit={sendEmail} ref={form}>
						<div className={styles.form__input}>
							<input type="text" placeholder="Nom" name="name" id="name" />
							<input
								type="email"
								placeholder="E-mail"
								name="email"
								id="email"
							/>
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
							<button type="submit" id="btn">
								Envoyer
							</button>
						</div>
					</form>
				</div>
			</div>
			{(isSuccess || isFailure) && (
				<div data-modal={true} className={styles.modal}>
					<div>
						{isSuccess && <h3>Merci de m'avoir contacté</h3>}
						{isFailure && (
							<h3>Oops ! une erreur s'est produite de notre côté</h3>
						)}
					</div>
					<div>
						{isSuccess && (
							<p>
								J'ai bien reçu votre mail, j'y répondrais dans les plus brefs
								délais !
							</p>
						)}
						{isFailure && (
							<p>
								Si le problème persiste, contactez-moi via les réseaux sociaux.
							</p>
						)}
					</div>
					<div>
						<button onClick={closeModel}>
							Ferm<span>er</span>
						</button>
					</div>
				</div>
			)}
		</>
	);
}
