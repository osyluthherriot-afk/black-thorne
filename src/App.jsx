import React from 'react';
import { useAuth } from './context/AuthContext';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

const AppContent = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center font-mono text-gray-400">
        <div className="text-center">
          <div className="mb-4 inline-block w-8 h-8 border-4 border-[#d4af37] border-t-transparent animate-spin rounded-full"></div>
          <p className="animate-pulse">DECRYPTING CONNECTION...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <DashboardPage /> : <LoginPage />;
};

function App() {
  return (
    <div className="App selection:bg-red-900 selection:text-white">
      <AppContent />
    </div>
  );
}

export default App;
