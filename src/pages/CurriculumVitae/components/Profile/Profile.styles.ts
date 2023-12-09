import styled from "styled-components"

import Typography from "@components/ui/Typography"
import { TimelineItem as Item } from "@components/ui/Timeline"
import { Icon, TimelineContainer } from "@components/ui/Timeline/Timeline.styles"

export const Title = styled(Typography).attrs({ as: "h2", size: "xl", weight: "bold" })`
  color: var(--blue-500);
  text-transform: uppercase;
`
export const Timeline = styled(TimelineContainer)`
  @media print {
    border-left: none;
    margin: 0;
  }
`
export const TimelineItem = styled(Item)`
  color: var(--gray-700);
  margin: 0 0 1.5rem 1.5rem;

  @media print {
    margin: 0;

    ${Icon} {
      display: none;
    }
  }
`
export const ItemTitle = styled(Typography).attrs({
  as: "h3",
  size: "sm",
  weight: "medium",
})`
  color: var(--gray-900);
  margin-bottom: 0;
`
export const ItemTime = styled(Typography).attrs({ as: "time", size: "xs", weight: "semibold" })`
  color: var(--gray-500);
  display: block;
  margin-bottom: 1em;
`
export const Description = styled(Typography).attrs({ size: "sm" })`
  text-align: justify;
`
