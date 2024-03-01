export function observeLinks() {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const nav = document
					.getElementById("nav-links")
					.getElementsByTagName("li");

				switch (entry.target.id) {
					case "home":
						break;
					case "about":
						nav[1].classList.toggle("active", entry.isIntersecting);
						if (entry.intersectionRatio <= 0.22) {
							nav[2].classList.add("active");
						} else {
							nav[2].classList.remove("active");
						}
						break;
					case "projects":
						nav[2].classList.toggle("active", entry.intersectionRatio >= 0.21);
						break;
					case "contact":
						nav[3].classList.toggle("active", entry.isIntersecting);
						break;
				}
			});
		},
		{
			threshold: 0.22,
		}
	);
	observer.observe(document.getElementById("home"));
	observer.observe(document.getElementById("about"));
	observer.observe(document.getElementById("projects"));
	observer.observe(document.getElementById("contact"));
}

export const formValidation = () => {
	const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const messageRegex = /^[\s\S]{1,1500}$/;
	const name = document.getElementById("name");
	const email = document.getElementById("email");
	const message = document.getElementById("message");

	const inputs = [name, email, message];

	for (const input of inputs) {
		if (input.value.length <= 0) {
			input.classList.add("error");
			input.addEventListener("input", function (e) {
				e.preventDefault();
				input.classList.remove("error");
			});
			return false;
		}
	}

	function throwError(input, message, defaultPlaceHolder) {
		input.classList.add("error");
		input.value = "";
		input.placeholder = message;
		input.addEventListener("input", function (e) {
			e.preventDefault();
			input.classList.remove("error");
			input.placeholder = defaultPlaceHolder;
		});
	}

	if (!nameRegex.test(name.value)) {
		console.log(name);
		throwError(name, "Ce nom n'est pas valide", "Nom");
		return false;
	}
	if (!emailRegex.test(email.value)) {
		throwError(email, "Cette adresse mail est invalide", "E-mail");
		return false;
	}

	if (!messageRegex.test(message.value)) {
		throwError(message, "Ce message est invalide", "Message");
		return false;
	}

	return true;
};
