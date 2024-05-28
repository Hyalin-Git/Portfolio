"use client";
import { UnlockedContext } from "@/context/UnlockedContext";
import { useState } from "react";

export default function Provider({ children }) {
	const [isUnlocked, setIsUnlocked] = useState(false);
	return (
		<UnlockedContext.Provider value={{ isUnlocked, setIsUnlocked }}>
			{children}
		</UnlockedContext.Provider>
	);
}
