import React, { useState, useEffect, useRef } from 'react';

// 7×7 memory grid — player must reproduce a 7-cell lit sequence
const GRID_SIZE = 7;
const SEQ_LENGTH = 7;
const LIGHT_DURATION = 600;

function genSequence() {
  const cells = [];
  while (cells.length < SEQ_LENGTH) {
    const idx = Math.floor(Math.random() * GRID_SIZE * GRID_SIZE);
    if (!cells.includes(idx)) cells.push(idx);
  }
  return cells;
}

const MinigameMemory = ({ onSuccess, onFail }) => {
  const [phase, setPhase] = useState('watching'); // watching | input | locked
  const [sequence, setSequence] = useState([]);
  const [litCell, setLitCell] = useState(null);
  const [playerInput, setPlayerInput] = useState([]);
  const [lockout, setLockout] = useState(0);
  const lockRef = useRef(null);

  useEffect(() => {
    const seq = genSequence();
    setSequence(seq);
    let i = 0;
    const show = () => {
      if (i < seq.length) {
        setLitCell(seq[i]);
        setTimeout(() => { setLitCell(null); }, LIGHT_DURATION - 100);
        i++;
        setTimeout(show, LIGHT_DURATION);
      } else {
        setPhase('input');
      }
    };
    setTimeout(show, 500);
  }, []);

  useEffect(() => {
    if (lockout > 0) {
      lockRef.current = setInterval(() => {
        setLockout(prev => {
          if (prev <= 1) { clearInterval(lockRef.current); setPhase('input'); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(lockRef.current);
  }, [lockout]);

  const handleCellClick = (idx) => {
    if (phase !== 'input') return;
    const next = [...playerInput, idx];
    setPlayerInput(next);

    if (next[next.length - 1] !== sequence[next.length - 1]) {
      // wrong
      setPlayerInput([]);
      setPhase('locked');
      setLockout(30);
      onFail && onFail();
      return;
    }

    if (next.length === SEQ_LENGTH) {
      onSuccess && onSuccess();
    }
  };

  const coordLabel = (idx) => {
    const col = String.fromCharCode(65 + (idx % GRID_SIZE));
    const row = Math.floor(idx / GRID_SIZE) + 1;
    return `${col}${row}`;
  };

  return (
    <div style={{ fontFamily: 'Share Tech Mono, monospace', color: '#FF6666' }}>
      <div style={{ marginBottom: '0.5rem', fontSize: '0.75rem', color: '#CC0000' }}>
        {phase === 'watching' && '>> MEMORIZE THE SEQUENCE...'}
        {phase === 'input' && `>> REPRODUCE THE SEQUENCE — ${SEQ_LENGTH - playerInput.length} CELLS REMAINING`}
        {phase === 'locked' && `>> SEQUENCE MISMATCH. LOCKOUT: ${lockout}s`}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, gap: '3px', maxWidth: '320px' }}>
        {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, idx) => {
          const isLit = litCell === idx;
          const inputIndex = playerInput.indexOf(idx);
          const correctSoFar = inputIndex !== -1 && sequence[inputIndex] === idx;
          return (
            <div
              key={idx}
              onClick={() => handleCellClick(idx)}
              className={`mem-cell${isLit ? ' lit' : ''}${correctSoFar ? ' selected-ok' : ''}`}
              style={{ fontSize: '0.5rem', userSelect: 'none' }}
            >
              {coordLabel(idx)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MinigameMemory;
