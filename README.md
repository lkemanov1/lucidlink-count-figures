# count-figures

A small TypeScript library that counts the number of contiguous “figures” in a 2D boolean grid.  
A **figure** is a group of orthogonally connected `true` cells (connected by top, bottom, left, or right — no diagonals).   
The library accepts grids up to 5 miliion cells.

---

## ✨ Features
- Written in **TypeScript** with full type declarations.
- Works in **Node.js** and modern **browsers**.
- Handles arbitrarily sized rectangular matrices.
- Uses an **iterative DFS** (no recursion → safe for large inputs).
- Includes unit tests (Vitest).

## 🚀 Usage

Install the library:

```sh
npm install count-figures
```

### In ES Modules (Node.js or modern bundlers):

```js
import { countFigures } from 'count-figures';

const grid = [
  [true, false, true],
  [false, true, false],
  [true, false, true]
];

console.log(countFigures(grid)); // Output: 5
```

### In CommonJS:

```js
const { countFigures } = require('count-figures');

const grid = [
  [true, false, true],
  [false, true, false],
  [true, false, true]
];