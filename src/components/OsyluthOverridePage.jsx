import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import OverrideConsole from './OverrideConsole';
import '../styles/override.css';

const ASCII_EYE = `\u2800\u2800\u2800\u2800\u2800\u2800\u28c0\u2800\u2800\u2800\u2800\u2800\u2800\u28e0\u28c6\u2800\u2800\u2800\u2800\u2800\u2800\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2800\u2818\u28f7\u28c4\u2800\u2800\u2800\u2800\u28be\u28f7\u2800\u2800\u2800\u2800\u2840\u28f7\u281e\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28bf\u28ff\u281f\u2800\u2800\u2800\u2809\u2809\u2801\u2800\u2800\u2810\u281f\u2887\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2840\u2840\u28e0\u28e4\u28f6\u28f6\u28f6\u28e4\u28e0\u2840\u2800\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2840\u28e4\u28f6\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28f7\u28e6\u28c4\u2800\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u28e0\u28e6\u28ff\u28ff\u2887\u28bf\u28ff\u28ff\u2887\u280b\u2809\u2800\u2800\u2809\u2819\u28bf\u28ff\u28ff\u2887\u28bf\u28ff\u28ff\u28f6\u2801\u2800\u2800\u2800
\u2800\u2840\u28bc\u28ff\u28ff\u281f\u2801\u2840\u28ff\u28ff\u280f\u2800\u2800\u2840\u28e4\u28e4\u2801\u2800\u2800\u28bf\u28ff\u28ff\u2801\u2819\u28bf\u28ff\u28ff\u28f6\u2800\u2800
\u28e0\u28ff\u28ff\u2887\u281f\u2801\u2800\u2800\u28b8\u28ff\u28ff\u2800\u2800\u2800\u28bf\u28ff\u28ff\u281f\u2800\u2800\u2818\u28ff\u28ff\u2887\u2800\u2800\u2819\u28ff\u28ff\u2887
\u2818\u281b\u28ff\u28ff\u28f6\u28c4\u2800\u2800\u281c\u28ff\u28ff\u28c6\u2800\u2800\u2800\u2809\u2809\u2800\u2800\u2800\u28b8\u28ff\u28ff\u281f\u2840\u28e4\u28bc\u28ff\u28ff\u281f
\u2800\u2800\u2818\u281b\u28ff\u28ff\u28ff\u28f6\u28ff\u28ff\u28ff\u28f6\u28c4\u2800\u2800\u2800\u2840\u28e4\u28bc\u28bc\u28ff\u28ff\u28ff\u28be\u28ff\u28ff\u2887\u281b\u2801\u2800
\u2800\u2800\u2800\u2800\u2800\u2819\u281b\u28bf\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u281f\u281b\u2801\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2818\u2809\u281b\u281b\u281f\u281f\u281f\u281f\u281f\u281f\u281b\u281b\u2809\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28b0\u28f7\u28e6\u2800\u2800\u2800\u2840\u2840\u2800\u2840\u2800\u2800\u2834\u28be\u2887\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28b8\u281f\u2801\u2800\u2800\u2800\u2818\u28ff\u2887\u2800\u2800\u2800\u2800\u2819\u28b7\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800
\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u281b\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800`;

const ROOMS = [
  'ENTRANCE HALL', 'CUSTODIANS ROOM', 'STUDY HALL', 'TOILETS',
  'CUSTODIAL CLOSET', 'SECRET STAIRCASE', 'FACULTY BATHROOM', 'FACULTY ROOM',
  'STORAGE', 'RESTRICTED SECTION', 'STAIRWELL - EAST', 'ROYAL LIBRARY',
  'STAIRWELL - WEST', 'READING LOUNGE', 'SCRIBE CHAMBER A', 'SCRIBE CHAMBER B',
  'DRINKING HALL', 'DINING HALL',
];

const STATUS_CYCLE = ['CLEAR', 'OCCUPIED', 'LOCKED', 'COMPROMISED'];

const BOOT_LINES = [
  'CONNECTING TO AAVL SECURE NODE...',
  'ENCRYPTION: AES-2048 ██████████ OK',
  'AUTHENTICATING OPERATOR........... OK',
  'DESIGNATION: HERIOT, OSYLUTH',
  'CLEARANCE: OMEGA-7',
  'LOADING FACILITY GRID: LEVEL 1...',
  '18 ZONES MAPPED.',
  'ALL SYSTEMS NOMINAL.',
  '',
  'WELCOME, MASTER OSYLUTH.',
];

const fmtTime = (s) => {
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `${h}:${m}:${sec}`;
};

const OsyluthOverridePage = () => {
  const { logout } = useAuth();
  const [bootDone, setBootDone] = useState(false);
  const [showFlash, setShowFlash] = useState(true);
  const [bootLines, setBootLines] = useState([]);
  const [showPanel, setShowPanel] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [facilityState, setFacilityState] = useState({});
  const [notes, setNotes] = useState({});
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const sessionStart = useRef(Date.now());
  const flickerRef = useRef(null);
  const [isFlickering, setIsFlickering] = useState(false);

  // Boot flash
  useEffect(() => {
    setTimeout(() => setShowFlash(false), 1500);
  }, []);

  // Typewriter boot sequence
  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let currentLine = '';
    const tick = () => {
      if (lineIdx >= BOOT_LINES.length) { setBootDone(true); return; }
      const target = BOOT_LINES[lineIdx];
      if (charIdx <= target.length) {
        currentLine = target.substring(0, charIdx);
        setBootLines(prev => {
          const next = [...prev];
          next[lineIdx] = currentLine;
          return next;
        });
        charIdx++;
        setTimeout(tick, charIdx === target.length + 1 ? 320 : 40);
      } else {
        lineIdx++;
        charIdx = 0;
        setTimeout(tick, 60);
      }
    };
    setTimeout(tick, 600);
  }, []);

  // Session timer
  useEffect(() => {
    const t = setInterval(() => setSessionSeconds(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  // Random flicker
  useEffect(() => {
    const schedule = () => {
      const delay = 45000 + Math.random() * 45000;
      flickerRef.current = setTimeout(() => {
        setIsFlickering(true);
        setTimeout(() => setIsFlickering(false), 200);
        schedule();
      }, delay);
    };
    schedule();
    return () => clearTimeout(flickerRef.current);
  }, []);

  const cycleStatus = (idx) => {
    setFacilityState(prev => {
      const cur = prev[idx]?.status || 'CLEAR';
      const nextIdx = (STATUS_CYCLE.indexOf(cur) + 1) % STATUS_CYCLE.length;
      return { ...prev, [idx]: { ...prev[idx], status: STATUS_CYCLE[nextIdx] } };
    });
  };

  const roomStatus = (idx) => facilityState[idx]?.status || 'CLEAR';

  if (!bootDone) {
    return (
      <div className="override-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        {showFlash && <div className="boot-flash" />}
        <div style={{ width: '100%', maxWidth: '600px', padding: '2rem' }}>
          <div className="ascii-eye ascii-eye-pulse" style={{ marginBottom: '1.5rem' }}>{ASCII_EYE}</div>
          <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.85rem', color: '#CC0000' }}>
            {bootLines.map((line, i) => (
              <div key={i} style={{ marginBottom: '0.15rem' }}>
                {line}{i === bootLines.length - 1 && <span className="red-cursor" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!showPanel) {
    return (
      <div className="override-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ width: '100%', maxWidth: '560px', padding: '2rem', textAlign: 'center' }}>
          <div className="ascii-eye ascii-eye-pulse" style={{ marginBottom: '1rem' }}>{ASCII_EYE}</div>
          <div style={{ color: '#8B0000', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '2rem' }}>
            [ MASTER NODE ACTIVE — OSYLUTH ]
          </div>
          <button className="override-btn" onClick={() => setShowPanel(true)}>
            [ MASTER OVERRIDE — SITE AAVL ]
          </button>
          <div style={{ marginTop: '0.75rem', fontSize: '0.65rem', color: '#440000' }}>
            SESSION ACTIVE: {fmtTime(sessionSeconds)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`override-root${isFlickering ? ' override-flicker' : ''}`} style={{ minHeight: '100vh', paddingBottom: '2rem' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem', borderBottom: '1px solid #330000', background: '#0a0000' }}>
        <div style={{ color: '#CC0000', fontSize: '0.8rem', letterSpacing: '0.15em' }}>AAVL MASTER NODE // HERIOT, OSYLUTH // OMEGA-7</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ color: '#660000', fontSize: '0.75rem' }}>SESSION ACTIVE: {fmtTime(sessionSeconds)}</span>
          <button onClick={logout} style={{ background: 'none', border: '1px solid #330000', color: '#660000', cursor: 'pointer', fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>DISCONNECT</button>
        </div>
      </div>

      {/* Main area */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '0', height: 'calc(100vh - 2.8rem - 1.6rem)' }}>

        {/* Left — Location list */}
        <div style={{ borderRight: '1px solid #330000', overflowY: 'auto', background: '#060000' }}>
          <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.65rem', color: '#440000', borderBottom: '1px solid #1a0000', letterSpacing: '0.1em' }}>
            LEVEL 1 — AAVL FACILITY
          </div>
          {ROOMS.map((room, i) => {
            const st = roomStatus(i);
            return (
              <div
                key={i}
                className={`location-row${selectedRoom === i ? ' selected' : ''}${st === 'DARK' ? ' dark-zone' : ''}`}
                onClick={() => setSelectedRoom(i)}
              >
                <span style={{ color: '#440000', marginRight: '0.4rem' }}>{String(i + 1).padStart(2, '0')}.</span>
                {room}
                <span className={`status-badge status-${st}`} style={{ float: 'right', fontSize: '0.6rem' }}>{st}</span>
              </div>
            );
          })}
        </div>

        {/* Right — Detail + Console */}
        <div style={{ overflowY: 'auto', padding: '1rem' }}>
          {selectedRoom !== null ? (
            <div style={{ marginBottom: '1.5rem' }}>
              {/* Room header */}
              <div style={{ fontSize: '1.1rem', color: '#FF3333', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>
                ZONE {selectedRoom + 1} — {ROOMS[selectedRoom]}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#8B0000' }}>STATUS:</span>
                <span
                  className={`status-badge status-${roomStatus(selectedRoom)}`}
                  onClick={() => cycleStatus(selectedRoom)}
                  title="Click to cycle status"
                >
                  {roomStatus(selectedRoom)}
                </span>
                <span style={{ fontSize: '0.6rem', color: '#440000' }}>[ click to cycle ]</span>
              </div>
              {/* Notes */}
              <div style={{ fontSize: '0.65rem', color: '#440000', marginBottom: '0.25rem', letterSpacing: '0.1em' }}>
                // OPERATOR FIELD NOTES — LIVE FEED
              </div>
              <textarea
                className="override-notes"
                placeholder="Enter field observations..."
                value={notes[selectedRoom] || ''}
                onChange={e => setNotes(prev => ({ ...prev, [selectedRoom]: e.target.value }))}
              />
            </div>
          ) : (
            <div style={{ color: '#330000', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
              {'// SELECT A ZONE FROM THE LIST'}
            </div>
          )}

          {/* Console */}
          <div style={{ borderTop: '1px solid #1a0000', paddingTop: '1rem' }}>
            <OverrideConsole
              facilityState={facilityState}
              setFacilityState={setFacilityState}
              sessionStart={sessionStart.current}
            />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="override-ticker">
        <div className="override-ticker-inner">
          {'// AAVL SECURE CHANNEL // OPERATOR: HERIOT // CLEARANCE: OMEGA // ALL ACTIONS LOGGED // AAVL SECURE CHANNEL // OPERATOR: HERIOT // CLEARANCE: OMEGA // ALL ACTIONS LOGGED //'}
        </div>
      </div>
    </div>
  );
};

export default OsyluthOverridePage;
