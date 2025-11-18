"use client";

import { useState } from "react";
import styles from "./page.module.css";

type SquareValue = "X" | "O" | null;

type WinnerInfo = {
  winner: SquareValue;
  line: number[];
} | null;

function Square(props: {
  value: SquareValue;
  onClick: () => void;
  isWinning?: boolean;
  disabled?: boolean;
}) {
  const { value, onClick, isWinning, disabled } = props;

  const className = isWinning
    ? `${styles.square} ${styles.squareWinner}`
    : styles.square;

  return (
    <button 
      className={className} 
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

function calculateWinner(squares: SquareValue[]): WinnerInfo {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }

  return null;
}

function Game() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const winnerInfo = calculateWinner(squares);
  const winner: SquareValue = winnerInfo ? winnerInfo.winner : null;
  const isDraw: boolean = !winner && squares.every((sq) => sq !== null);
  const gameOver: boolean = winner !== null || isDraw;

  function handleClick(i: number) {
    if (winner || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function renderSquare(i: number) {
    const isWinning =
      winnerInfo !== null ? winnerInfo.line.includes(i) : false;
    const isDisabled = winner !== null || isDraw || squares[i] !== null;

    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => handleClick(i)}
        isWinning={isWinning}
        disabled={isDisabled}
      />
    );
  }

  let status: string;
  if (winner) {
    status = `🎉 Winner: ${winner} 🎉`;
  } else if (isDraw) {
    status = "🤝 It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const statusClassName = winner
    ? `${styles.status} ${styles.winnerStatus}`
    : isDraw
    ? `${styles.status} ${styles.drawStatus}`
    : styles.status;

  return (
    <div className={styles.game}>
      <div className={statusClassName}>{status}</div>

      <div className={styles.board}>
        <div className={styles.boardRow}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      <button className={styles.resetButton} onClick={handleReset}>
        🔄 New Game
      </button>
    </div>
  );
}

export default function TicTacToePage(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Tic-Tac-Toe</h1>
      <Game />
    </main>
  );
}
