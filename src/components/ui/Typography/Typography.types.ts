export enum Weights {
  "bold" = "bold",
  "semibold" = "semibold",
  "medium" = "medium",
  "regular" = "regular",
}

enum Sizes {
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
}

export type TypographySizes = keyof typeof Sizes

export type TypographySizeType = Record<
  TypographySizes,
  Pick<React.CSSProperties, "fontSize" | "lineHeight">
>
export type TypographyWeightType = Record<Weights, Pick<React.CSSProperties, "fontWeight">>
