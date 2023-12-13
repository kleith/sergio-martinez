import { styled } from "styled-components"

enum Positions {
  "left" = -20,
  "middle" = -50,
  "right" = -80,
}

type PositionsTypes = keyof typeof Positions

type TooltipProps = {
  title: string
  position?: PositionsTypes
}

export const Tooltip = styled.div.attrs({ role: "tooltip" }).withConfig({
  shouldForwardProp: (prop) => "position" !== prop,
})<TooltipProps>`
  --_bg-color: var(--gray-800);
  position: relative;

  &:after {
    content: attr(title);
    background: var(--_bg-color);
    border-radius: 0.5rem;
    box-shadow: var(--shadow-lg);
    color: var(--gray-50);
    display: inline-flex;
    font-size: var(--font-xs);
    font-weight: var(--text-semibold);
    line-height: var(--line-xs);
    max-width: 80vw;
    padding: 0.5rem 0.75rem;
    pointer-events: none;
    position: absolute;
    text-wrap: nowrap;
    top: -3rem;
    left: 50%;
    transform: translateX(${({ position = "middle" }) => `${Positions[position]}%`});
  }

  &:before,
  &:after {
    opacity: 0;
    visibility: hidden;
    transition: opacity 200ms ease-out;
    &:hover {
      opacity: 1;
      visibility: visible;
    }
  }

  &:hover:after,
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }

  &:before {
    background-color: var(--_bg-color);
    content: "";
    -webkit-mask-image: url(tooltip.svg);
    mask-image: url(tooltip.svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    position: absolute;
    left: 50%;
    height: 1rem;
    width: 1rem;
    transform: translateX(-50%);
    top: -1rem;
  }
`
