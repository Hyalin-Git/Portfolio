import { rajdhani } from "@/libs/utils";
import "../styles/globals.css";
import Hero from "@/components/hero/Hero";
import Header from "@/components/header/Header";

export const metadata = {
	title: "Hyalin - Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className={rajdhani.className}>
				<div id="top">
					<Header />
					<Hero />
				</div>
				{children}
				{/* Footer */}
			</body>
		</html>
	);
}
