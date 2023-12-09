import styled from "styled-components"
import { device } from "@config/devices"

import { shadow } from "@utils/css"
import Typography from "@components/ui/Typography"
import Heading from "@components/ui/Heading"

export const MeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    border-bottom: 1px solid var(--gray-600);
  }
`
export const Image = styled.img`
  border-radius: 50%;
  border: 5px solid var(--base-white);
  box-shadow: var(--shadow-md);
  display: block;
  max-width: 70%;
  margin: 1rem auto;
`
export const Fullaname = styled(Heading).attrs({ as: "h2", size: "xs", weight: "bold" })`
  margin-bottom: 0;
  text-shadow: ${shadow(3, "var(--base-black)")};
`
export const Work = styled(Typography).attrs({ as: "h3", size: "lg", weight: "semibold" })`
  color: var(--blue-300);
  margin-top: 0;
  text-shadow: ${shadow(2, "var(--base-black)")};
`
