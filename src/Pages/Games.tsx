import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Crown,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Trophy,
  Users,
  Clock,
  Star,
  Play,
  Info,
  RotateCcw,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

// Player colors and their properties
const PLAYER_COLORS = {
  red: {
    bg: "bg-red-500",
    border: "border-red-400",
    text: "text-red-500",
    home: "bg-red-600",
    path: "bg-red-200",
  },
  green: {
    bg: "bg-green-500",
    border: "border-green-400",
    text: "text-green-500",
    home: "bg-green-600",
    path: "bg-green-200",
  },
  yellow: {
    bg: "bg-yellow-500",
    border: "border-yellow-400",
    text: "text-yellow-500",
    home: "bg-yellow-500",
    path: "bg-yellow-200",
  },
  blue: {
    bg: "bg-blue-500",
    border: "border-blue-400",
    text: "text-blue-500",
    home: "bg-blue-600",
    path: "bg-blue-200",
  },
};

type PlayerColor = keyof typeof PLAYER_COLORS;

interface Piece {
  id: number;
  color: PlayerColor;
  position: number; // -1 = home, 0-56 = on board, 57 = finished
}

// Chess piece components
const ChessBoard: React.FC = () => {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [board, setBoard] = useState(() => initializeChessBoard());
  const [currentPlayer, setCurrentPlayer] = useState<"white" | "black">(
    "white",
  );

  function initializeChessBoard() {
    const pieces: Record<string, string> = {
      a8: "♜",
      b8: "♞",
      c8: "♝",
      d8: "♛",
      e8: "♚",
      f8: "♝",
      g8: "♞",
      h8: "♜",
      a7: "♟",
      b7: "♟",
      c7: "♟",
      d7: "♟",
      e7: "♟",
      f7: "♟",
      g7: "♟",
      h7: "♟",
      a2: "♙",
      b2: "♙",
      c2: "♙",
      d2: "♙",
      e2: "♙",
      f2: "♙",
      g2: "♙",
      h2: "♙",
      a1: "♖",
      b1: "♘",
      c1: "♗",
      d1: "♕",
      e1: "♔",
      f1: "♗",
      g1: "♘",
      h1: "♖",
    };
    return pieces;
  }

  const isWhitePiece = (piece: string) =>
    ["♔", "♕", "♖", "♗", "♘", "♙"].includes(piece);

  const handleSquareClick = (square: string) => {
    if (selectedSquare === square) {
      setSelectedSquare(null);
    } else if (selectedSquare && board[selectedSquare]) {
      // Move piece
      const piece = board[selectedSquare];
      const isWhite = isWhitePiece(piece);

      if (
        (currentPlayer === "white" && isWhite) ||
        (currentPlayer === "black" && !isWhite)
      ) {
        setBoard((prev) => {
          const newBoard = { ...prev };
          newBoard[square] = newBoard[selectedSquare];
          delete newBoard[selectedSquare];
          return newBoard;
        });
        setCurrentPlayer((prev) => (prev === "white" ? "black" : "white"));
        setSelectedSquare(null);
      }
    } else if (board[square]) {
      const piece = board[square];
      const isWhite = isWhitePiece(piece);
      if (
        (currentPlayer === "white" && isWhite) ||
        (currentPlayer === "black" && !isWhite)
      ) {
        setSelectedSquare(square);
      } else {
        toast.error(`It's ${currentPlayer}'s turn!`);
      }
    }
  };

  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Current Player Indicator */}
      <div
        className={`px-6 py-2 rounded-full font-bold text-lg shadow-lg ${
          currentPlayer === "white"
            ? "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800"
            : "bg-gradient-to-r from-gray-700 to-gray-900 text-white"
        }`}
      >
        {currentPlayer === "white" ? "⚪" : "⚫"} {currentPlayer.toUpperCase()}
        's Turn
      </div>

      <div className="relative">
        {/* Board */}
        <div className="grid grid-cols-8 border-4 border-amber-900 rounded-lg overflow-hidden shadow-2xl">
          {ranks.map((rank, rankIndex) =>
            files.map((file, fileIndex) => {
              const square = `${file}${rank}`;
              const isLight = (rankIndex + fileIndex) % 2 === 0;
              const isSelected = selectedSquare === square;
              return (
                <div
                  key={square}
                  onClick={() => handleSquareClick(square)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center cursor-pointer transition-all
                    ${isLight ? "bg-amber-100" : "bg-amber-700"}
                    ${isSelected ? "ring-4 ring-yellow-400 ring-inset animate-pulse" : ""}
                    hover:brightness-110`}
                >
                  <span
                    className={`text-2xl sm:text-3xl md:text-4xl select-none ${
                      board[square] && isWhitePiece(board[square])
                        ? "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                        : "text-gray-900"
                    }`}
                  >
                    {board[square]}
                  </span>
                </div>
              );
            }),
          )}
        </div>
        {/* File labels */}
        <div className="flex justify-around mt-2">
          {files.map((f) => (
            <span
              key={f}
              className="text-xs sm:text-sm text-muted-foreground font-medium w-10 sm:w-12 md:w-14 text-center"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Ludo Board Component - Full Implementation
const LudoBoard: React.FC<{ playerCount: 2 | 4 }> = ({ playerCount }) => {
  const activePlayers: PlayerColor[] =
    playerCount === 2 ? ["red", "blue"] : ["red", "green", "yellow", "blue"];

  const [diceValue, setDiceValue] = useState<number>(1);
  const [isRolling, setIsRolling] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<PlayerColor>(
    activePlayers[0],
  );
  const [pieces, setPieces] = useState<Piece[]>(() => {
    const initialPieces: Piece[] = [];
    activePlayers.forEach((color) => {
      for (let i = 0; i < 4; i++) {
        initialPieces.push({ id: i, color, position: -1 });
      }
    });
    return initialPieces;
  });
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);
  const [hasRolled, setHasRolled] = useState(false);
  const [winner, setWinner] = useState<PlayerColor | null>(null);

  const DiceIcon =
    [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6][diceValue - 1] || Dice1;

  const rollDice = () => {
    if (isRolling || hasRolled) return;

    setIsRolling(true);
    let rolls = 0;
    const interval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      rolls++;
      if (rolls > 15) {
        clearInterval(interval);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(finalValue);
        setIsRolling(false);
        setHasRolled(true);

        // Check if player can move
        const playerPieces = pieces.filter((p) => p.color === currentPlayer);
        const canMove = playerPieces.some((p) => {
          if (p.position === -1 && finalValue === 6) return true;
          if (p.position >= 0 && p.position < 57) return true;
          return false;
        });

        if (!canMove) {
          toast.info(`${currentPlayer.toUpperCase()} has no valid moves!`);
          setTimeout(() => nextTurn(finalValue), 1000);
        }
      }
    }, 80);
  };

  const nextTurn = (lastRoll?: number) => {
    const roll = lastRoll ?? diceValue;

    // If rolled 6, same player goes again
    if (roll === 6) {
      setHasRolled(false);
      toast.success(`${currentPlayer.toUpperCase()} rolled 6! Roll again!`);
      return;
    }

    const currentIndex = activePlayers.indexOf(currentPlayer);
    const nextIndex = (currentIndex + 1) % activePlayers.length;
    setCurrentPlayer(activePlayers[nextIndex]);
    setHasRolled(false);
    setSelectedPiece(null);
  };

  const movePiece = (piece: Piece) => {
    if (!hasRolled || piece.color !== currentPlayer) return;

    let newPosition = piece.position;

    if (piece.position === -1) {
      // Can only come out on 6
      if (diceValue !== 6) {
        toast.error("Roll 6 to bring piece out!");
        return;
      }
      newPosition = 0;
    } else {
      newPosition = piece.position + diceValue;
      if (newPosition > 57) {
        toast.error("Need exact roll to finish!");
        return;
      }
    }

    setPieces((prev) =>
      prev.map((p) =>
        p.id === piece.id && p.color === piece.color
          ? { ...p, position: newPosition }
          : p,
      ),
    );

    // Check for win
    setTimeout(() => {
      const updatedPieces = pieces.map((p) =>
        p.id === piece.id && p.color === piece.color
          ? { ...p, position: newPosition }
          : p,
      );
      const playerPieces = updatedPieces.filter(
        (p) => p.color === currentPlayer,
      );
      if (playerPieces.every((p) => p.position === 57)) {
        setWinner(currentPlayer);
        toast.success(`🎉 ${currentPlayer.toUpperCase()} WINS! 🎉`);
        return;
      }
      nextTurn();
    }, 300);
  };

  const resetGame = () => {
    setPieces(() => {
      const initialPieces: Piece[] = [];
      activePlayers.forEach((color) => {
        for (let i = 0; i < 4; i++) {
          initialPieces.push({ id: i, color, position: -1 });
        }
      });
      return initialPieces;
    });
    setDiceValue(1);
    setCurrentPlayer(activePlayers[0]);
    setHasRolled(false);
    setSelectedPiece(null);
    setWinner(null);
  };

  // Render a home quadrant
  const HomeQuadrant: React.FC<{
    color: PlayerColor;
    position: "tl" | "tr" | "bl" | "br";
  }> = ({ color, position }) => {
    const isActive = activePlayers.includes(color);
    const homePieces = pieces.filter(
      (p) => p.color === color && p.position === -1,
    );

    const positionClasses = {
      tl: "rounded-tl-xl",
      tr: "rounded-tr-xl",
      bl: "rounded-bl-xl",
      br: "rounded-br-xl",
    };

    return (
      <div
        className={`w-24 h-24 sm:w-28 sm:h-28 ${PLAYER_COLORS[color].home} ${positionClasses[position]} p-2 flex items-center justify-center ${!isActive ? "opacity-30" : ""}`}
      >
        <div className="bg-white/90 rounded-lg p-2 grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((i) => {
            const piece = homePieces[i];
            const canClick =
              isActive &&
              piece &&
              hasRolled &&
              currentPlayer === color &&
              diceValue === 6;
            return (
              <div
                key={i}
                onClick={() => piece && canClick && movePiece(piece)}
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all
                  ${piece ? `${PLAYER_COLORS[color].bg} ${PLAYER_COLORS[color].border} shadow-lg` : "bg-gray-200 border-gray-300"}
                  ${canClick ? "cursor-pointer ring-2 ring-white animate-pulse hover:scale-110" : ""}
                `}
              >
                {piece && (
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/60 rounded-full" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render path cells
  const PathRow: React.FC<{
    direction: "horizontal" | "vertical";
    position: "top" | "bottom" | "left" | "right";
  }> = ({ direction, position }) => {
    const cells = [];
    const getCellColor = (index: number): string => {
      if (position === "top" && index === 1) return PLAYER_COLORS.green.path;
      if (position === "bottom" && index === 1)
        return PLAYER_COLORS.yellow.path;
      if (position === "left" && index === 1) return PLAYER_COLORS.red.path;
      if (position === "right" && index === 1) return PLAYER_COLORS.blue.path;
      return "bg-white";
    };

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 6; j++) {
        const isColoredPath =
          (direction === "horizontal" && i === 1) ||
          (direction === "vertical" && i === 1);
        cells.push(
          <div
            key={`${i}-${j}`}
            className={`w-4 h-4 sm:w-5 sm:h-5 border border-gray-300 ${getCellColor(i)} flex items-center justify-center`}
          />,
        );
      }
    }

    return (
      <div
        className={`grid ${direction === "horizontal" ? "grid-cols-6 grid-rows-3" : "grid-cols-3 grid-rows-6"}`}
      >
        {cells}
      </div>
    );
  };

  // Center triangle finish area
  const CenterFinish: React.FC = () => (
    <div className="w-24 h-24 sm:w-28 sm:h-28 relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="absolute inset-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,50 0,0 50,0" fill="#ef4444" />
          <polygon points="50,50 50,0 100,0 100,50" fill="#22c55e" />
          <polygon points="50,50 100,50 100,100 50,100" fill="#3b82f6" />
          <polygon points="50,50 50,100 0,100 0,50" fill="#eab308" />
        </svg>
      </div>
      <Trophy className="w-8 h-8 text-white drop-shadow-lg z-10" />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Winner Overlay */}
      {winner && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 p-8 rounded-2xl text-center shadow-2xl">
            <Trophy className="w-20 h-20 mx-auto text-white mb-4 animate-bounce" />
            <h2 className="text-4xl font-bold text-white mb-4">
              {winner.toUpperCase()} WINS!
            </h2>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-white text-gray-800 rounded-xl font-bold hover:bg-gray-100 transition-all"
            >
              <RotateCcw className="inline w-5 h-5 mr-2" />
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* Player Turn Indicator */}
      <div className="flex items-center gap-4">
        {activePlayers.map((color) => (
          <div
            key={color}
            className={`px-4 py-2 rounded-full font-bold uppercase transition-all ${
              currentPlayer === color
                ? `${PLAYER_COLORS[color].bg} text-white scale-110 shadow-lg ring-4 ring-white/50`
                : "bg-gray-700 text-gray-400"
            }`}
          >
            {color}
          </div>
        ))}
      </div>

      {/* Ludo Board */}
      <div className="grid grid-cols-3 gap-0 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-4 border-gray-600 shadow-2xl relative">
        {/* Row 1 */}
        <HomeQuadrant color="red" position="tl" />
        <PathRow direction="vertical" position="top" />
        <HomeQuadrant color="green" position="tr" />

        {/* Row 2 */}
        <PathRow direction="horizontal" position="left" />
        <CenterFinish />
        <PathRow direction="horizontal" position="right" />

        {/* Row 3 */}
        <HomeQuadrant color="yellow" position="bl" />
        <PathRow direction="vertical" position="bottom" />
        <HomeQuadrant color="blue" position="br" />
      </div>

      {/* Dice and Controls */}
      <div className="flex items-center gap-6">
        <button
          onClick={resetGame}
          className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all"
          title="Reset Game"
        >
          <RotateCcw className="w-6 h-6" />
        </button>

        <button
          onClick={rollDice}
          disabled={isRolling || hasRolled || !!winner}
          className={`relative px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all
            ${
              hasRolled
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : `bg-gradient-to-r ${
                    currentPlayer === "red"
                      ? "from-red-500 to-red-600"
                      : currentPlayer === "green"
                        ? "from-green-500 to-green-600"
                        : currentPlayer === "yellow"
                          ? "from-yellow-500 to-yellow-600"
                          : "from-blue-500 to-blue-600"
                  } text-white hover:scale-105`
            }
            ${isRolling ? "animate-pulse" : ""}
          `}
        >
          <Zap className="w-5 h-5 inline mr-2" />
          {isRolling ? "Rolling..." : hasRolled ? "Move a piece" : "Roll Dice"}
        </button>

        {/* Dice Display */}
        <div
          className={`w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl border-4 ${
            PLAYER_COLORS[currentPlayer].border
          } ${isRolling ? "animate-bounce" : ""}`}
        >
          <DiceIcon
            className={`w-12 h-12 ${PLAYER_COLORS[currentPlayer].text}`}
          />
        </div>
      </div>

      {/* Pieces on board indicator */}
      <div className="grid grid-cols-4 gap-4">
        {activePlayers.map((color) => {
          const colorPieces = pieces.filter((p) => p.color === color);
          const onBoard = colorPieces.filter(
            (p) => p.position >= 0 && p.position < 57,
          ).length;
          const finished = colorPieces.filter((p) => p.position === 57).length;

          return (
            <div key={color} className="text-center">
              <div className={`text-sm font-bold ${PLAYER_COLORS[color].text}`}>
                {color.toUpperCase()}
              </div>
              <div className="text-xs text-gray-400">
                Board: {onBoard} | Done: {finished}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Game Card Component
interface GameCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  players: string;
  duration: string;
  difficulty: string;
  gradient: string;
  isSelected: boolean;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  icon,
  players,
  duration,
  difficulty,
  gradient,
  isSelected,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 group
      ${isSelected ? "ring-4 ring-primary scale-105 shadow-2xl" : "hover:scale-102 hover:shadow-xl"}
      ${gradient}`}
  >
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
    <div className="relative p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
          {icon}
        </div>
        {isSelected && (
          <span className="px-3 py-1 bg-white/30 rounded-full text-white text-sm font-medium backdrop-blur-sm animate-pulse">
            Playing
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        <span className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-lg text-white text-xs backdrop-blur-sm">
          <Users className="w-3 h-3" /> {players}
        </span>
        <span className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-lg text-white text-xs backdrop-blur-sm">
          <Clock className="w-3 h-3" /> {duration}
        </span>
        <span className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-lg text-white text-xs backdrop-blur-sm">
          <Star className="w-3 h-3" /> {difficulty}
        </span>
      </div>
    </div>
  </div>
);

const Games: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<"chess" | "ludo" | null>(
    null,
  );
  const [ludoPlayerCount, setLudoPlayerCount] = useState<2 | 4>(2);

  const games = [
    {
      id: "chess" as const,
      title: "Chess",
      description:
        "The classic game of strategy. Challenge your mind with this timeless battle of wits.",
      icon: <Crown className="w-8 h-8 text-white" />,
      players: "2 Players",
      duration: "10-60 min",
      difficulty: "Strategic",
      gradient: "bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900",
    },
    {
      id: "ludo" as const,
      title: "Ludo",
      description:
        "A fun race to the finish! Roll the dice and be the first to get all pieces home.",
      icon: <Dice5 className="w-8 h-8 text-white" />,
      players: "2-4 Players",
      duration: "15-45 min",
      difficulty: "Easy",
      gradient: "bg-gradient-to-br from-purple-600 via-pink-600 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Terminal</span>
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              🎮 Game Zone
            </h1>
            <div className="flex items-center gap-2">
              <button className="p-2 text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5">
                <Info className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Game Selection */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Play className="w-5 h-5 text-primary" />
            Select a Game
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {games.map((game) => (
              <GameCard
                key={game.id}
                {...game}
                isSelected={selectedGame === game.id}
                onClick={() => setSelectedGame(game.id)}
              />
            ))}
          </div>
        </section>

        {/* Ludo Player Count Selector */}
        {selectedGame === "ludo" && (
          <section className="mb-6 animate-fade-in">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-white/10 p-4">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Select Players
              </h3>
              <div className="flex gap-4">
                {[2, 4].map((count) => (
                  <button
                    key={count}
                    onClick={() => setLudoPlayerCount(count as 2 | 4)}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                      ludoPlayerCount === count
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-105 shadow-lg"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {count} Players
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Game Board */}
        {selectedGame && (
          <section className="animate-fade-in">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {selectedGame === "chess" ? "♟️ Chess" : "🎲 Ludo"}
                </h2>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  Change Game
                </button>
              </div>

              <div className="flex justify-center relative">
                {selectedGame === "chess" ? (
                  <ChessBoard />
                ) : (
                  <LudoBoard playerCount={ludoPlayerCount} />
                )}
              </div>

              {/* Game Instructions */}
              <div className="mt-8 p-4 bg-gray-700/30 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  How to Play
                </h3>
                {selectedGame === "chess" ? (
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• White moves first, then players alternate turns</li>
                    <li>
                      • Click on your piece to select it (highlighted with
                      yellow ring)
                    </li>
                    <li>• Click on destination square to move the piece</li>
                    <li>
                      • This is a simplified version - all moves are allowed for
                      demo
                    </li>
                  </ul>
                ) : (
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Click "Roll Dice" on your turn to roll</li>
                    <li>• You need to roll 6 to move a piece out of home</li>
                    <li>• Click on your piece to move it by the dice value</li>
                    <li>• Rolling 6 gives you another turn!</li>
                    <li>• First player to get all 4 pieces to center wins!</li>
                  </ul>
                )}
              </div>
            </div>
          </section>
        )}

        {/* No Game Selected State */}
        {!selectedGame && (
          <section className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 mb-6 animate-pulse">
              <Trophy className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Choose Your Game
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Select a game from above to start playing. Challenge yourself or
              play with friends!
            </p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Games;
