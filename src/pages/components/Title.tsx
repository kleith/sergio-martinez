import styled from "styled-components"

import Typography from "../../components/ui/Typography"

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
  margin-top: 40px;
  margin-bottom: ${({ $hasSubtitle }) => ($hasSubtitle ? "0" : "1rem")};
`

const SubHeader = styled(Typography).attrs({ size: "xs" })`
  margin: 0 0 1rem 0;
  color: ${({ theme }) => theme.colors.blue[3]};
`
