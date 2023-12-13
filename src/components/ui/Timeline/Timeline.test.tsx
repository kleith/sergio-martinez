import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Timeline, TimelineItem } from "."

describe("Timeline component", () => {
  it("should render properly", () => {
    const { getByText } = render(
      <Timeline>
        <TimelineItem icon={<></>}>Item 1</TimelineItem>
        <TimelineItem icon={<></>}>Item 2</TimelineItem>
      </Timeline>,
    )

    expect(getByText(/Item 1/)).toBeInTheDocument()
  })
})
