# count-figures

A small TypeScript library that counts the number of contiguous “figures” in a 2D boolean grid.  
A **figure** is a group of orthogonally connected `true` cells (connected by top, bottom, left, or right — no diagonals).

---

## ✨ Features
- Written in **TypeScript** with full type declarations.
- Works in **Node.js** and modern **browsers**.
- Handles arbitrarily sized rectangular matrices.
- Uses an **iterative DFS** (no recursion → safe for large inputs).
- Includes unit tests (Vitest).