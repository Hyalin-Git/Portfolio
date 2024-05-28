"use client";
import { UnlockedContext } from "@/context/UnlockedContext";
import { useEffect, useState } from "react";

export default function Provider({ children }) {
	const [isUnlocked, setIsUnlocked] = useState(false);

	useEffect(() => {
		if (window.innerWidth <= 680) {
			setIsUnlocked(true);
		}
	}, []);
	return (
		<UnlockedContext.Provider value={{ isUnlocked, setIsUnlocked }}>
			{children}
		</UnlockedContext.Provider>
	);
}
