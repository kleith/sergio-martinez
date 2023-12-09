import styled from "styled-components"

import Typography from "@components/ui/Typography"

export const List = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
`
export const ListItem = styled(Typography).attrs({ as: "li", size: "sm" })`
  align-items: center;
  display: flex;
  gap: 0.5rem;

  svg {
    color: var(--blue-400);
    width: 1rem;
  }
`
export const ListLink = styled.a`
  display: inline-block;
  color: inherit;
  font-size: var(--font-sm);
  line-height: var(--line-sm);
  text-decoration: none;

  &:hover {
    color: var(--blue-400);
  }
`

export const SocialsList = styled(List)`
  display: flex;
  gap: 0.5rem;

  @media print {
    flex-direction: column;
  }
`
export const SocialItem = styled.li`
  ${ListLink} {
    font-size: 2rem;
    display: block;
  }

  @media print {
    ${ListLink} {
      font-size: var(--font-xs);
    }
    svg {
      display: none;
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
