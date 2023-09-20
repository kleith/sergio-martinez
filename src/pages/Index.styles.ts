import styled from "styled-components"

import { shadow } from "../utils/css"

export const Container = styled.div`
  display: grid;
  font-size: 14px;
  grid-template-columns: 310px auto;
  grid-template-rows: auto;
  max-width: 1024px;
  margin: 20px auto;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.blue[1]};
    }
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.colors.secondary[0]};
    background-color: ${({ theme }) => theme.colors.blue[1]};
  }

  ::selection {
    color: ${({ theme }) => theme.colors.secondary[0]};
    background-color: ${({ theme }) => theme.colors.blue[1]};
  }

  @page {
    size: A4 portrait;
  }

  @media print {
    * {
      font-size: 0.94em;
    }
    background-color: ${({ theme }) => theme.colors.blue[0]};
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    grid-template-columns: 250px auto;
    margin: 0;
  }
`

const borderRadius = "15px"

export const Left = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[0]};
  color: #fff;
  padding: 20px 25px;
  border-bottom-left-radius: ${borderRadius};
  border-top-left-radius: ${borderRadius};

  h3 {
    margin-top: 40px;
  }

  @media print {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    height: calc(100vh - 40px);

    h2 {
      font-size: 1.4em;
    }
  }
`

export const Image = styled.img`
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
  display: block;
  max-width: 70%;
  margin: 20px auto;
`

export const Right = styled.div`
  background-color: #fff;
  padding: 20px 30px;
  border-bottom-right-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  position: relative;

  button {
    position: absolute;
    right: 20px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.blue[1]};
    text-transform: uppercase;
  }

  @media print {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    h2 {
      font-size: 1.4em;
      border-bottom: 1px dashed ${({ theme }) => theme.colors.blue[1]};
    }
  }
`

export const ButtonControl = styled.div`
  display: none;

  @media print {
    display: none;
  }
`

export const Fullaname = styled.h2`
  margin: 20px 0px 0px;
  text-align: center;
  text-shadow: ${shadow(3, "#000")};
`
export const Work = styled.h3`
  color: ${({ theme }) => theme.colors.blue[3]};
  margin: 5px auto 30px !important;
  text-align: center;
  text-shadow: ${shadow(2, "#000")};
`

export const Divider = styled.hr`
  border-color: rgba(255, 255, 255, 0.2);
`

export const Information = styled.div`
  & ul {
    list-style: none;
    maring: 0;
    padding: 0;
  }
  & ul li {
    svg {
      color: ${({ theme }) => theme.colors.blue[1]};
      margin-right: 9px;
      min-width: 15px;
    }
  }
`

export const Socials = styled.ul`
  & li {
    display: inline-block;

    a:hover svg {
      color: ${({ theme }) => theme.colors.blue[1]} !important;
    }

    svg {
      color: #fff !important;
      width: 30px;
      height: 30px;
    }
  }

  @media print {
    li {
      margin-bottom: 10px;
      svg {
        display: none;
      }
    }
    a::before {
      content: attr(title) ": ";
    }
    a::after {
      content: attr(aria-label);
      text-decoration: underline;
    }
  }
`

export const ChipContainer = styled.div`
  margin: 0 -5px;
`

export const Chip = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[3]};
  border-radius: 10px;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 5px;
  padding: 5px 10px;

  color: ${({ theme }) => theme.colors.main[0]};
  box-shadow: ${({ theme }) => shadow(3, theme.colors.blue[2] as `#${string}`)};

  @media print {
    color: ${({ theme }) => theme.colors.secondary[0]};
    background-color: transparent;
    box-shadow: none;
    border: 1px dashed ${({ theme }) => theme.colors.blue[1]};
    font-size: 0.8em;
    margin: 3px;
    padding: 4px 6px;
  }
`

export const Experience = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.blue[0]};
    margin-bottom: 0;
    + p {
      margin: 0;
      + p {
        text-align: justify;
      }
    }
  }
  b {
    font-weight: 600;
  }
`

export const Profile = styled.p`
  text-align: justify;
`
