import styled from "styled-components"

import { shadow } from "../../../utils/css"

export const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
`

export const Chip = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[3]};
  border-radius: 10px;
  box-shadow: ${({ theme }) => shadow(3, theme.colors.blue[2] as `#${string}`)};
  color: ${({ theme }) => theme.colors.main[0]};
  font-size: 0.8rem;
  font-weight: 700;
  margin: 5px;
  padding-right: 8px;

  span {
    background-color: ${({ theme }) => theme.colors.blue[1]};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    color: ${({ theme }) => theme.colors.secondary[1]};
    display: inline-block;
    margin-right: 5px;
    padding: 5px 8px;
  }

  @media print {
    color: ${({ theme }) => theme.colors.secondary[0]};
    background-color: transparent;
    box-shadow: none;
    border: 1px dashed ${({ theme }) => theme.colors.blue[1]};
    font-size: 0.8em;
    margin: 3px;
    padding-right: 6px;

    span {
      padding: 4px 6px;
      margin-right: 4px;
    }
  }
`
