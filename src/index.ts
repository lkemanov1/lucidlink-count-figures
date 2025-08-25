import { Stack } from "./stack.js";


const MAX_CELLS = 5_000_000;
/**
 * Find the number of distinct figures in a 2D grid. A figure is defined as a group of
 * adjacent `true` cells (horizontally or vertically).
 * 
 * The function uses an iterative depth-first search (DFS) approach with a stack to explore
 * and mark all cells of a figure as visited. This prevents stack overflow issues that can
 * occur with recursive DFS on large grids.
 * 
 * @param grid 2D array of booleans representing a grid where true indicates part of a figure
 * @returns number of distinct figures in the grid
 */
export function countFigures (grid: boolean[][]): number {
    if (grid.length === 0 || grid[0]?.length === 0) {
        return 0;
    }

    const rowCount = grid.length;
    const colCount = grid[0]!.length;

    if (rowCount * colCount > MAX_CELLS) {
        throw new RangeError(`Grid too large: ${rowCount * colCount} cells (max ${MAX_CELLS})`);
    }

    const gridCopy: boolean[][] = grid.map(row => [...row])

    let figuresCount = 0;

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            if (gridCopy[row]![col]) {
                figuresCount++;
                markCells(row, col, gridCopy);
            }
        }
    }

    return figuresCount;
}

function markCells(row: number, col: number, grid: boolean[][]): void {
    let stack: Stack<Cell> = new Stack();
    stack.push({ row, col });

    while (!stack.isEmpty()) {
        const { row: currentRow, col: currentCol } = stack.pop()!;

        if (isOffMap(currentRow, currentCol, grid) || !grid[currentRow]![currentCol]) {
            continue;
        }

        grid[currentRow]![currentCol] = false;

        stack.push({ row: currentRow - 1, col: currentCol });
        stack.push({ row: currentRow + 1, col: currentCol });
        stack.push({ row: currentRow, col: currentCol - 1 });
        stack.push({ row: currentRow, col: currentCol + 1 });
    }
}

function isOffMap( row: number, col: number, grid: boolean[][]): boolean {
    return !(grid[row] && grid[row][col])
}

type Cell = {
    row: number;
    col: number;
}