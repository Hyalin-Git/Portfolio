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
