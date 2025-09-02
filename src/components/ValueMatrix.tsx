import React from 'react';
import { ShoppingCart, Home, Users, Eye, Zap, TrendingUp } from 'lucide-react';

const ValueMatrix: React.FC = () => {
  const industries = [
    {
      icon: ShoppingCart,
      name: "E-commerce",
      value: "$2k+/mo",
      useCase: "Dropshipping Automation",
      prompts: [
        "Dropshipping product description generator",
        "Automated customer objection handler", 
        "1-click review response system"
      ],
      samplePrompt: "Generate 10 scroll-stopping DTC product descriptions for [product] targeting [audience] with emotional triggers and scarcity elements",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Home,
      name: "Real Estate",
      value: "5 listings/month",
      useCase: "FSBO Lead Generation",
      prompts: [
        "FSBO (For Sale By Owner) lead gen script",
        "Property description → viral social posts converter",
        "Open house follow-up automations"
      ],
      samplePrompt: "Create FSBO conversion email with 38%+ response rate including market data, urgency hooks, and free consultation offer",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      name: "Content Agencies",
      value: "10x engagement",
      useCase: "Viral Content Generator",
      prompts: [
        "8-tweet thought leadership threads",
        "LinkedIn viral post templates",
        "YouTube script generators"
      ],
      samplePrompt: "Output viral LinkedIn post on [topic] with hook, story structure, actionable insights, and engagement-driving CTA",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Eye,
      name: "Digital Marketing",
      value: "3x conversions",
      useCase: "Ad Copy That Converts",
      prompts: [
        "Facebook ad variations with A/B testing",
        "Google Ads headline generators",
        "Email subject line optimizers"
      ],
      samplePrompt: "Write 5 Facebook ad variations for [product] with emotional triggers, social proof, and urgency elements for maximum CTR",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Profit In Any Industry
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            See exactly how professionals in your industry are using these prompts to generate massive results
          </p>
          
          {/* Results Preview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-emerald-400">$217,893</div>
              <div className="text-sm text-slate-300">Generated in 2024</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-cyan-400">12+</div>
              <div className="text-sm text-slate-300">Industries Covered</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-400">75</div>
              <div className="text-sm text-slate-300">Battle-Tested Prompts</div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-yellow-400">$9/mo</div>
              <div className="text-sm text-slate-300">Monthly Updates</div>
            </div>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300 h-full">
                {/* Industry Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                    <p className="text-cyan-400 font-medium">{industry.useCase}</p>
                    <p className="text-emerald-400 text-sm font-semibold">Value: {industry.value}</p>
                  </div>
                </div>

                {/* Specific Prompts */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">Included Prompts:</h4>
                  <div className="space-y-2">
                    {industry.prompts.map((prompt, promptIndex) => (
                      <div key={promptIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300 text-sm">{prompt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Prompt Preview */}
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mb-6">
                  <div className="text-xs text-slate-400 mb-2 uppercase tracking-wide">Sample Prompt Preview</div>
                  <div className="text-slate-200 text-sm leading-relaxed font-mono">
                    "{industry.samplePrompt}"
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    Ready-to-use templates
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    Proven conversion rates
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Users className="w-4 h-4 text-purple-400" />
                    Step-by-step instructions
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Updates Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-purple-400">Plus Monthly Updates</span> Keep You Ahead
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              AI moves fast. Our optional $9/month subscription ensures you always have the latest, 
              most effective prompts for emerging tools and trends.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <div className="text-lg font-bold text-purple-400 mb-2">5-10 New Prompts</div>
                <div className="text-sm text-slate-300">Fresh, tested prompts monthly</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <div className="text-lg font-bold text-cyan-400 mb-2">Latest AI Tools</div>
                <div className="text-sm text-slate-300">GPT-5, Claude, Midjourney updates</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <div className="text-lg font-bold text-emerald-400 mb-2">Trend Adaptations</div>
                <div className="text-sm text-slate-300">2025 market shifts covered</div>
              </div>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get Started - $47 One-Time
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueMatrix;