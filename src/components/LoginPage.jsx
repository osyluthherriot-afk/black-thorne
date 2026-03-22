import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import AccessDenied from './AccessDenied';

const LoginPage = () => {
  const { login, errorVisible, attempts, clearError } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    locationKey: ''
  });
  
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');
  
  const welcomeText = `> INITIALIZING SECURE CONNECTION...
> HANDSHAKE ESTABLISHED.
> VERIFYING CLEARANCE LEVEL...
> REQUIRES THETA-7 (TS/SCI) AUTHORIZATION.
> ENTER CREDENTIALS BELOW.`;

  useEffect(() => {
    if (isTyping) {
      let i = 0;
      const timer = setInterval(() => {
        setTypedText(welcomeText.substring(0, i));
        i++;
        if (i > welcomeText.length) {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, 30); // Typing speed
      
      return () => clearInterval(timer);
    }
  }, [isTyping]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.name, formData.password, formData.locationKey);
  };

  if (errorVisible) {
    return <AccessDenied attempts={attempts} onRetry={clearError} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="scanner-beam"></div>
      
      <div className="max-w-2xl w-full border border-gray-700 bg-[rgba(10,14,39,0.8)] p-1 relative shadow-[0_0_30px_rgba(0,0,0,0.8)] crt-flicker">
        
        {/* Classified Header */}
        <div className="border border-gray-600 p-6 m-1 bg-opacity-50">
          <div className="text-center mb-8 border-b-2 border-gray-700 pb-6 relative">
            <div className="classification-stamp hidden sm:block top-0 right-0">TOP SECRET</div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-[#d4af37] mb-2 courier-prime">
              BLACK THORNE
            </h1>
            <h2 className="text-xl tracking-widest text-gray-400 mb-4 ">
              SECURE SECURE PORTAL
            </h2>
            
            <div className="inline-block bg-[#8b0000] text-white px-4 py-1 font-bold tracking-widest text-sm courier-prime mb-2">
              [CLASSIFIED] [EYES ONLY] [CLASSIFIED]
            </div>
            
            <p className="text-xs text-gray-500 mt-2 uppercase">
              Access restricted to cleared personnel.<br/>
              Unauthorized access will be logged.
            </p>
          </div>

          {/* Typewriter intro */}
          <div className="bg-black border border-gray-800 p-4 mb-8 min-h-[120px] shadow-inner text-green-500 font-mono text-sm sm:text-base">
            <pre className="whitespace-pre-wrap font-inherit leading-relaxed">
              {typedText}
              <span className="typing-cursor"></span>
            </pre>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Field 1: Agent Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-bold text-gray-400 tracking-wider">
                AGENT DESIGNATION
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Last Name, First Name [CLEARANCE_LEVEL]"
                  className="w-full bg-black border border-gray-700 p-3 pr-10 text-white focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors font-mono"
                  required
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </div>

            {/* Field 2: Authorization Code (Password) */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-bold text-gray-400 tracking-wider">
                AUTHENTICATION VECTOR
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="●●●●●●●●●●"
                className="w-full bg-black border border-gray-700 p-3 text-white focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors font-mono tracking-widest"
                required
              />
            </div>

            {/* Field 3: Location Key */}
            <div className="space-y-2 relative group">
              <label htmlFor="locationKey" className="block text-sm font-bold text-gray-400 tracking-wider flex items-center">
                OPERATIONAL THEATER
                <span className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-500 text-gray-400 text-xs cursor-help">
                  ?
                </span>
              </label>
              
              {/* Tooltip */}
              <div className="absolute left-0 top-6 w-full md:w-auto md:left-48 z-10 hidden group-hover:block bg-gray-900 border border-gray-600 p-3 text-xs text-gray-300 shadow-xl max-w-xs">
                Requires exact theater code pairing (PRIMARY or SECONDARY).
                <br/><br/>
                Examples:<br/>
                - Testing facility in Avernus<br/>
                - The Drowning Court<br/>
                - Disposal Facility (Forest of Suicides)
              </div>

              <input
                type="text"
                id="locationKey"
                name="locationKey"
                value={formData.locationKey}
                onChange={handleChange}
                placeholder="Theater Code"
                className="w-full bg-black border border-gray-700 p-3 text-white focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors uppercase font-mono"
                required
                autoComplete="off"
                spellCheck="false"
              />
            </div>

            {/* Submit & Links */}
            <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto flex-1 bg-[#1a3a2a] hover:bg-[#25503a] border border-[#d4af37] text-[#d4af37] font-bold py-3 px-6 tracking-widest transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] focus:outline-none"
                disabled={isTyping}
              >
                VERIFY CREDENTIALS
              </button>
              
              <div className="flex flex-col text-right text-xs text-gray-500 space-y-1 w-full sm:w-auto">
                <a href="#" className="hover:text-red-400 transition-colors" onClick={(e) => { e.preventDefault(); alert("TRANSMISSION ERROR: Secure relay offline."); }}>
                  TRANSMISSION ERROR?
                </a>
                <a href="#" className="hover:text-red-400 transition-colors" onClick={(e) => { e.preventDefault(); }}>
                  REQUEST NEW CLEARANCE
                </a>
              </div>
            </div>

          </form>
        </div>
        
        {/* Footer Warning */}
        <div className="p-2 text-center text-[10px] text-gray-600 uppercase tracking-widest leading-tight">
          Session timeout: 45 minutes • Multiple failed attempts will trigger automatic lockdown<br/>
          All activity monitored and logged by the Directorate
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
