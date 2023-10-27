import { Chip as ChipStyles, ChipContainer } from "./Chip.styles"

type ChipProps = {
  number: number
  children: React.ReactNode
}

export const Chip: React.FC<ChipProps> = ({ number, children }) => {
  return (
    <ChipStyles>
      <span>{number}</span>
      {children}
    </ChipStyles>
  )
}

export { ChipContainer }
