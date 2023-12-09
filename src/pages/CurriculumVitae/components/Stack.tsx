import DOMPurify from "dompurify"

import Typography from "@components/ui/Typography"

import { Section } from "./Stack.styles"

type StackProps = {
  title: string
  children: React.ReactNode
}

export const Stack: React.FC<StackProps> = ({ title, children }) => {
  return (
    <>
      <Typography as='h2' size='lg' weight='bold'>
        {title}
      </Typography>
      {children}
    </>
  )
}

type DescriptionProps = {
  title?: string
  subtitle?: string
  children: string
}

export const Description: React.FC<DescriptionProps> = ({ title, subtitle, children }) => {
  return (
    <Section>
      {title ? (
        <Typography
          as='h3'
          size='md'
          weight='semibold'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
        />
      ) : null}
      {subtitle ? (
        <Typography
          as='h4'
          size='sm'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subtitle) }}
        />
      ) : null}
      <Typography size='sm' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />
    </Section>
  )
}
