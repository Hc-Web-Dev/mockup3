import React, { useState } from 'react';
import { X, Gift, Clock, Zap, Star } from 'lucide-react';

interface ExitIntentPopupProps {
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onClose }) => {
  const [selectedOffer, setSelectedOffer] = useState<'onetime' | 'subscription'>('onetime');

  const handlePurchaseWithDiscount = () => {
    if (selectedOffer === 'onetime') {
      alert('Redirecting to checkout with 15% discount applied - $40!');
    } else {
      alert('Redirecting to subscription checkout - First month only $7.65!');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-3xl w-full bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/50 rounded-2xl p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <X className="w-4 h-4 text-slate-300" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4">
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-red-300 font-semibold text-sm">Wait! Don't leave empty-handed</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
              Exclusive 15% Off Before You Go!
            </span>
          </h2>
          
          <p className="text-xl text-slate-300">
            Choose your preferred discount option
          </p>
        </div>

        {/* Offer Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* One-Time Purchase Discount */}
          <div 
            className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
              selectedOffer === 'onetime' 
                ? 'border-emerald-400 bg-emerald-500/10' 
                : 'border-slate-600 bg-slate-800/50'
            }`}
            onClick={() => setSelectedOffer('onetime')}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedOffer === 'onetime' 
                  ? 'border-emerald-400 bg-emerald-400' 
                  : 'border-slate-500'
              }`} />
              <h3 className="font-bold text-white">One-Time Purchase</h3>
            </div>
            
            <div className="text-center mb-4">
              <div className="text-3xl font-black text-emerald-400">$40</div>
              <div className="text-slate-400 line-through text-sm">Regular: $47</div>
              <div className="text-emerald-400 font-semibold">Save $7 (15% off)</div>
            </div>

            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Complete 75-prompt system
              </li>
              <li className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-yellow-400" />
                All bonus materials ($186 value)
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Lifetime access
              </li>
            </ul>
          </div>

          {/* Subscription Discount */}
          <div 
            className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
              selectedOffer === 'subscription' 
                ? 'border-purple-400 bg-purple-500/10' 
                : 'border-slate-600 bg-slate-800/50'
            }`}
            onClick={() => setSelectedOffer('subscription')}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedOffer === 'subscription' 
                  ? 'border-purple-400 bg-purple-400' 
                  : 'border-slate-500'
              }`} />
              <h3 className="font-bold text-white">Monthly Updates</h3>
            </div>
            
            <div className="text-center mb-4">
              <div className="text-3xl font-black text-purple-400">$7.65</div>
              <div className="text-slate-400 line-through text-sm">Regular: $9/month</div>
              <div className="text-purple-400 font-semibold">First month 15% off</div>
            </div>

            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                5-10 new prompts monthly
              </li>
              <li className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-yellow-400" />
                Latest AI tool updates
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Cancel anytime
              </li>
            </ul>
          </div>
        </div>

        {/* Selected Offer Details */}
        <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-cyan-400 mb-3 text-sm">
            {selectedOffer === 'onetime' ? 'ONE-TIME PURCHASE INCLUDES:' : 'SUBSCRIPTION INCLUDES:'}
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              {selectedOffer === 'onetime' ? (
                <>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">75 battle-tested prompts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">E-commerce automation kit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Real estate lead scripts</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Monthly prompt updates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">AI tool integrations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Trend adaptations</span>
                  </div>
                </>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Priority email support</span>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">30-day money-back guarantee</span>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Instant download access</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <button 
            onClick={handlePurchaseWithDiscount}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-white ${
              selectedOffer === 'onetime'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400'
            }`}
          >
            {selectedOffer === 'onetime' 
              ? 'Yes! Get 15% Off - Only $40' 
              : 'Yes! Start for $7.65/month'
            }
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-3 text-slate-400 hover:text-slate-300 font-medium transition-colors duration-200"
          >
            No thanks, I'll pay full price
          </button>
        </div>

        {/* Trust Elements */}
        <div className="text-center mt-6 text-xs text-slate-400">
          <p>🔒 Secure checkout • 💰 30-day money-back guarantee • ⚡ Instant access</p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;