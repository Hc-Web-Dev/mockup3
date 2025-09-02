import React, { useState } from 'react';
import { Download, Lock, Check, X } from 'lucide-react';

interface ProtectedDownloadProps {
  fileName: string;
  displayName: string;
  description?: string;
  requiresPurchase?: boolean;
  requiresSubscription?: boolean;
}

const ProtectedDownload: React.FC<ProtectedDownloadProps> = ({
  fileName,
  displayName,
  description,
  requiresPurchase = true,
  requiresSubscription = false
}) => {
  const [isChecking, setIsChecking] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  // Check if user has purchased/subscribed
  const checkAccess = async () => {
    setIsChecking(true);
    
    // Check localStorage for purchase/subscription status
    const hasPurchased = localStorage.getItem('ai_profit_purchased') === 'true';
    const hasSubscription = localStorage.getItem('ai_profit_subscription') === 'true';
    
    // Simulate API call to verify purchase
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const accessGranted = requiresSubscription ? hasSubscription : hasPurchased;
    setHasAccess(accessGranted);
    setIsChecking(false);
    
    if (accessGranted) {
      downloadFile();
    }
  };

  const downloadFile = () => {
    // Create download link for the protected file
    const link = document.createElement('a');
    link.href = `/pdfs/${fileName}`;
    link.download = fileName;
    link.click();
  };

  const handlePurchase = () => {
    // Redirect to purchase
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (hasAccess) {
    return (
      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">{displayName}</h4>
              {description && <p className="text-sm text-slate-300">{description}</p>}
            </div>
          </div>
          <button
            onClick={downloadFile}
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-600 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center">
            <Lock className="w-5 h-5 text-slate-400" />
          </div>
          <div>
            <h4 className="font-semibold text-white">{displayName}</h4>
            {description && <p className="text-sm text-slate-300">{description}</p>}
            <p className="text-xs text-red-400 mt-1">
              {requiresSubscription ? 'Subscription Required' : 'Purchase Required'}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={checkAccess}
            disabled={isChecking}
            className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium text-white transition-all duration-300 text-sm disabled:opacity-50"
          >
            {isChecking ? 'Checking...' : 'Check Access'}
          </button>
          <button
            onClick={handlePurchase}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 text-sm"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProtectedDownload;