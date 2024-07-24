import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container-1">
					<div className="title projects-title">
							Cosas que he creado tratando de dejar mi huella en el universo.
						</div>

						<div className="subtitle projects-subtitle">
							He trabajado en una variedad de proyectos y estoy orgullosa del progreso que he logrado. Si estás interesado en alguno de los proyectos en los que he trabajado, no dudes en revisar el código y sugerir cualquier mejora o mejora que tengas en mente. Colaborar con otros es una excelente manera de aprender y crecer, y siempre estoy abierta a nuevas ideas y comentarios.
						</div>

					</div>
					<div className="projects-container-2">
						


						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>


			</div>
		</React.Fragment>
	);
};

export default Projects;
