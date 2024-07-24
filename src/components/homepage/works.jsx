import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">

							<div className="work-title"> Pasantía FrontEnd Developer</div>
							<div className="work-subtitle">
						Conexión El Salvador | Davivienda
							</div>
							<div className="work-duration">Mayo 2024 - Presente</div>
						</div>

						<div className="work">
			
							<div className="work-title">Coordinadora del Proyecto PrepSchool</div>
							<div className="work-subtitle">
								Programa Empresarial ¡Supérate!
							</div>
							<div className="work-duration">2023 - Presente</div>
						</div>
						<div className="work">
			
							<div className="work-title">Asistente Administrativa</div>
							<div className="work-subtitle">
								Taller de Bellas Artes Cúcara Mácara
							</div>
							<div className="work-duration">2018 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
