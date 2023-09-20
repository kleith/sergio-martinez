import moment from "moment"
import "moment/dist/locale/es"
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faCakeCandles,
  faIdCard,
  faPrint,
} from "@fortawesome/free-solid-svg-icons"

import {
  ButtonControl,
  Chip,
  ChipContainer,
  Container,
  Divider,
  Experience,
  Fullaname,
  Image,
  Information,
  Left,
  Profile,
  Right,
  Socials,
  Work,
} from "./Index.styles"
import photoProfile from "../assets/sergio_martinez.jpg"
import { Description, Stack } from "../components/Stack"
import { Button } from "../components/ui/Button/Button"

moment.locale("es")

const skills = [
  "Node",
  "React",
  "Typescript",
  "Angular.js",
  "Express",
  "Nest.js",
  "Jest",
  "Cypress",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "PHP",
  "Git",
  "CSS3",
  "HTML5",
]

const i18n = {
  personalInfo: "Información personal",
  firstName: "Nombre",
  lastName: "Apellido",
  age: "Edad",
  years: "años",
  nationality: "Nacionalidad",
  birthday: "Fecha de nacimiento",
  status: "Estado civil",
  address: "Dirección",
  phone: "Teléfono",
  id: "DNI",
  email: "Correo electrónico",
  skills: "Habilidades",
  languages: "Idiomas",
  profile: "Perfil",
  education: "Educación",
  experience: "Experiencia laboral",
}

const birthday = "1989-10-29"
const today = moment()
const years = today.diff(birthday, "years")

export const Index = () => {
  return (
    <Container>
      <Left>
        <Image src={photoProfile} title='Sergio Martínez' />
        <Fullaname>Sergio Martínez</Fullaname>
        <Work>Web developer</Work>

        <Divider />

        <Information>
          <h3>{i18n.personalInfo}</h3>
          <ul>
            <li>{i18n.lastName}: Martínez Tala</li>
            <li>{i18n.firstName}: Sergio</li>
            <li>
              {i18n.age}: {years} {i18n.years}
            </li>
            <li>{i18n.nationality}: Argentino</li>
            <li>{i18n.status}: Soltero</li>
          </ul>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCakeCandles} title={i18n.birthday} />
              {moment(birthday).format("LL")}
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} title={i18n.address} />
              <a href='https://maps.app.goo.gl/xX6ML4kJC5hi6erp9' target='_blank' rel='noreferrer'>
                Delambre 4565 1A &#x2013; CABA
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} title={i18n.phone} />
              <a href='tel:+5491134094567'>11-3409-4567</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faIdCard} title={i18n.id} />
              34.652.772
            </li>
            <li></li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} title={i18n.email} />
              <a href='mailto:sergiomartinezt.89@gmail.com'>sergiomartinezt.89@gmail.com</a>
            </li>
          </ul>
          <h3>{i18n.skills}</h3>
          <ChipContainer>
            {skills.map((skill, index) => (
              <Chip key={index}>{skill}</Chip>
            ))}
          </ChipContainer>
          <h3>{i18n.languages}</h3>
          <ul>
            <li>Inglés &#x2013; B2</li>
            <li>Español &#x2013; Nativo</li>
          </ul>
          <h3>Extra curricular</h3>
          <ul>
            <li>
              Curso de Diseño web de 1 año en el <b>IAC</b>.
            </li>
            <li>
              Curso de NodeJS y MongoDB de 1 año en la <b>UTN</b>.
            </li>
            <li>
              Curso de Android básico de 4 meses en <b>Educación IT</b>.
            </li>
          </ul>
          <h3>Sociales</h3>
          <Socials>
            <li>
              <a
                href='https://github.com/kleith'
                aria-label='github.com/kleith'
                target='_blank'
                rel='noreferrer'
                title='Github'
              >
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/sergio-martinezt/'
                aria-label='linkedin.com/in/sergio-martinezt'
                target='_blank'
                rel='noreferrer'
                title='LinkedIn'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </Socials>
        </Information>
      </Left>
      <Right>
        <ButtonControl>
          <Button icon={faFloppyDisk}>Descargar</Button>
          <Button icon={faPrint}>Imprimir</Button>
        </ButtonControl>
        <Experience>
          <Stack title={i18n.profile}>
            <Profile>
              Soy un apasionado desarrollador web especializado en <b>React</b> con una sólida
              experiencia en la creación de aplicaciones web de alto rendimiento y experiencias de
              usuario excepcionales. Mi enfoque se centra en la construcción de interfaces de
              usuario interactivas y receptivas que no solo cumplan con los estándares técnicos,
              sino que también proporcionen una experiencia inigualable para los usuarios finales.
              <br />
              Mi objetivo es seguir contribuyendo al éxito de proyectos desafiantes y llevar mi
              experiencia en <b>React</b> y <b>Node</b> al siguiente nivel.
            </Profile>
          </Stack>

          <Stack title={i18n.experience}>
            <Description
              title='2021 &#x2013; Actual'
              subtitle={
                <>
                  Ingeniero de software en <b>Capicua</b>
                </>
              }
            >
              Programador fullstack para distintos proyectos de USA, trabajando con las últimas
              tecnologías de desarrollo; diseño y arquitectura del proyecto. Test unitarios con
              Jest.
              <br />
              <b>Lenguajes de desarrollo:</b> React, Node.js y MongoDB con typescript. Trabajo con
              equipos internacionales.
              <br />
              <b>Herramientas utilizadas:</b> AWS, Hasura y Jira.
            </Description>
            <Description
              title='2019 &#x2013; 2021'
              subtitle={
                <>
                  Ingeniero de software en <b>Santander Tecnología</b>
                </>
              }
            >
              Programador fullstack para distintos proyectos de intranet y back office del banco
              Santander, desarrollo de la UI bancaria en React con TDD, diseño y arquitectura del
              proyecto y creación de BFF con Nest.js. Test unitarios con Jest y test de integración
              con cypress.
              <br />
              <b>Lenguajes de desarrollo:</b> React, Node.js, Nest.js y MongoDB. Trabajo en equipos
              medianos y grandes.
            </Description>
            <Description
              title='2013 &#x2013; 2019'
              subtitle={
                <>
                  Desarrollador Web fullstack en <b>W3</b>
                </>
              }
            >
              Programador en frontend y backend de sitios web tanto en web como en mobile,
              trabajando con MVC utilizando las tecnologías óptimas para cada tipo de proyecto. Se
              utilizó CMS Drupal y Wordpress, Framework Codeigniter y se realizó configuraciones de
              servidor en Windows XP2003.
              <br />
              <b>Lenguajes de desarrollo:</b> PHP, Javascript, MySQL, MariaDB, GraphQL, Boostrap,
              Backbone.js, Angular.js, Node.js, React.js, ReactNative, MongoDB, CSS3 y HTML5.
              <br />
              <b>Herramientas utilizadas:</b> AWS, Azure, Jenkins, Jira y Bitbucket.
            </Description>
            <Description
              title='2012 &#x2013; 2013'
              subtitle={
                <>
                  Desarrollador Web en <b>Gameloft</b>
                </>
              }
            >
              Programador en frontend y backend de sitios web y aplicaciones de facebook tanto en
              web como en mobile, trabajando con MVC utilizando las tecnologías óptimas para cada
              tipo de proyecto. Se utilizó e investigó APIs como la de Instagram, Twitter, Facebook
              y Vine.
              <br />
              <b>Lenguajes de desarrollo:</b> PHP, SQL, jQuery, CSS3, HTML5 y SASS.
            </Description>
            <Description
              title='2011'
              subtitle={
                <>
                  Desarrollador Web en <b>Kazuu</b>
                </>
              }
            >
              Programador en frontend y backend de páginas web (Kazuu), trabajando con MVC con
              CodeIgniter y Framework propio de Kazuu. Se utilizaron tecnologías nuevas e
              investigaciones en nuevas áreas.
            </Description>
          </Stack>

          <Stack title={i18n.education}>
            <Description
              title='2011 &#x2013; 2012 (Abandonado)'
              subtitle='Ciencias de la Computación'
            >
              Universidad de Buenos Aires
            </Description>
            <Description title='2010 (Finalizado)' subtitle='Técnico en Computación'>
              Escuela Técnica N° 24 &#x2013; Defensa de Buenos Aires
            </Description>
          </Stack>
        </Experience>
      </Right>
    </Container>
  )
}
