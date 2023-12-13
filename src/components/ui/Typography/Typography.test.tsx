import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Typography from "."

describe("Typography component", () => {
  it("should render properly", () => {
    const text = "Test text"
    const { getByText } = render(
      <Typography size='lg' weight='semibold'>
        {text}
      </Typography>,
    )

    expect(getByText(new RegExp(text))).toBeInTheDocument()
  })

  it("should render as a h1 element", () => {
    const text = "Test text"
    const { getByText } = render(<Typography as='h1'>{text}</Typography>)

    const element = getByText(new RegExp(text))
    expect(element.tagName).toBe("H1")
  })
})
