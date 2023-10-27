import styled from "styled-components"

import { shadow } from "../utils/css"
import { device } from "../config/devices"

export const Scroller = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 0;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.blue[1]};

  @media ${device.desktop} {
    display: none;
  }

  @media print {
    display: none;
  }
`

export const Language = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;

  button {
    background-color: ${({ theme }) => theme.colors.main[1]};
    border: 0;
    color: ${({ theme }) => theme.colors.secondary[1]};
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 4px;
  }
`

export const Container = styled.div`
  font-size: 14px;

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

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 310px auto;
    grid-template-rows: auto;
    margin: 20px auto;
    max-width: calc(100vw - 60px);
  }
  @media ${device.desktop} {
    max-width: 1024px;
  }

  @media print {
    background-color: ${({ theme }) => theme.colors.blue[0]};
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: auto;
    margin: 0;
    max-width: initial;
    * {
      font-size: 0.94em;
    }
  }
`

const borderRadius = "15px"

export const Left = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[0]};
  color: #fff;
  padding: 20px 25px;

  @media ${device.tablet} {
    border-bottom-left-radius: ${borderRadius};
    border-top-left-radius: ${borderRadius};
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
  position: relative;

  button {
    position: absolute;
    right: 20px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.blue[1]};
    text-transform: uppercase;
  }

  @media ${device.tablet} {
    border-bottom-right-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};
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
    margin: 0;
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
  strong {
    font-weight: 600;
  }
`

export const Profile = styled.p`
  text-align: justify;
`
