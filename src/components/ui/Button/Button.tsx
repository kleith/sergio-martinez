import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button as ButtonUI } from "./Button.styles"

type Props = {
  icon?: IconProp
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ icon, children }) => {
  return (
    <ButtonUI>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </ButtonUI>
  )
}
