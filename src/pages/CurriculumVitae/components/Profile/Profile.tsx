import DOMPurify from "dompurify"
import { useTranslation } from "react-i18next"

import { Job } from "@assets/Job"
import { Academic } from "@assets/Academic"

import { Description, ItemTime, ItemTitle, Timeline, TimelineItem, Title } from "./Profile.styles"

export const Profile = () => {
  const { t } = useTranslation()

  return (
    <>
      <Title>{t("profile")}</Title>
      <Description dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t("aboutMe")) }} />

      <Title>{t("experience")}</Title>
      <Timeline>
        {t("jobs", { returnObjects: true }).map((job, index) => (
          <TimelineItem key={index} icon={<Job width={16} height={16} />}>
            <ItemTitle dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.position) }} />
            <ItemTime dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.date) }} />
            <Description
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.description) }}
            />
          </TimelineItem>
        ))}
      </Timeline>

      <Title>{t("education")}</Title>
      <Timeline>
        {t("educations", { returnObjects: true }).map((education, index) => (
          <TimelineItem key={index} icon={<Academic width={16} height={16} />}>
            <ItemTitle dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(education.title) }} />
            <ItemTime dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(education.date) }} />
            <Description dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(education.from) }} />
          </TimelineItem>
        ))}
      </Timeline>
    </>
  )
}
