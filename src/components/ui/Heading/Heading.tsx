import styled from "styled-components"

import { HeadingSizes, HeadingWeights } from "./Heading.constants"
import { Sizes, Weights } from "./Heading.types"

type HeadingProps = {
  size?: keyof typeof Sizes
  weight?: keyof typeof Weights
}

const Heading = styled.div.attrs({ role: "heading" }).withConfig({
  shouldForwardProp: (prop) => !["size", "weight"].includes(prop),
})<HeadingProps>(({ size = Sizes.md, weight = Weights.semibold }) => ({
  ...HeadingSizes[size],
  ...HeadingWeights[weight],
}))

export default Heading
