import DOMPurify from "dompurify"
import moment from "moment"
import "moment/dist/locale/es"
import { useLayoutEffect, useState } from "react"
import { Trans, useTranslation } from "react-i18next"
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
  Container,
  Divider,
  Experience,
  Fullaname,
  Image,
  Information,
  Language,
  Left,
  Profile,
  Right,
  Scroller,
  Socials,
  Work,
} from "./Index.styles"
import photoProfile from "../assets/sergio_martinez.jpg"
import { Description, Stack } from "../components/Stack"
import { Button } from "../components/ui/Button"
import { Chip, Chips } from "../components/ui/Chip"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { Title } from "./components/Title"

const skills = [
  { name: "Node", years: 5 },
  { name: "React", years: 5 },
  { name: "Typescript", years: 2 },
  { name: "AngularJS", years: 2 },
  { name: "Express", years: 3 },
  { name: "NestJS", years: 2 },
  { name: "Jest", years: 2 },
  { name: "Cypress", years: 1 },
  { name: "MySQL", years: 5 },
  { name: "PostgreSQL", years: 2 },
  { name: "MongoDB", years: 2 },
  { name: "PHP", years: 4 },
  // { name: "Git", years: 6 },
  // { name: "CSS3", years: 9 },
  // { name: "HTML5", years: 9 },
]

const birthday = "1989-10-29"
const today = moment()
const years = today.diff(birthday, "years")

export const Index = () => {
  const { t, i18n } = useTranslation()
  const [scrollWidth, setScrollWidth] = useState<number>(0)
  useDocumentTitle(
    i18n.language === "es" ? "Sergio Martínez - Curriculum Vitae" : "Sergio Martínez - Resume",
  )

  moment.locale(i18n.language)

  const handleEnglish = () => {
    if (i18n.language !== "en") {
      i18n.changeLanguage("en")
    }
  }
  const handleSpanish = () => {
    if (i18n.language !== "es") {
      i18n.changeLanguage("es")
    }
  }

  const handleScroll = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement
    const height = scrollHeight - clientHeight

    setScrollWidth((scrollTop / height) * 100)
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Scroller style={{ width: `${scrollWidth}%` }} />
      <Language>
        <button onClick={handleEnglish}>En</button>
        <button onClick={handleSpanish}>Es</button>
      </Language>
      <Container>
        <Left>
          <Image src={photoProfile} title='Sergio Martínez' />
          <Fullaname>Sergio Martínez</Fullaname>
          <Work>{t("web_developer")}</Work>

          <Divider />

          <Information>
            <Title>{t("personalInfo")}</Title>
            <ul>
              <li>{t("lastName")}: Martínez Tala</li>
              <li>{t("firstName")}: Sergio</li>
              <li>
                {t("age")}: {years} {t("years")}
              </li>
              <li>
                {t("nationality")}: {t("argentinian")}
              </li>
              <li>
                {t("status")}: {t("single")}
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCakeCandles} title={t("birthday")} />
                {moment(birthday).format("LL")}
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} title={t("address")} />
                <a
                  href='https://maps.app.goo.gl/xX6ML4kJC5hi6erp9'
                  target='_blank'
                  rel='noreferrer'
                >
                  Delambre 4565 1A &#x2013; CABA
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} title={t("phone")} />
                <a href='tel:+5491134094567'>11-3409-4567</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faIdCard} title={t("id")} />
                34.652.772
              </li>
              <li></li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} title={t("email")} />
                <a href='mailto:sergiomartinezt.89@gmail.com'>sergiomartinezt.89@gmail.com</a>
              </li>
            </ul>
            <Title subtitle={t("yearsExperience")}>{t("skills")}</Title>
            <Chips>
              {skills.map((skill, index) => (
                <Chip key={index} number={skill.years}>
                  {skill.name}
                </Chip>
              ))}
            </Chips>
            <Title>{t("languages")}</Title>
            <ul>
              <li>{t("english")}</li>
              <li>{t("spanish")}</li>
            </ul>
            <Title>Extracurricular</Title>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t("iac")) }} />
              <li dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t("utn")) }} />
              <li dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t("educationIt")) }} />
            </ul>
            <Title>{t("socials")}</Title>
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
            <Stack title={t("profile")}>
              <Profile>
                <Trans t={t} i18nKey='aboutMe' />
              </Profile>
            </Stack>

            <Stack title={t("experience")}>
              {t("jobs", { returnObjects: true }).map((job, index) => (
                <Description key={index} title={job.date} subtitle={job.position}>
                  {job.description}
                </Description>
              ))}
            </Stack>

            <Stack title={t("education")}>
              {t("educations", { returnObjects: true }).map((education, index) => (
                <Description key={index} title={education.date} subtitle={education.title}>
                  {education.from}
                </Description>
              ))}
            </Stack>
          </Experience>
        </Right>
      </Container>
    </>
  )
}
