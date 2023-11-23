import styled from "styled-components"

import { TypographySizes, TypographyWeights } from "./Typography.constants"
import { TypographySizes as Sizes, Weights } from "./Typography.types"

type TypographyProps = {
  size?: Sizes
  weight?: keyof typeof Weights
}

const Typography = styled.p.withConfig({
  shouldForwardProp: (prop) => !["size", "weight"].includes(prop),
})<TypographyProps>(({ size = "md", weight = Weights.regular }) => ({
  ...TypographySizes[size],
  ...TypographyWeights[weight],
}))

export default Typography
