"use client";

import data from "@/libs/data.json";
import Project from "./Project";
import styles from "@/styles/components/projects.module.css";

export default function Projects() {
	const projects = data;
	console.log(projects);

	return (
		<div className={styles.container}>
			{projects.map((project, idx) => {
				return <Project project={project} key={project.id} />;
			})}
		</div>
	);
}
