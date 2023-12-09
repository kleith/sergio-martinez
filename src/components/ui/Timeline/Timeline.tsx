import { Icon, Item, TimelineContainer } from "./Timeline.styles"

type TimelineProps = {
  children: React.ReactNode
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return <TimelineContainer>{children}</TimelineContainer>
}

type TimelineItemProps = {
  className?: string
  icon: React.ReactNode
  children: React.ReactNode
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ className, icon, children }) => (
  <Item className={className}>
    <Icon>{icon}</Icon>
    {children}
  </Item>
)
