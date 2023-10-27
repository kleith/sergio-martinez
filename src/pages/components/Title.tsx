import styled from "styled-components"

type TitleProps = {
  children: string
  subtitle?: string
}

export const Title: React.FC<TitleProps> = ({ children, subtitle }) => {
  return (
    <>
      <H3 hasSubtitle={!!subtitle}>{children}</H3>
      {subtitle && <Sub>{subtitle}</Sub>}
    </>
  )
}

const H3 = styled.h3<{ hasSubtitle: boolean }>`
  margin-top: 40px;
  margin-bottom: ${({ hasSubtitle }) => (hasSubtitle ? "0" : "1em")};
`

const Sub = styled.p`
  margin: 0 0 1rem 0;
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.blue[3]};
`
