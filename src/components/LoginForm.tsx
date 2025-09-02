import React, { useState } from 'react';
import { Mail, Key, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { authenticateCustomer, completePurchase } from '../utils/auth';

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [purchaseId, setPurchaseId] = useState('');
  const [showPurchaseId, setShowPurchaseId] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const customer = authenticateCustomer(email, purchaseId);
      
      if (customer) {
        onSuccess();
      } else {
        setError('Invalid email or purchase ID. Please check your details.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoAccess = () => {
    // For demo purposes - give access
    completePurchase('demo@example.com', true);
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black mb-2">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Access Your Content
              </span>
            </h1>
            <p className="text-slate-300">Enter your details to download your AI Profit Accelerator content</p>
          </div>

          {/* Demo Access */}
          <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl">
            <h3 className="font-semibold text-emerald-400 mb-2">Demo Access</h3>
            <p className="text-sm text-slate-300 mb-3">
              Try the customer dashboard with demo content
            </p>
            <button
              onClick={handleDemoAccess}
              className="w-full py-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 rounded-lg font-semibold text-white transition-all duration-300"
            >
              Access Demo Dashboard
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-800 text-slate-400">Or use your purchase details</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Purchase ID Field */}
            <div>
              <label htmlFor="purchaseId" className="block text-sm font-medium text-slate-300 mb-2">
                Purchase ID or Order Number
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPurchaseId ? "text" : "password"}
                  id="purchaseId"
                  value={purchaseId}
                  onChange={(e) => setPurchaseId(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Enter your purchase ID"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPurchaseId(!showPurchaseId)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showPurchaseId ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Found in your purchase confirmation email
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {isLoading ? 'Verifying...' : 'Access My Content'}
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400 mb-2">
              Can't find your purchase details?
            </p>
            <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;