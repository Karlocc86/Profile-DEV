import {Link} from "react-router";
import './aboutMe.css'


const AboutMe = () => {
    return (
        <div>
            <h1>About me</h1>
            <p>
                <Link to={'/'}>Go Back</Link>
            </p>

            <h1>Karlo Sebastián Cadena Cota</h1>

            <p className="about-me">Hola soy estudiante de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey. Me apasiona construir soluciones que combinan hardware, software e inteligencia artificial. He participado en hackathons internacionales, liderado equipos de desarrollo y trabajado con tecnologías que van desde Android y Python hasta señales EEG y GenAI. Siempre busco aprender rápido y crear cosas que tengan impacto real.</p>


        </div>


    
    )
}

export default AboutMe;

