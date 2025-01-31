import { styled } from "styled-components"

import { device, size } from "@config/devices"

export const Scroller = styled.div`
  position: fixed;
  z-index: 1;
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
export const Container = styled.div`
  display: grid;
  place-items: center;

  @media ${device.tablet} {
    margin: 1rem 1.5rem;
  }

  @media print {
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    margin: 0;
  }
`
export const ContentGrid = styled.div`
  --_border-radius: 0rem;
  display: grid;
  width: 100%;
  grid-template-areas: "header" "content" "details";

  @media ${device.tablet} {
    --_border-radius: 1rem;
    grid-template: auto 1fr / 310px 1fr;
    grid-template-areas: "header content" "details content";
    max-width: ${size.lg};
  }

  @media print {
    --_border-radius: 0rem;
    grid-template-columns: 250px 1fr;
    max-width: 100%;
  }
`
export const Header = styled.div`
  background-color: #323b4c;
  border-top-left-radius: var(--_border-radius);
  color: var(--gray-50);
  grid-area: header;
  padding: 1rem 1.5rem 0 1.5rem;
`
export const Detail = styled.div`
  background-color: #323b4c;
  border-bottom-left-radius: var(--_border-radius);
  color: var(--gray-50);
  grid-area: details;
  padding: 0 1.5rem 1rem 1.5rem;
`
export const Content = styled.div`
  background-color: var(--base-white);
  border-top-right-radius: var(--_border-radius);
  border-bottom-right-radius: var(--_border-radius);
  grid-area: content;
  min-height: 100vh;
  padding: 1rem 1.5rem;
`
