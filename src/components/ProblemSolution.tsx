import React from 'react';
import { X, Check, Clock, TrendingDown, AlertCircle, Zap, DollarSign, ArrowRight } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: "Wasting hours on ineffective prompts",
      description: "Spending 3-4 hours daily crafting prompts that deliver mediocre results"
    },
    {
      icon: TrendingDown,
      title: "Missing AI profit opportunities",
      description: "Watching competitors generate 6-figure revenues while you struggle with basics"
    },
    {
      icon: AlertCircle,
      title: "Manual workflow bottlenecks",
      description: "Stuck doing repetitive tasks that AI could automate in seconds"
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "1-click proven prompts that work",
      description: "Copy-paste templates that generated $217K+ in documented results"
    },
    {
      icon: DollarSign,
      title: "Unlock hidden AI profit streams",
      description: "75 monetization strategies across 12+ industries with step-by-step guides"
    },
    {
      icon: ArrowRight,
      title: "Automated workflows & systems",
      description: "Set-and-forget automation that runs your business 24/7"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              Stop Struggling With AI
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Most people waste months trying to figure out AI prompting. 
            Here's exactly what's holding you back and how to fix it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems Column */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-400 mb-2">The Problem</h3>
              <p className="text-slate-400">What's costing you time and money</p>
            </div>

            {problems.map((problem, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/5 border border-red-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-red-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                      <X className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{problem.title}</h4>
                      <p className="text-slate-300">{problem.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">The Solution</h3>
              <p className="text-slate-400">What you get with AI Profit Accelerator</p>
            </div>

            {solutions.map((solution, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300">
                      <Check className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{solution.title}</h4>
                      <p className="text-slate-300">{solution.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Ready to <span className="text-emerald-400">Stop Struggling</span> and{' '}
              <span className="text-cyan-400">Start Profiting</span>?
            </h3>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get Your 75 Profit Prompts Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;