import React, { useState, useEffect, useRef } from 'react';

// 12-dot connect-the-dots puzzle for /breach
const DOT_COUNT = 12;

// Fixed dot positions on a 300×300 canvas (percentages)
const DOT_POSITIONS = [
  [50, 5], [80, 18], [95, 45], [85, 72],
  [65, 88], [35, 88], [15, 72], [5, 45],
  [20, 18], [50, 32], [68, 60], [32, 60],
];

const MinigameBreach = ({ room, onSuccess }) => {
  const [visited, setVisited] = useState([]);
  const [countdown, setCountdown] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (countdown === null) return;
    if (countdown <= 0) return;
    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) { clearInterval(timerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [countdown !== null && countdown > 0]);

  const handleDot = (i) => {
    if (countdown !== null) return;
    const nextExpected = visited.length;
    if (i !== nextExpected) return; // must click in order
    const next = [...visited, i];
    setVisited(next);
    if (next.length === DOT_COUNT) {
      setCountdown(45);
      onSuccess && onSuccess(room);
    }
  };

  if (countdown !== null) {
    return (
      <div style={{ color: '#FF6666', fontFamily: 'Share Tech Mono, monospace', fontSize: '0.85rem' }}>
        <div style={{ color: '#44FF88', marginBottom: '0.5rem' }}>
          {'>> DOOR BYPASS ACTIVE — ROOM ' + room}
        </div>
        <div style={{ fontSize: '1.5rem', color: countdown > 10 ? '#FF6666' : '#FF2222' }}>
          {countdown > 0 ? `${countdown}s REMAINING` : '>> DOOR RESEALED.'}
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Share Tech Mono, monospace', color: '#FF6666' }}>
      <div style={{ fontSize: '0.75rem', color: '#CC0000', marginBottom: '0.5rem' }}>
        {'>> ROOM ' + room + ' — CLICK NODES 1→' + DOT_COUNT + ' IN ORDER'}
      </div>
      <div style={{ position: 'relative', width: '220px', height: '220px', margin: '0 auto' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {visited.map((v, i) => {
            if (i === visited.length - 1) return null;
            const [x1, y1] = DOT_POSITIONS[v];
            const [x2, y2] = DOT_POSITIONS[visited[i + 1]];
            return (
              <line key={i}
                x1={`${x1}%`} y1={`${y1}%`}
                x2={`${x2}%`} y2={`${y2}%`}
                stroke="#CC0000" strokeWidth="2"
              />
            );
          })}
        </svg>
        {DOT_POSITIONS.map(([x, y], i) => (
          <div
            key={i}
            onClick={() => handleDot(i)}
            className={`breach-dot${visited.includes(i) ? ' visited' : ''}${visited.length === i ? ' current' : ''}`}
            style={{
              position: 'absolute',
              left: `calc(${x}% - 1.25rem)`,
              top: `calc(${y}% - 1.25rem)`,
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinigameBreach;
