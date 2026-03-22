import React, { useState, useRef, useEffect } from 'react';
import MinigameMemory from './MinigameMemory';
import MinigameBreach from './MinigameBreach';

const ROOMS = [
  'ENTRANCE HALL', 'CUSTODIANS ROOM', 'STUDY HALL', 'TOILETS',
  'CUSTODIAL CLOSET', 'SECRET STAIRCASE', 'FACULTY BATHROOM', 'FACULTY ROOM',
  'STORAGE', 'RESTRICTED SECTION', 'STAIRWELL - EAST', 'ROYAL LIBRARY',
  'STAIRWELL - WEST', 'READING LOUNGE', 'SCRIBE CHAMBER A', 'SCRIBE CHAMBER B',
  'DRINKING HALL', 'DINING HALL',
];

const STATUS_CYCLE = ['CLEAR', 'OCCUPIED', 'LOCKED', 'COMPROMISED'];

const SCAN_RESULTS = [
  'SCAN COMPLETE. NO THERMAL SIGNATURES DETECTED.',
  'SCAN COMPLETE. 1 HEAT SIGNATURE DETECTED. MOVEMENT: SLOW.',
  'SCAN COMPLETE. 2 HEAT SIGNATURES DETECTED. MOVEMENT: RAPID.',
  'SCAN COMPLETE. 3 HEAT SIGNATURES DETECTED. MOVEMENT: ERRATIC.',
  'SCAN ANOMALY — SIGNAL INTERFERENCE. RESULT INCONCLUSIVE.',
];

const fmtTime = (s) => {
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `${h}:${m}:${sec}`;
};

const OverrideConsole = ({ facilityState, setFacilityState, sessionStart, preloadLog }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [minigame, setMinigame] = useState(null); // null | 'memory' | {type:'breach', room}
  const [commsMsg, setCommsMsg] = useState(null);
  const [sessionLog, setSessionLog] = useState(preloadLog || [
    { time: 0, text: 'LOGIN — HERIOT, OSYLUTH' },
  ]);
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [output]);

  const now = () => Math.floor((Date.now() - sessionStart) / 1000);
  const log = (text) => setSessionLog(prev => [...prev, { time: now(), text }]);

  const push = (lines) => setOutput(prev => [...prev, ...lines]);

  const parseRoom = (arg) => {
    const n = parseInt(arg, 10);
    if (!n || n < 1 || n > 18) return null;
    return n;
  };

  const handleCommand = (raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    push([{ cls: 'cmd-line', text: `AAVL://MASTER > ${trimmed}` }]);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    log(trimmed);

    switch (cmd) {
      case '/help':
        push([
          { cls: 'response-line', text: 'AVAILABLE DIRECTIVES:' },
          { cls: 'response-line', text: '  /auth_unlock_key      — Cryptographic key authentication (7×7 memory)' },
          { cls: 'response-line', text: '  /breach [ROOM#]       — Temporarily disengage security door (connect sequence)' },
          { cls: 'response-line', text: '  /scan [ROOM#]         — Run thermal/motion sweep of target location' },
          { cls: 'response-line', text: '  /blackout [ROOM#]     — Cut power to specified zone for 90 seconds' },
          { cls: 'response-line', text: '  /status               — Print current status of all 18 locations' },
          { cls: 'response-line', text: '  /comms [MESSAGE]      — Broadcast encrypted message to all field agents' },
          { cls: 'response-line', text: '  /lockdown             — Engage emergency lockdown — ALL doors seal' },
          { cls: 'response-line', text: '  /lockdown --release   — Disengage lockdown' },
          { cls: 'response-line', text: '  /identify [ROOM#]     — Display known occupants/assets in location' },
          { cls: 'response-line', text: '  /clear [ROOM#]        — Mark location as cleared and safe' },
          { cls: 'response-line', text: '  /log                  — Print full session activity log' },
        ]);
        break;

      case '/status':
        push([{ cls: 'response-line', text: 'CURRENT FACILITY STATUS:' }]);
        ROOMS.forEach((r, i) => {
          const st = facilityState[i]?.status || 'CLEAR';
          push([{ cls: 'response-line', text: `  ${String(i + 1).padStart(2, '0')}. ${r.padEnd(22)} [ ${st} ]` }]);
        });
        break;

      case '/comms': {
        const msg = args.join(' ');
        if (!msg) { push([{ cls: 'error-line', text: '>> USAGE: /comms [MESSAGE]' }]); break; }
        setCommsMsg(msg);
        push([{ cls: 'success-line', text: '>> BROADCAST TRANSMITTED.' }]);
        break;
      }

      case '/lockdown':
        if (args[0] === '--release') {
          setFacilityState(prev => {
            const next = { ...prev };
            Object.keys(next).forEach(k => { if (next[k].status === 'LOCKED') delete next[k]; });
            return next;
          });
          push([{ cls: 'success-line', text: '>> LOCKDOWN DISENGAGED. RESTORING PRIOR STATUSES.' }]);
        } else {
          setFacilityState(prev => {
            const next = { ...prev };
            for (let i = 0; i < 18; i++) next[i] = { ...next[i], status: 'LOCKED' };
            return next;
          });
          push([
            { cls: 'error-line', text: '>> !! FACILITY LOCKDOWN ENGAGED !!' },
            { cls: 'error-line', text: '>> ALL SECURITY DOORS SEALED.' },
            { cls: 'error-line', text: '>> AUTHORIZATION: HERIOT-OMEGA' },
            { cls: 'dim-line', text: '>> TO DISENGAGE: /lockdown --release' },
          ]);
        }
        break;

      case '/scan': {
        const r = parseRoom(args[0]);
        if (!r) { push([{ cls: 'error-line', text: '>> USAGE: /scan [ROOM# 1-18]' }]); break; }
        push([{ cls: 'response-line', text: `>> SCANNING ROOM ${r} — ${ROOMS[r - 1]}...` }]);
        setTimeout(() => {
          const result = SCAN_RESULTS[Math.floor(Math.random() * SCAN_RESULTS.length)];
          push([{ cls: 'success-line', text: `>> ${result}` }]);
        }, 1800);
        break;
      }

      case '/blackout': {
        const r = parseRoom(args[0]);
        if (!r) { push([{ cls: 'error-line', text: '>> USAGE: /blackout [ROOM# 1-18]' }]); break; }
        setFacilityState(prev => ({ ...prev, [r - 1]: { ...prev[r - 1], status: 'DARK' } }));
        push([{ cls: 'error-line', text: `>> CUTTING POWER TO ZONE ${r}. DURATION: 90 SECONDS.` }]);
        setTimeout(() => {
          setFacilityState(prev => {
            const next = { ...prev };
            if (next[r - 1]?.status === 'DARK') delete next[r - 1];
            return next;
          });
          push([{ cls: 'response-line', text: `>> POWER RESTORED TO ZONE ${r}.` }]);
        }, 90000);
        break;
      }

      case '/clear': {
        const r = parseRoom(args[0]);
        if (!r) { push([{ cls: 'error-line', text: '>> USAGE: /clear [ROOM# 1-18]' }]); break; }
        setFacilityState(prev => ({ ...prev, [r - 1]: { ...prev[r - 1], status: 'CLEAR' } }));
        push([{ cls: 'success-line', text: `>> ROOM ${r} — ${ROOMS[r - 1]} — MARKED CLEAR.` }]);
        break;
      }

      case '/identify': {
        const r = parseRoom(args[0]);
        if (!r) { push([{ cls: 'error-line', text: '>> USAGE: /identify [ROOM# 1-18]' }]); break; }
        const st = facilityState[r - 1]?.status || 'CLEAR';
        push([
          { cls: 'response-line', text: `>> ROOM ${r} — ${ROOMS[r - 1]}` },
          { cls: 'response-line', text: `>> STATUS: [ ${st} ]` },
          { cls: 'response-line', text: `>> KNOWN OCCUPANTS: ██████ [CLASSIFIED]` },
        ]);
        break;
      }

      case '/log':
        push([
          { cls: 'response-line', text: 'SESSION LOG — AAVL NODE' },
          { cls: 'dim-line', text: '──────────────────────────────────────' },
        ]);
        sessionLog.forEach(entry => {
          push([{ cls: 'response-line', text: `  [${fmtTime(entry.time)}]  ${entry.text}` }]);
        });
        push([{ cls: 'dim-line', text: '──────────────────────────────────────' }]);
        break;

      case '/auth_unlock_key':
        push([{ cls: 'response-line', text: '>> CRYPTOGRAPHIC SEQUENCE INITIATED. MEMORIZE PATTERN.' }]);
        setMinigame('memory');
        break;

      case '/breach': {
        const r = parseRoom(args[0]);
        if (!r) { push([{ cls: 'error-line', text: '>> USAGE: /breach [ROOM# 1-18]' }]); break; }
        push([{ cls: 'response-line', text: `>> INITIATING DOOR BYPASS — ROOM ${r}. MANUAL CIRCUIT REQUIRED.` }]);
        setMinigame({ type: 'breach', room: r });
        break;
      }

      default:
        push([{ cls: 'error-line', text: '>> COMMAND NOT RECOGNIZED. TYPE /help FOR DIRECTIVE LIST.' }]);
    }
  };

  const onKey = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div>
      {/* Comms overlay */}
      {commsMsg && (
        <div className="comms-overlay" onClick={() => setCommsMsg(null)}>
          <div className="comms-box">
            <div>╔══════════════════════════════════════════╗</div>
            <div>║  ENCRYPTED BROADCAST — ALL CHANNELS      ║</div>
            <div style={{ padding: '0.5rem 0' }}>║  "{commsMsg}"</div>
            <div>╚══════════════════════════════════════════╝</div>
            <div style={{ fontSize: '0.65rem', marginTop: '1rem', color: '#8B0000' }}>[ PRESS ANYWHERE TO DISMISS ]</div>
          </div>
        </div>
      )}

      <div style={{ fontSize: '0.7rem', color: '#660000', marginBottom: '0.25rem' }}>COMMAND INTERFACE</div>
      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #330000', background: '#0f0000', marginBottom: '0.5rem' }}>
        <span style={{ color: '#CC0000', padding: '0.4rem 0.5rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>AAVL://MASTER &gt;</span>
        <input
          className="override-console-input"
          style={{ border: 'none', flexGrow: 1 }}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="type /help"
          spellCheck={false}
          autoComplete="off"
        />
      </div>

      {/* Minigame area */}
      {minigame && (
        <div style={{ border: '1px solid #330000', background: '#0f0000', padding: '1rem', marginBottom: '0.5rem' }}>
          {minigame === 'memory' && (
            <MinigameMemory
              onSuccess={() => {
                push([{ cls: 'success-line', text: '>> AUTH KEY ACCEPTED. OVERRIDE LEVEL: OMEGA ◉ ◉ ◉' }]);
                log('/auth_unlock_key — SUCCESS');
                setMinigame(null);
              }}
              onFail={() => {
                push([{ cls: 'error-line', text: '>> SEQUENCE MISMATCH. LOCKOUT INITIATED — 30 SECONDS.' }]);
                log('/auth_unlock_key — FAILED');
              }}
            />
          )}
          {minigame?.type === 'breach' && (
            <MinigameBreach
              room={minigame.room}
              onSuccess={(r) => {
                log(`/breach ${r} — SUCCESS`);
                setTimeout(() => {
                  push([{ cls: 'error-line', text: `>> DOOR RESEALED — ROOM ${r}.` }]);
                  setMinigame(null);
                }, 45000);
              }}
            />
          )}
          <div
            onClick={() => setMinigame(null)}
            style={{ fontSize: '0.65rem', color: '#660000', marginTop: '0.75rem', cursor: 'pointer' }}
          >
            [ ABORT SEQUENCE ]
          </div>
        </div>
      )}

      <div className="override-console-output" ref={outputRef}>
        {output.length === 0 && <span style={{ color: '#330000' }}>{'// awaiting directives...'}</span>}
        {output.map((line, i) => (
          <div key={i} className={line.cls}>{line.text}</div>
        ))}
      </div>
    </div>
  );
};

export default OverrideConsole;
