// import original module declarations
import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      main: string
      kanit: string
      inter: string
      ubuntu: string
      spline: string
    }
  }
}
