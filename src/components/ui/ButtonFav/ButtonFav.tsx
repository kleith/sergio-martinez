import { styled } from "styled-components"

export const ButtonContainer = styled.button`
  border-radius: 0.75rem;
  border-radius: 1.25rem;
  border: 1px dashed var(--gray-300);
  background: var(--base-white);
  padding: 0;
  margin: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--gray-400);
  outline: none;
  transition:
    background-color,
    color 200ms ease-out;
  position: relative;

  &:hover {
    background: var(--gray-50);
    color: var(--gray-600);
  }

  &:focus {
    box-shadow: 0px 0px 0px 4px var(--gray-100);
  }

  > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`
