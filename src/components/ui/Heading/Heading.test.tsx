import { describe, expect, it } from "vitest"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Heading from "."

describe("Heading component", () => {
  it("should render properly", () => {
    const text = "Test text"
    const { getByText } = render(
      <Heading size='lg' weight='bold'>
        {text}
      </Heading>,
    )

    expect(getByText(new RegExp(text))).toBeInTheDocument()
  })

  it("should render as a span element", () => {
    const text = "Test text"
    const { getByText } = render(<Heading as='span'>{text}</Heading>)

    const element = getByText(new RegExp(text))
    expect(element.tagName).toBe("SPAN")
  })
})
