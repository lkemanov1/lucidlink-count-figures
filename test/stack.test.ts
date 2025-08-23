import { describe, it, expect } from "vitest"
import { Stack } from "../src/stack" // adjust path if needed

describe("Stack", () => {
  it("starts empty", () => {
    const stack = new Stack<number>()
    expect(stack.isEmpty()).toBe(true)
    expect(stack.size()).toBe(0)
    expect(stack.peek()).toBeUndefined()
    expect(stack.pop()).toBeUndefined()
  })

  it("push adds items", () => {
    const stack = new Stack<number>()
    stack.push(10)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.size()).toBe(1)
    expect(stack.peek()).toBe(10)
  })

  it("pop removes and returns the last item", () => {
    const stack = new Stack<number>()
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toBe(2)
    expect(stack.size()).toBe(1)
    expect(stack.peek()).toBe(1)
  })

  it("peek returns the top without removing", () => {
    const stack = new Stack<string>()
    stack.push("a")
    stack.push("b")
    expect(stack.peek()).toBe("b")
    expect(stack.size()).toBe(2)
  })

  it("handles mixed operations correctly", () => {
    const stack = new Stack<number>()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2)
    expect(stack.size()).toBe(1)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.pop()).toBe(1)
    expect(stack.isEmpty()).toBe(true)
  })

  it("pop on empty stack returns undefined", () => {
    const stack = new Stack<boolean>()
    expect(stack.pop()).toBeUndefined()
    expect(stack.size()).toBe(0)
  })

  it("peek on empty stack returns undefined", () => {
    const stack = new Stack<object>()
    expect(stack.peek()).toBeUndefined()
  })

  it("works with objects as items", () => {
    const stack = new Stack<{ id: number }>()
    stack.push({ id: 1 })
    stack.push({ id: 2 })
    expect(stack.pop()).toEqual({ id: 2 })
    expect(stack.peek()).toEqual({ id: 1 })
  })
})