import DOMPurify from "dompurify"
import moment from "moment"
import { useTranslation } from "react-i18next"
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faCakeCandles,
  faIdCard,
  // faPrint,
} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Chip, Chips } from "@components/ui/Chip"

import { birthday, skills, years } from "./Information.constants"
import { List, ListItem, ListLink, SocialItem, SocialsList } from "./Information.styles"
import { Title } from "./Title"

export const Information = () => {
  const { t } = useTranslation()

  return (
    <>
      <Title>{t("personalInfo")}</Title>
      <List>
        <ListItem>{t("lastName")}: Martínez Tala</ListItem>
        <ListItem>{t("firstName")}: Sergio</ListItem>
        <ListItem>
          {t("age")}: {years} {t("years")}
        </ListItem>
        <ListItem>
          {t("nationality")}: {t("argentinian")}
        </ListItem>
        <ListItem>
          {t("status")}: {t("single")}
        </ListItem>
      </List>
      <List>
        <ListItem>
          <FontAwesomeIcon icon={faCakeCandles} title={t("birthday")} />
          {moment(birthday).format("LL")}
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faLocationDot} title={t("address")} />
          <ListLink
            href='https://maps.app.goo.gl/xX6ML4kJC5hi6erp9'
            target='_blank'
            rel='noreferrer'
          >
            Delambre 4565 1A &#x2013; CABA
          </ListLink>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faPhone} title={t("phone")} />
          <ListLink href='tel:+5491134094567'>11-3409-4567</ListLink>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faIdCard} title={t("id")} />
          34.652.772
        </ListItem>
        <ListItem></ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faEnvelope} title={t("email")} />
          <ListLink href='mailto:sergiomartinezt.89@gmail.com'>
            sergiomartinezt.89@gmail.com
          </ListLink>
        </ListItem>
      </List>
      <Title subtitle={t("yearsExperience")}>{t("skills")}</Title>
      <Chips>
        {skills.map((skill, index) => (
          <Chip key={index} number={skill.years}>
            {skill.name}
          </Chip>
        ))}
      </Chips>
      <Title>{t("languages")}</Title>
      <List>
        <ListItem>{t("english")}</ListItem>
        <ListItem>{t("spanish")}</ListItem>
      </List>
      <Title>Extracurricular</Title>
      <List>
        <ListItem dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t("iac")) }} />
        <ListItem dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t("utn")) }} />
        <ListItem dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t("educationIt")) }} />
      </List>
      <Title>{t("socials")}</Title>
      <SocialsList>
        <SocialItem>
          <ListLink
            href='https://github.com/kleith'
            aria-label='github.com/kleith'
            target='_blank'
            rel='noreferrer'
            title='Github'
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </ListLink>
        </SocialItem>
        <SocialItem>
          <ListLink
            href='https://www.linkedin.com/in/sergio-martinezt/'
            aria-label='linkedin.com/in/sergio-martinezt'
            target='_blank'
            rel='noreferrer'
            title='LinkedIn'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </ListLink>
        </SocialItem>
      </SocialsList>
    </>
  )
}
