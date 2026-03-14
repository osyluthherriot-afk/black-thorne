import React, { useState, useEffect, useCallback } from 'react';

const GRID_SIZE = 9;
const MINE_COUNT = 12;
const MAX_MISTAKES = 3;
const TIME_LIMIT = 105; // 1 minute 45 seconds

const HackingMinigame = ({ onComplete, onCancel }) => {
  const [grid, setGrid] = useState([]);
  const [revealed, setRevealed] = useState(new Set());
  const [mistakes, setMistakes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [gameState, setGameState] = useState('PLAYING'); // 'PLAYING', 'WON', 'LOST'

  const initializeGrid = useCallback(() => {
    // Create empty grid
    let newGrid = Array(GRID_SIZE * GRID_SIZE).fill(0).map((_, i) => ({
      index: i,
      x: i % GRID_SIZE,
      y: Math.floor(i / GRID_SIZE),
      isMine: false,
    }));

    // Place mines
    let minesPlaced = 0;
    while (minesPlaced < MINE_COUNT) {
      const randomIndex = Math.floor(Math.random() * newGrid.length);
      if (!newGrid[randomIndex].isMine) {
        newGrid[randomIndex].isMine = true;
        minesPlaced++;
      }
    }

    setGrid(newGrid);
    setRevealed(new Set());
    setMistakes(0);
    setTimeLeft(TIME_LIMIT);
    setGameState('PLAYING');
  }, []);

  useEffect(() => {
    initializeGrid();
  }, [initializeGrid]);

  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    if (timeLeft <= 0) {
      setGameState('LOST');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const calculateProximity = (index) => {
    const cell = grid[index];
    let minDistance = Infinity;

    grid.forEach(other => {
      if (other.isMine) {
        const dist = Math.sqrt(Math.pow(cell.x - other.x, 2) + Math.pow(cell.y - other.y, 2));
        if (dist < minDistance) minDistance = dist;
      }
    });

    // Close = high percentage. Adjacent is distance 1.
    // Max possible distance in 9x9 is sqrt(8^2 + 8^2) approx 11.3
    // Let's make it 100% if dist < 1.5, and scale down.
    if (minDistance <= 1.5) return 90 + Math.floor(Math.random() * 10);
    if (minDistance > 5) return 5 + Math.floor(Math.random() * 5);
    
    const percentage = Math.max(0, Math.min(100, Math.floor((1 - (minDistance - 1) / 5) * 100)));
    return percentage;
  };

  const handleCellClick = (index) => {
    if (gameState !== 'PLAYING' || revealed.has(index)) return;

    if (grid[index].isMine) {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setRevealed(prev => new Set([...prev, index]));
      
      if (newMistakes >= MAX_MISTAKES) {
        setGameState('LOST');
      }
    } else {
      const newRevealed = new Set([...revealed, index]);
      setRevealed(newRevealed);

      // Check win condition: all non-mines revealed
      const totalCells = GRID_SIZE * GRID_SIZE;
      if (newRevealed.size === totalCells - MINE_COUNT + Array.from(newRevealed).filter(i => grid[i].isMine).length) {
          // This logic is slightly flawed because we include mistakes in revealed.
          // Correct win: All non-mines are revealed.
          const nonMines = grid.filter(c => !c.isMine).map(c => c.index);
          const allNonMinesRevealed = nonMines.every(idx => newRevealed.has(idx));
          if (allNonMinesRevealed) {
            setGameState('WON');
            setTimeout(() => onComplete(), 2000);
          }
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100] font-mono p-4">
      <div className="max-w-xl w-full border-2 border-[#d4af37] bg-gray-950 p-6 relative overflow-hidden shadow-[0_0_50px_rgba(139,0,0,0.3)]">
        <div className="absolute top-0 left-0 w-full h-1 bg-red-900 animate-pulse"></div>
        
        <div className="flex justify-between items-start mb-6 border-b border-gray-800 pb-4">
          <div>
            <h2 className="text-[#d4af37] text-xl font-bold tracking-[0.2em] uppercase">Auth_Break Sequence</h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Unauthorized Access Detected - Bypass Active</p>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
              {Math.floor(timeLeft / 60).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
            <div className="text-[#8b0000] text-xs font-bold">
              Mistakes: {mistakes}/{MAX_MISTAKES}
            </div>
          </div>
        </div>

        <div 
          className="gap-1 aspect-square mb-6 border border-gray-800 p-1 bg-gray-900" 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(9, minmax(0, 1fr))' }}
        >
          {grid.map((cell, i) => {
            const isRevealed = revealed.has(i);
            const proximity = isRevealed && !cell.isMine ? calculateProximity(i) : null;
            
            return (
              <button
                key={i}
                onClick={() => handleCellClick(i)}
                disabled={gameState !== 'PLAYING' || isRevealed}
                className={`
                  relative flex items-center justify-center text-[10px] sm:text-xs font-bold 
                  transition-all duration-200 border border-transparent
                  ${!isRevealed ? 'bg-gray-800 hover:bg-gray-700' : ''}
                  ${isRevealed && cell.isMine ? 'bg-red-900 animate-flash text-white' : ''}
                  ${isRevealed && !cell.isMine ? 'bg-black text-[#d4af37] border-gray-800' : ''}
                  ${gameState !== 'PLAYING' ? 'cursor-default' : 'cursor-crosshair'}
                `}
              >
                {isRevealed && cell.isMine && '!!'}
                {isRevealed && !cell.isMine && `${proximity}%`}
                {!isRevealed && gameState === 'PLAYING' && (
                  <div className="absolute inset-0 opacity-10 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-1 h-1 bg-[#d4af37] rounded-full"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="border-t border-gray-800 pt-4 flex flex-col gap-4">
          <div className="text-[10px] text-gray-400 uppercase leading-relaxed text-center">
            <span className="text-[#d4af37] font-bold">Instruction:</span> Identify and bypass security nodes. Each square reveals proximity to lethal modules (High % = Near). Avoid modules. 3 failures = lockdown.
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={initializeGrid}
              className="flex-1 bg-gray-900 border border-gray-700 text-gray-400 py-2 text-xs hover:bg-gray-800 hover:text-white transition-colors"
            >
              RESET SEQUENCE
            </button>
            <button 
              onClick={onCancel}
              className="flex-1 bg-red-950 bg-opacity-20 border border-red-900 text-red-500 py-2 text-xs hover:bg-red-900 hover:text-white transition-colors"
            >
              ABORT MISSION
            </button>
          </div>
        </div>

        {gameState === 'LOST' && (
          <div className="absolute inset-0 bg-red-950 bg-opacity-90 flex items-center justify-center flex-col p-6 z-10 animate-fade-in">
             <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">FATAL ERROR</h3>
             <p className="text-sm text-white mb-6 tracking-widest uppercase">System Lockdown Engaged</p>
             <button onClick={initializeGrid} className="bg-white text-red-950 px-8 py-2 font-bold hover:bg-gray-200 uppercase tracking-widest text-sm">Retry Connection</button>
          </div>
        )}

        {gameState === 'WON' && (
          <div className="absolute inset-0 bg-green-950 bg-opacity-90 flex items-center justify-center flex-col p-6 z-10 animate-fade-in">
             <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">OVERRIDE SUCCESS</h3>
             <p className="text-sm text-white mb-6 tracking-widest uppercase text-center">Security Subsystems Disabled. Decrypting Archive...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HackingMinigame;
