import styled from "styled-components"

import Typography from "@components/ui/Typography"

type TitleProps = {
  children: string
  subtitle?: string
}

export const Title: React.FC<TitleProps> = ({ children, subtitle }) => {
  return (
    <>
      <Header $hasSubtitle={Boolean(subtitle)}>{children}</Header>
      {subtitle && <SubHeader>{subtitle}</SubHeader>}
    </>
  )
}

const Header = styled(Typography).attrs({ size: "md", weight: "bold", as: "h3" })<{
  $hasSubtitle: boolean
}>`
  margin-top: 2rem;
  ${({ $hasSubtitle }) => $hasSubtitle && "margin-bottom: 0;"}
`
const SubHeader = styled(Typography).attrs({ size: "xs" })`
  margin-top: 0;
  color: var(--blue-300);
`
