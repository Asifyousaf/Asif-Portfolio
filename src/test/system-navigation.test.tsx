import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { SystemMap } from "@/components/portfolio/SystemMap";

afterEach(cleanup);

describe("Engineering stage navigation", () => {
  it("selects a stage and reads back its details", () => {
    render(<SystemMap />);
    fireEvent.click(screen.getByRole("tab", { name: /01 Idea/ }));
    expect(screen.getByRole("tab", { name: /01 Idea/ })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Start with the real problem.");
  });

  it("supports last-stage selection and wraps keyboard focus to the first stage", () => {
    render(<SystemMap />);
    const tabs = screen.getByRole("tablist");
    fireEvent.keyDown(tabs, { key: "End" });
    const deployment = screen.getByRole("tab", { name: /05 Deployment/ });
    expect(deployment).toHaveAttribute("aria-selected", "true");
    expect(deployment).toHaveFocus();
    fireEvent.keyDown(tabs, { key: "ArrowRight" });
    const idea = screen.getByRole("tab", { name: /01 Idea/ });
    expect(idea).toHaveAttribute("aria-selected", "true");
    expect(idea).toHaveFocus();
  });
});