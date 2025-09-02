import React from 'react';
import { BookOpen, Download, Clock, Zap, TrendingUp, Star, Users, Award } from 'lucide-react';

interface HeroProps {
  downloadCount: number;
}

const Hero: React.FC<HeroProps> = ({ downloadCount }) => {
  const handleDownloadSample = () => {
    // Create a link to download the sample PDF
    const link = document.createElement('a');
    link.href = '/pdfs/ai-profit-accelerator-complete.md';
    link.download = 'AI-Profit-Accelerator-Sample-Chapter4.pdf';
    link.click();
  };

  const handleGetAccess = () => {
    // Scroll to pricing section
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAccessDashboard = () => {
    // Navigate to paywall demo
    window.location.hash = '#dashboard';
    window.location.reload();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-24">
      {/* Enhanced Background with Visual Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-400/15 via-transparent to-transparent" />
        
        {/* Floating AI-themed elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-cyan-400/50 rounded-full animate-bounce opacity-50" />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-70" />
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-yellow-400/60 rounded-full animate-ping opacity-50" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Enhanced Text Content */}
        <div className="text-center lg:text-left space-y-6 lg:space-y-8">
          {/* Trust Badges Row */}
          <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start mb-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-full backdrop-blur-sm">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-xs text-yellow-300 font-medium">#1 AI Guide</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-400/20 to-green-400/20 border border-emerald-400/30 rounded-full backdrop-blur-sm">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-emerald-300 font-medium">2,347+ Users</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-400/30 rounded-full backdrop-blur-sm">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-purple-300 font-medium">4.9/5 Rating</span>
            </div>
          </div>

          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full backdrop-blur-sm">
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300 font-medium mobile-optimized">
              <span className="hidden sm:inline">First 100 subscribers get FREE Prompt Engineering Toolkit</span>
              <span className="sm:hidden">FREE Toolkit - First 100 Only!</span>
            </span>
          </div>

          {/* Sharpened Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight optimized-text">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Unlock 75 AI Prompts +
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              10 Automated Workflows
            </span>
          </h1>

          {/* Benefit-Focused Subheadline */}
          <div className="space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mobile-optimized">
              <span className="text-emerald-400 font-bold">Battle-Tested System</span> That Generated{' '}
              <span className="text-cyan-400 font-bold">$217,893 in 2024</span>
            </p>
            
            {/* Key Benefits Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl text-left">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 text-sm sm:text-base">E-commerce: $2k+/month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 text-sm sm:text-base">Real Estate: 5 listings/month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 text-sm sm:text-base">Content: 10x engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 text-sm sm:text-base">Marketing: 3x conversions</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-4">
            <button 
              onClick={handleGetAccess}
              className="group w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 rounded-xl font-bold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/20 button-enhanced mobile-button"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="hidden sm:inline">Download My Prompt Pack - $47</span>
                <span className="sm:hidden">Get Prompt Pack - $47</span>
                <Zap className="w-5 lg:w-6 h-5 lg:h-6 group-hover:animate-pulse" />
              </span>
            </button>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button 
                onClick={handleDownloadSample}
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 underline underline-offset-4 mobile-optimized"
              >
                View Free Sample (Chapter 4)
              </button>
              <button 
                onClick={handleAccessDashboard}
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200 underline underline-offset-4 mobile-optimized"
              >
                Demo Customer Dashboard
              </button>
            </div>
          </div>

          {/* Social Proof Counter */}
          <div className="flex items-center gap-4 justify-center lg:justify-start text-slate-400 flex-wrap">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span className="text-sm">
                <span className="text-emerald-400 font-semibold">{downloadCount.toLocaleString()}</span> copies sold
              </span>
            </div>
            <div className="w-1 h-1 bg-slate-500 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Right Column - Enhanced 3D Book Mockup with Visual Elements */}
        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative group gpu-accelerated">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-emerald-400/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse-slow" />
            
            {/* Main book container */}
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 lg:p-8 rounded-3xl border border-white/20 backdrop-blur-lg transform rotate-1 lg:rotate-2 group-hover:rotate-2 lg:group-hover:rotate-3 transition-transform duration-500 shadow-2xl will-change-transform">
              
              {/* 3D Book Mockup */}
              <div className="relative">
                {/* Book spine shadow */}
                <div className="absolute -left-1 lg:-left-2 top-2 w-56 sm:w-64 h-72 sm:h-80 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg transform -skew-y-1 opacity-60"></div>
                
                {/* Main book cover */}
                <div className="relative w-56 sm:w-64 h-72 sm:h-80 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-lg shadow-2xl overflow-hidden border border-white/10">
                  {/* Cover overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-black/30" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                  
                  {/* Cover content */}
                  <div className="relative z-10 p-4 lg:p-6 h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="text-xs font-semibold text-cyan-200 mb-2 tracking-wide">AI BUSINESS SERIES</div>
                      <h3 className="text-xl lg:text-2xl font-black leading-tight mb-3 lg:mb-4 text-shadow-lg">AI PROFIT ACCELERATOR</h3>
                      <p className="text-sm opacity-90 mb-3 lg:mb-4">75 Proven Prompts & Automated Workflows</p>
                      
                      {/* Visual elements on cover */}
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2 bg-white/10 rounded-full px-2 py-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          <span>E-commerce Automation</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 rounded-full px-2 py-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span>Real Estate Scripts</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 rounded-full px-2 py-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>Content Generation</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-cyan-200 mb-1">2025 EDITION</div>
                      <div className="text-sm font-bold">Premium Guide</div>
                      <div className="text-xs text-emerald-300 mt-1">$217K+ Generated</div>
                    </div>
                  </div>
                  
                  {/* Floating AI icon */}
                  <div className="absolute top-4 right-4 w-8 lg:w-10 h-8 lg:h-10 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Zap className="w-4 lg:w-5 h-4 lg:h-5 text-emerald-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges and elements */}
            <div className="absolute -top-4 lg:-top-6 -right-4 lg:-right-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-bold animate-pulse shadow-lg">
              NEW 2025
            </div>
            
            <div className="absolute -bottom-3 lg:-bottom-4 -left-3 lg:-left-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              BESTSELLER
            </div>

            {/* Floating testimonial bubble - Hidden on mobile for cleaner look */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-3 max-w-48 hidden xl:block">
              <div className="text-xs text-slate-200 mb-1">"These prompts got us 63 paid upgrades in 2 weeks!"</div>
              <div className="text-xs text-cyan-400 font-medium">- @TechFounder</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust indicators */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 lg:gap-6 text-slate-400 text-xs lg:text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span>30-day guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span>Instant download</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <span>Secure checkout</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;