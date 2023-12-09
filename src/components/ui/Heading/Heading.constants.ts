import { Sizes, Weights } from "./Heading.types"

type HeadingSizeType = Record<Sizes, Pick<React.CSSProperties, "fontSize" | "lineHeight">>
type HeadingWeightType = Record<Weights, Pick<React.CSSProperties, "fontWeight">>

export const HeadingSizes: HeadingSizeType = {
  "2xl": {
    fontSize: "4.5rem",
    lineHeight: "5.625rem",
  },
  xl: {
    fontSize: "3.75rem",
    lineHeight: "4.5rem",
  },
  lg: {
    fontSize: "3rem",
    lineHeight: "3.75rem",
  },
  md: {
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
  },
  sm: {
    fontSize: "1.875rem",
    lineHeight: "2.375rem",
  },
  xs: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
}

export const HeadingWeights: HeadingWeightType = {
  bold: {
    fontWeight: 700,
  },
  semibold: {
    fontWeight: 600,
  },
  medium: {
    fontWeight: 500,
  },
  regular: {
    fontWeight: 400,
  },
}
