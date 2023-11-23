import { Chips, ChipContainer, ChipNumber, ChipText } from "./Chip.styles"

type ChipProps = {
  number: number
  children: React.ReactNode
}

export const Chip: React.FC<ChipProps> = ({ number, children }) => {
  return (
    <ChipContainer>
      <ChipNumber>{number}</ChipNumber>
      <ChipText>{children}</ChipText>
    </ChipContainer>
  )
}

export { Chips }
