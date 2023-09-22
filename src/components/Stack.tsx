import DOMPurify from "dompurify"
import React from "react"

type StackProps = {
  title: string
  children: React.ReactNode
}

export const Stack: React.FC<StackProps> = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}

type DescriptionProps = {
  title: string
  subtitle: string
  children: string
}

export const Description: React.FC<DescriptionProps> = ({ title, subtitle, children }) => {
  return (
    <>
      <h4 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }} />
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subtitle) }} />
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />
    </>
  )
}
