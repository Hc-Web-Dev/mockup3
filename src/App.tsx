import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ValueMatrix from './components/ValueMatrix';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import StickyBar from './components/StickyBar';
import ExitIntentPopup from './components/ExitIntentPopup';
import PaywallDemo from './components/PaywallDemo';

function App() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [downloadCount, setDownloadCount] = useState(2347);
  const [showPaywall, setShowPaywall] = useState(false);

  useEffect(() => {
    // Animate download counter
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 8000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Check URL for paywall demo
  useEffect(() => {
    if (window.location.hash === '#dashboard' || window.location.search.includes('demo=paywall')) {
      setShowPaywall(true);
    }
  }, []);

  if (showPaywall) {
    return <PaywallDemo />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-inter overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent pointer-events-none" />
      
      <Navigation />
      <Hero downloadCount={downloadCount} />
      <ProblemSolution />
      <ValueMatrix />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Newsletter />
      
      <StickyBar />
      
      {showExitIntent && (
        <ExitIntentPopup onClose={() => setShowExitIntent(false)} />
      )}

      {/* Demo Access Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setShowPaywall(true)}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-xl text-sm"
        >
          Demo Paywall
        </button>
      </div>
    </div>
  );
}

export default App;