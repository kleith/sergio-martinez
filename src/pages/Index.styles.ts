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
  background-color: var(--blue-500);

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
    color: var(--blue-25);
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 4px;
  }
`

export const Container = styled.div`
  font-size: var(--font-sm);

  a {
    color: var(--base-white);
    text-decoration: none;
    &:hover {
      color: var(--blue-500);
    }
  }

  ::-moz-selection {
    color: var(--blue-25);
    background-color: var(--blue-500);
  }
  ::selection {
    color: var(--blue-25);
    background-color: var(--blue-500);
  }

  @page {
    size: A4 portrait;
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 310px 1fr;
    margin: 0 auto;
    max-width: calc(100vw - 60px);
    padding: 20px 0;
  }
  @media ${device.desktop} {
    max-width: 1024px;
  }

  @media print {
    background-color: var(--gray-700);
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    display: grid;
    grid-template-columns: 250px 1fr;
    padding: 0;
    max-width: initial;
    * {
      font-size: 0.94em;
    }
  }
`

const borderRadius = "15px"

export const Left = styled.div`
  background-color: var(--gray-700);
  color: var(--base-white);
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
  border: 5px solid var(--base-white);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
  box-shadow: var(--shadow-md);
  display: block;
  max-width: 70%;
  margin: 20px auto;
`

export const Right = styled.div`
  background-color: var(--base-white);
  padding: 20px 30px;
  position: relative;

  button {
    position: absolute;
    right: 20px;
  }

  h2 {
    color: var(--blue-500);
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
      border-bottom: 1px dashed var(--blue-500);
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
  text-shadow: ${shadow(3, "var(--base-black)")};
`
export const Work = styled.h3`
  color: var(--blue-300);
  margin: 5px auto 30px !important;
  text-align: center;
  text-shadow: ${shadow(2, "var(--base-black)")};
`

export const Divider = styled.hr`
  border-color: var(--gray-500);
`

export const Information = styled.div`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  & ul li {
    svg {
      color: var(--blue-500);
      margin-right: 9px;
      min-width: 15px;
    }
  }
`

export const Socials = styled.ul`
  & li {
    display: inline-block;

    a:hover svg {
      color: var(--blue-500) !important;
    }

    svg {
      color: var(--base-white) !important;
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
    color: var(--gray-800);
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
