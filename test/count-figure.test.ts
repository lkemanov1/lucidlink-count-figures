import { describe, it, expect } from "vitest"
import { countFigures } from "../src/count-figures"

describe("countFigures", () => {
  it("returns 0 for empty grid", () => {
    expect(countFigures([])).toBe(0)
  })

  it("returns 0 for all unmarked", () => {
    expect(countFigures([
      [false, false],
      [false, false],
    ])).toBe(0)
  })

  it("returns 1 for a filled block", () => {
    expect(countFigures([
      [true, true],
      [true, true],
    ])).toBe(1)
  })

  it ("should not modify the original grid", () => {
    const originalGrid = [
      [true, false, false],
      [false, true, false],
      [false, false, true],
    ]
    expect(countFigures(originalGrid)).toBe(3);
    expect(countFigures(originalGrid)).toBe(3);
  })

  it("treats diagonals as separate figures", () => {
    expect(countFigures([
      [true, false, true],
      [false, true, false],
      [true, false, true],
    ])).toBe(5)
  })

  it("handles large grids with many small figures", () => {
    let grid = Array.from({ length: 1000 }, (_, r) =>
         Array.from({ length: 1000 }, (_, c) => (r + c) % 2 === 0))

    const start = Date.now()
    let result = countFigures(grid)
    const duration = Date.now() - start

    expect(duration).toBeLessThan(1000)
    expect(result).toBe(500000)
  })

  it("handles large grid with filled with marked cell", () => {
    let grid = Array.from({ length: 1000 }, () =>
      Array.from({ length: 1000 }, () => true))

    const start = Date.now()
    let result = countFigures(grid)
    const duration = Date.now() - start

    expect(result).toBe(1)
    expect(duration).toBeLessThan(1000)
  })
})