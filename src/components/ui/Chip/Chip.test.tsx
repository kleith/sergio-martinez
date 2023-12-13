import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Chip } from "."

describe("Chip component", () => {
  it("should render properly", () => {
    const { getByText } = render(<Chip number={2}>Chip test</Chip>)

    expect(getByText(/2/)).toBeInTheDocument()
    expect(getByText(/Chip test/)).toBeInTheDocument()
  })
})
