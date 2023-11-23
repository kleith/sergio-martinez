import styled from "styled-components"

import { shadow } from "../../../utils/css"

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const ChipContainer = styled.div`
  --padding: 0.5rem;
  --border-radius: 0.6rem;

  background-color: var(--blue-300);
  border-radius: 0.6rem;
  box-shadow: ${shadow(3, "var(--blue-600)" as `#${string}`)};
  color: var(--gray-800);
  display: inline-flex;
  font-size: var(--font-sm);
  font-weight: var(--text-bold);
  line-height: var(--line-md);
  overflow: hidden;

  @media print {
    --padding: 0.3rem;

    color: var(--blue-25);
    background-color: transparent;
    box-shadow: none;
    border: 1px dashed var(--blue-500);
    font-size: 0.55rem;
    font-size: 0.8em;
    font-weight: var(--text-medium);
    line-height: var(--line-xs);
  }
`

export const ChipNumber = styled.div`
  background-color: var(--blue-500);
  color: var(--blue-25);
  padding: 0 var(--padding);
`
export const ChipText = styled.span`
  padding: 0 var(--padding);
`
