import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Tooltip } from "."

describe("Tooltip component", () => {
  it("should render properly", async () => {
    const { getByText } = render(<Tooltip title='Tooltip message'>Container message</Tooltip>)

    const tooltip = getByText(/Container message/)

    expect(tooltip).toBeInTheDocument()
  })
})
