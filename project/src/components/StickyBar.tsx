import React, { useState, useEffect } from 'react';
import { ShoppingCart, Clock, Zap, X } from 'lucide-react';

const StickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'onetime' | 'subscription'>('onetime');
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 100vh and not dismissed
      setIsVisible(window.scrollY > window.innerHeight && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handlePurchase = () => {
    if (selectedOption === 'onetime') {
      alert('Redirecting to one-time purchase checkout - $47');
    } else {
      alert('Redirecting to subscription checkout - $9/month');
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden mobile-sticky ios-safe-area no-print">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-cyan-400/50 rounded-2xl p-4 backdrop-blur-xl shadow-2xl relative">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 w-6 h-6 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors duration-200"
          aria-label="Dismiss"
        >
          <X className="w-3 h-3 text-slate-300" />
        </button>

        {/* Option Toggle */}
        <div className="flex bg-slate-800 rounded-lg p-1 mb-3">
          <button
            onClick={() => setSelectedOption('onetime')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedOption === 'onetime'
                ? 'bg-cyan-500 text-white'
                : 'text-slate-300 hover:text-white'
            }`}
            aria-pressed={selectedOption === 'onetime'}
          >
            One-Time $47
          </button>
          <button
            onClick={() => setSelectedOption('subscription')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedOption === 'subscription'
                ? 'bg-purple-500 text-white'
                : 'text-slate-300 hover:text-white'
            }`}
            aria-pressed={selectedOption === 'subscription'}
          >
            $9/month
          </button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="font-bold text-white text-base truncate">
              {selectedOption === 'onetime' ? 'Complete System' : 'Monthly Updates'}
            </div>
            <div className="flex items-center gap-2 text-sm">
              {selectedOption === 'onetime' ? (
                <>
                  <Clock className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-red-300 truncate">Save $7 - Limited Time</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-purple-300 truncate">Latest AI prompts monthly</span>
                </>
              )}
            </div>
          </div>
          <button 
            onClick={handlePurchase}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-xl flex-shrink-0 mobile-button ${
              selectedOption === 'onetime'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400'
            }`}
            aria-label={`Purchase ${selectedOption === 'onetime' ? 'one-time package for $47' : 'monthly subscription for $9'}`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{selectedOption === 'onetime' ? '$47' : '$9/mo'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;