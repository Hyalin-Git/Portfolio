import { UnlockedContext } from "@/context/UnlockedContext";
import styles from "@/styles/components/unlocker.module.css";
import { useContext, useRef } from "react";
export default function Unlocker() {
	const reachCircleRef = useRef(null);
	const circleContainerRef = useRef(null);
	const { setIsUnlocked } = useContext(UnlockedContext);
	let isDown;
	function dragCircle(e) {
		e.preventDefault();
		const circle = e.target;
		const rotateCircle = circle.parentElement;
		const circleContainer = circleContainerRef.current;
		const reachCircle = reachCircleRef.current;

		isDown = true;

		const moveEvent = e.type === "mousedown" ? "mousemove" : "touchmove";
		const endEvent = e.type === "mousedown" ? "mouseup" : "touchend";

		const handleMove = (e) => {
			e.preventDefault();
			const rotateCircleRect = rotateCircle.getBoundingClientRect();
			const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
			const clientY = e.type === "mousemove" ? e.clientY : e.touches[0].clientY;

			if (isDown) {
				let angle = Math.atan2(
					clientY - rotateCircleRect.y,
					clientX - rotateCircleRect.x
				);
				angle = (angle * 580) / Math.PI;
				angle = Math.min(165, Math.max(0, angle));
				console.log(angle);

				rotateCircle.style.transform = `rotate(${Math.round(angle)}deg)`;
			}
		};

		const handleEnd = () => {
			isDown = false;
			const circleRect = circle.getBoundingClientRect();
			const reachCircleRect = reachCircle.getBoundingClientRect();
			console.log(reachCircleRect);

			console.log(Math.round(circleRect.x));
			console.log(Math.round(reachCircleRect.x));

			rotateCircle.style.transform = `rotate(0deg)`;

			if (Math.round(circleRect.x) <= reachCircleRect.x) {
				circleContainer.classList.add(styles.unlocked);
				circleContainer.firstChild.classList.add("unlocked");

				setTimeout(() => {
					console.log("sheesh");
					setIsUnlocked(true);
				}, 250);

				return (rotateCircle.style.transform = `rotate(165deg)`);
			}

			document.removeEventListener(moveEvent, handleMove);
			document.removeEventListener(endEvent, handleEnd);
		};

		document.addEventListener(moveEvent, handleMove);
		document.addEventListener(endEvent, handleEnd);
	}
	return (
		<div className={styles.container} ref={circleContainerRef}>
			<div className={styles.startCircle}></div>
			<div className={styles.rotateCircle}>
				<div
					className={styles.dragCircle}
					onMouseDown={dragCircle}
					onTouchStart={dragCircle}>
					<div className={styles.rotatingCircle}>
						<div className={styles.rotating}>
							<div className={styles.redDot}></div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.reachCircle} ref={reachCircleRef}></div>
		</div>
	);
}
