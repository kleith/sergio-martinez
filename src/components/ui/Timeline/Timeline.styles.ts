import { styled } from "styled-components"

export const TimelineContainer = styled.ol`
  margin: 0 0 0 0.75rem;
  padding: 0;
  list-style: none;
  border-left: 1px solid var(--blue-100);
`
export const Item = styled.li`
  margin: 0 0 2.5rem 1.5rem;
  position: relative;
`
export const Icon = styled.span`
  align-items: center;
  background-color: var(--blue-200);
  border-radius: 50%;
  box-shadow: 0 0 0 0.5rem var(--base-white);
  color: var(--blue-800);
  display: inline-flex;
  height: 1.5rem;
  justify-content: center;
  left: calc(-1.5rem - 1.5rem / 2);
  position: absolute;
  width: 1.5rem;
`
