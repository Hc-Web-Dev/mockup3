import React, { useState } from 'react';
import { Mail, Gift, TrendingUp, Zap } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real implementation, this would integrate with an email service
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-full blur-xl" />
          
          <div className="relative z-10 text-center">
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6">
              <Mail className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Free AI Profit Newsletter</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stay Ahead of the AI Curve
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get weekly AI profit tips, new prompt releases, and exclusive strategies 
              delivered straight to your inbox.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Weekly AI Insights</h3>
                <p className="text-sm text-slate-400">Latest trends and profit opportunities</p>
              </div>
              
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Exclusive Prompts</h3>
                <p className="text-sm text-slate-400">Free prompts not available anywhere else</p>
              </div>
              
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Subscriber Perks</h3>
                <p className="text-sm text-slate-400">Early access and special discounts</p>
              </div>
            </div>

            {/* Email Signup Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 rounded-xl font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 border border-purple-400/20 min-w-[140px]"
                  >
                    Join Free
                  </button>
                </div>
                <p className="text-sm text-slate-400 mt-4 text-center">
                  No spam, unsubscribe anytime. Join 2,347+ AI entrepreneurs.
                </p>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold">
                    <div className="w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    Welcome to the AI Profit Newsletter!
                  </div>
                  <p className="text-sm text-slate-300 mt-2">
                    Check your email for a confirmation link and your first free prompt.
                  </p>
                </div>
              </div>
            )}

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>2,347+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Free forever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;