import React, { useState, useEffect } from 'react';
import { Download, User, Calendar, CreditCard, Star, FileText, Gift } from 'lucide-react';
import ProtectedDownload from './ProtectedDownload';

const CustomerDashboard: React.FC = () => {
  const [customerData, setCustomerData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    purchaseDate: '2024-01-15',
    hasSubscription: false,
    subscriptionStatus: 'inactive'
  });

  useEffect(() => {
    // Load customer data from localStorage or API
    const savedData = localStorage.getItem('customer_data');
    if (savedData) {
      setCustomerData(JSON.parse(savedData));
    }
  }, []);

  const downloads = [
    {
      fileName: 'ai-profit-accelerator-complete.pdf',
      displayName: 'AI Profit Accelerator - Complete Guide',
      description: '75 battle-tested prompts across 12+ industries',
      requiresPurchase: true,
      requiresSubscription: false
    },
    {
      fileName: 'bonus-prompt-engineering-kit.pdf',
      displayName: 'Bonus: Prompt Engineering Kit',
      description: 'Advanced optimization techniques and troubleshooting',
      requiresPurchase: true,
      requiresSubscription: false
    },
    {
      fileName: 'industry-templates/ecommerce-templates.pdf',
      displayName: 'E-commerce Templates & Workflows',
      description: 'Complete automation systems for online stores',
      requiresPurchase: true,
      requiresSubscription: false
    },
    {
      fileName: 'industry-templates/real-estate-templates.pdf',
      displayName: 'Real Estate Templates & Workflows',
      description: 'FSBO conversion and listing automation',
      requiresPurchase: true,
      requiresSubscription: false
    },
    {
      fileName: 'monthly-updates/january-2025.pdf',
      displayName: 'January 2025 - Monthly Update',
      description: '10 new prompts for latest AI tools',
      requiresPurchase: false,
      requiresSubscription: true
    },
    {
      fileName: 'monthly-updates/february-2025.pdf',
      displayName: 'February 2025 - Monthly Update',
      description: 'GPT-5 optimization prompts and strategies',
      requiresPurchase: false,
      requiresSubscription: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Your AI Profit Dashboard
            </span>
          </h1>
          <p className="text-xl text-slate-300">Access your purchased content and manage your account</p>
        </div>

        {/* Customer Info */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="font-semibold text-white">{customerData.name}</div>
                <div className="text-sm text-slate-400">{customerData.email}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-white">Purchase Date</div>
                <div className="text-sm text-slate-400">{customerData.purchaseDate}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="font-semibold text-white">Subscription</div>
                <div className={`text-sm ${customerData.hasSubscription ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {customerData.hasSubscription ? 'Active' : 'Inactive'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Downloads Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Core Content */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan-400" />
              Core Content
            </h2>
            <div className="space-y-4">
              {downloads.filter(d => d.requiresPurchase && !d.requiresSubscription).map((download, index) => (
                <ProtectedDownload
                  key={index}
                  fileName={download.fileName}
                  displayName={download.displayName}
                  description={download.description}
                  requiresPurchase={download.requiresPurchase}
                  requiresSubscription={download.requiresSubscription}
                />
              ))}
            </div>
          </div>

          {/* Monthly Updates */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-purple-400" />
              Monthly Updates
            </h2>
            <div className="space-y-4">
              {downloads.filter(d => d.requiresSubscription).map((download, index) => (
                <ProtectedDownload
                  key={index}
                  fileName={download.fileName}
                  displayName={download.displayName}
                  description={download.description}
                  requiresPurchase={download.requiresPurchase}
                  requiresSubscription={download.requiresSubscription}
                />
              ))}
            </div>
            
            {!customerData.hasSubscription && (
              <div className="mt-6 bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm text-center">
                <h3 className="text-lg font-bold text-purple-400 mb-2">Upgrade to Monthly Updates</h3>
                <p className="text-slate-300 mb-4">Get 5-10 new prompts every month + latest AI tool integrations</p>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105">
                  Subscribe for $9/month
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm text-center">
          <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
          <p className="text-slate-300 mb-6">
            Having trouble accessing your content or need support with the prompts?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 rounded-lg font-semibold text-white transition-all duration-300">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-white transition-all duration-300">
              View FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;