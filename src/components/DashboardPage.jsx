import React, { useState, useMemo } from 'react';
import { LOGS } from '../data/logs';
import { useAuth } from '../context/AuthContext';
import LogEntry from './LogEntry';
import TerminalConsole from './TerminalConsole';
import HackingMinigame from './HackingMinigame';

const DashboardPage = () => {
  const { logout } = useAuth();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('ALL');
  const [filterType, setFilterType] = useState('ALL');
  const [showHacking, setShowHacking] = useState(false);
  const [sessionUnlocked, setSessionUnlocked] = useState(false);
  const [unlockedCategories, setUnlockedCategories] = useState([]);
  
  // Progress simulation
  const operationProgress = sessionUnlocked ? 100 : 87;

  // Filter and sort logic
  const filteredLogs = useMemo(() => {
    let result = [...LOGS];

    // Sub-sort chronological roughly based on DR date strings.
    result.sort((a, b) => {
      const dateA = parseInt(a.date.replace(' DR', ''), 10);
      const dateB = parseInt(b.date.replace(' DR', ''), 10);
      return dateA - dateB;
    });

    if (filterClass !== 'ALL') {
      result = result.filter(log => log.classification.includes(filterClass));
    }
    
    if (filterType === 'KEY') {
      result = result.filter(log => log.keyLog);
    } else if (filterType === 'ROUTINE') {
      result = result.filter(log => !log.keyLog);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(log => 
        log.title.toLowerCase().includes(term) || 
        log.content.toLowerCase().includes(term) ||
        log.operationCode.toLowerCase().includes(term)
      );
    }

    // Only show things if they aren't marked as hidden initially, or if their category is unlocked
    result = result.filter(log => !log.isHidden || unlockedCategories.includes(log.hiddenCategory));

    return result;
  }, [searchTerm, filterClass, filterType, unlockedCategories]);

  const handleCommand = (cmd) => {
    // Obfuscated to prevent simple string searching in JS files
    if (btoa(cmd) === 'L2F1dGhfYnJlYWtfc3RhcnQ=') {
      setShowHacking(true);
    } else if (cmd === '/auth_log_past_9_AAVL') {
      if (!unlockedCategories.includes('NIGHTBRINGER')) setUnlockedCategories(prev => [...prev, 'NIGHTBRINGER']);
      setSearchTerm('NIGHTBRINGER'); // auto-filter for convenience
    } else if (cmd === '/auth_log_past_love') {
      if (!unlockedCategories.includes('LOVE')) setUnlockedCategories(prev => [...prev, 'LOVE']);
      setSearchTerm('Unsent Transmission');
    } else if (cmd === '/auth_log_past_27') {
      if (!unlockedCategories.includes('27')) setUnlockedCategories(prev => [...prev, '27']);
      setSearchTerm('Sanatorium Incident');
    } else if (cmd === '/auth_log_past_devil') {
      if (!unlockedCategories.includes('DEVIL')) setUnlockedCategories(prev => [...prev, 'DEVIL']);
      setSearchTerm("Demon's Fane");
    } else if (cmd === '/auth_log_past_msr') {
      if (!unlockedCategories.includes('MSR')) setUnlockedCategories(prev => [...prev, 'MSR']);
      setSearchTerm('Mass Shadow Ritual');
    }
  };

  const handleHackingSuccess = () => {
    setShowHacking(false);
    setSessionUnlocked(true);
    // You could trigger a sound or a visual flash here
  };

  // Aggregate stats
  const stats = {
    total: LOGS.length,
    visible: filteredLogs.length,
    redactedBytes: sessionUnlocked ? 0 : LOGS.reduce((acc, log) => acc + (log.redactedSections?.length || 0), 0) * 128
  };

  const simplifiedFilters = ['ALL', 'DECLASSIFIED', 'ROUTINE', 'CONFIDENTIAL', 'RESTRICTED', 'TOP SECRET', 'EYES ONLY'];

  return (
    <div className="min-h-screen bg-black text-gray-300 p-2 md:p-6 font-mono selection:bg-red-900 selection:text-white">
      <div className="grain-overlay"></div>
      
      {/* 
          [THREAT_ADVISORY]: Unauthorized bypass possible via SYS_CONSOLE. 
          Auth bypass vector: [ENCODED: L2F1dGhfYnJlYWtfc3RhcnQ=]
          DO NOT LEAVE THIS IN THE FINAL BUILD. - Admin
          P.S: Ensure /auth_log_past_9_AAVL is scrubbed from the historical query cache.
      */}

      <div className="max-w-6xl mx-auto flex flex-col h-full crt-flicker">
        
        {/* Command Header */}
        <header className={`border-2 ${sessionUnlocked ? 'border-green-900 shadow-[0_0_20px_rgba(34,197,94,0.2)]' : 'border-gray-700'} bg-gray-900 bg-opacity-50 p-4 mb-6 relative overflow-hidden transition-all duration-1000`}>
          <div className={`absolute top-0 right-0 w-32 h-32 ${sessionUnlocked ? 'bg-green-900' : 'bg-red-900'} rounded-full blur-[100px] opacity-20 pointer-events-none`}></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-gray-700 pb-4 mb-4">
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold ${sessionUnlocked ? 'text-green-500' : 'text-[#d4af37]'} tracking-widest courier-prime mb-1 transition-colors duration-1000`}>
                BLACK THORNE INTELLIGENCE ARCHIVE
              </h1>
              <p className="text-xs text-gray-500 tracking-wider">
                CURRENT SECURITY LEVEL: {sessionUnlocked ? 'OVERRIDE-G7 (ADM)' : 'THETA-7 (TS/SCI)'} | OPERATOR: CALLIOPE
              </p>
            </div>
            
            <button 
              onClick={logout}
              className="text-xs font-bold border border-red-900 text-red-500 hover:bg-red-900 hover:text-white px-4 py-2 transition-colors uppercase tracking-widest"
            >
              TERMINATE SESSION
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex justify-between text-xs mb-1 font-bold">
                <span className="text-gray-400 tracking-widest uppercase">
                  {sessionUnlocked ? 'DECRYPTION COMPLETE' : 'OPERATION STATUS: RESURRECTION PROTOCOL'}
                </span>
                <span className={sessionUnlocked ? 'text-green-500' : 'text-[#d4af37]'}>{operationProgress}%</span>
              </div>
              <div className="h-4 bg-gray-800 border border-gray-600 w-full overflow-hidden">
                <div 
                  className={`h-full ${sessionUnlocked ? 'bg-green-600' : 'bg-gradient-to-r from-red-900 to-red-600 animate-pulse-glow'} transition-all duration-1000`}
                  style={{ width: `${operationProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-4 text-xs font-bold text-gray-500 border-l border-gray-700 pl-4">
              <div>
                <span className="block text-gray-400">TOTAL RECORDS</span>
                <span>{stats.total}</span>
              </div>
              <div>
                <span className="block text-gray-400">ENCRYPTED/REDACTED</span>
                <span className={sessionUnlocked ? 'text-green-500 line-through' : ''}>
                  {stats.redactedBytes} BYTES
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Grid: Sidebar Controls + Log List */}
        <div className="flex flex-col lg:flex-row gap-6 flex-1">
          
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-6 no-print">
            <div className="border border-gray-700 p-4 bg-black">
              <label className="block text-xs font-bold text-gray-400 mb-2 tracking-widest text-[#d4af37]">QUERY INTERFACE</label>
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 p-2 text-sm text-white focus:border-[#d4af37] focus:outline-none transition-colors"
              />
            </div>

            <div className="border border-gray-700 p-4 bg-black">
              <label className="block text-xs font-bold text-gray-400 mb-4 tracking-widest text-[#d4af37]">FILTER PARAMETERS</label>
              
              <div className="mb-4">
                <span className="block text-[10px] text-gray-500 mb-2 uppercase tracking-wider">Classification</span>
                <select 
                  value={filterClass}
                  onChange={(e) => setFilterClass(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 p-2 text-sm text-gray-300 focus:border-[#d4af37] focus:outline-none cursor-pointer"
                >
                  {simplifiedFilters.map(sf => (
                    <option key={sf} value={sf}>{sf}</option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block text-[10px] text-gray-500 mb-2 uppercase tracking-wider">Importance Level</span>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm hover:text-white transition-colors">
                    <input type="radio" name="filterType" value="ALL" checked={filterType === 'ALL'} onChange={() => setFilterType('ALL')} className="accent-[#d4af37]" />
                    <span>All Records</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm hover:text-white transition-colors">
                    <input type="radio" name="filterType" value="KEY" checked={filterType === 'KEY'} onChange={() => setFilterType('KEY')} className="accent-[#d4af37]" />
                    <span>Key Operations (★)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm hover:text-white transition-colors">
                    <input type="radio" name="filterType" value="ROUTINE" checked={filterType === 'ROUTINE'} onChange={() => setFilterType('ROUTINE')} className="accent-[#d4af37]" />
                    <span>Routine/Maintenance</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-gray-600 border border-gray-800 p-3 leading-tight hidden lg:block">
              <span className="text-red-500 font-bold block mb-1 uppercase">
                {sessionUnlocked ? 'Override Notice:' : 'WARNING:'}
              </span>
              {sessionUnlocked 
                ? 'Archive decryption successful. All data redactions bypassed for current session.' 
                : 'System logs actively updated. Black Thorne protocol requires strict compliance.'}
            </div>

          </aside>

          <main className="flex-1 bg-gray-900 bg-opacity-20 border border-gray-800 p-2 md:p-6 min-h-[500px]">
            <div className="flex justify-between text-xs font-bold text-gray-500 mb-4 border-b border-gray-800 pb-2 uppercase tracking-widest">
              <span>Retrieval Results: {stats.visible} matches</span>
              <span>Sort: Chronological</span>
            </div>

            <div className="space-y-2">
              {filteredLogs.length > 0 ? (
                filteredLogs.map(log => (
                  <LogEntry key={log.id} log={log} initialRevealed={sessionUnlocked} />
                ))
              ) : (
                <div className="py-12 text-center text-gray-500 border border-dashed border-gray-700">
                  <span className="block text-2xl mb-2">∅</span>
                  NO RECORDS FOUND MATCHING CURRENT PARAMETERS
                </div>
              )}
            </div>
          </main>
        </div>
        
        <footer className="mt-8 text-center text-[10px] text-gray-600 tracking-widest uppercase border-t border-gray-800 pt-4">
          END OF QUERY. SESSION ACTIVE. DIRECTORY: /MNT/BT_SECURE/
        </footer>

      </div>

      <TerminalConsole onCommand={handleCommand} />
      
      {showHacking && (
        <HackingMinigame 
          onComplete={handleHackingSuccess} 
          onCancel={() => setShowHacking(false)} 
        />
      )}
    </div>
  );
};

export default DashboardPage;
