import tailwindLogo from "../images//projects/tailwind.png";
import cssLogo from "../images//projects/css.png";
import sassLogo from "../images//projects/sass.png";
import reactLogo from "../images//projects/react.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const INFO = {
	main: {
		title: "Haydeé Velásquez | Portafolio",
		name: "Haydeé Velásquez",
		email: "haydeevelasquezm@gmail.com",
		logo: "../logo.svg",
	},

	socials: {
		github: "https://github.com/haydeemvm",
		linkedin: "https://linkedin.com/in/haydeemvm",
	},

	homepage: {
		title: "FrontEnd Developer",
		description:
			"Apasionada y comprometida a desarrollar productos digitales intuitivos y funcionales que conecten significativamente con los usuarios y solventen sus necesidades. Me enfoco en desarrollar aplicaciones y sitios web accesibles, confiables y amigables que garanticen su máxima eficiencia y rendimiento, priorizando siempre la experiencia del usuario.",
	},

	about: {
		title: "Contribuyo al futuro tecnológico desde y para El Salvador",
		description:
			"Profesional dedicada a desarrollar soluciones digitales innovadoras que responden a las necesidades presentes de las empresas y la sociedad en El Salvador y líder en proyectos de educación que preparan a la próxima generación de talentos tecnológicos del país. Mi compromiso es contribuir al crecimiento del ecosistema digital, facilitando el acceso a la tecnología y promoviendo un futuro más inclusivo y sostenible.",
	},

	projects: [
		{
			title: "Proyecto 1: Gaia",
			description:
				"Diseñé una tienda en línea responsive utilizando Figma, creando pantallas atractivas y funcionales. Implementé HTML y CSS para la maquetación y estilización.",
			logo: cssLogo,
			linkText: "Ver proyecto",
			link: "https://haydeemvm.github.io/WEB-SITE-HTML-CSS/",
		},

		{
			title: "Proyecto 2: phimaro",
			description:
				"Desarrollé un sitio web utilizando Tailwind CSS, implementando un diseño moderno y responsivo que mejora la experiencia del usuario.",
			logo: tailwindLogo,
			linkText: "Ver proyecto",
			link: "https://haydeemvm.github.io/TAILWIND-WEBSITE/",
		},

		{
			title: "Project 3: iteki",
			description:
				"Utilicé utilidades de BootStrap para crear componentes personalizados, como secciones de productos, carrito de compras y formularios de pago, asegurando un estilo coherente y atractivo en todas las pantallas.",
			logo: reactLogo,
			linkText: "View Project",
			link: "https://devs-iteki.github.io/frontend-ecommerce/",
		},
	],
};

export default INFO;