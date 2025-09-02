import React, { useState, useEffect } from 'react';
import { Star, Twitter, Award, TrendingUp, Users } from 'lucide-react';

const SocialProof: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Alex Chen",
      handle: "@TechFounder",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "These SaaS onboarding prompts got us 63 paid upgrades in 2 weeks! The automated email sequences are pure gold. ROI was 1,847% in month one.",
      metric: "63 paid upgrades",
      industry: "SaaS"
    },
    {
      name: "Sarah Rodriguez",
      handle: "@EcomQueen",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "The product description prompts transformed our conversion rate from 2.1% to 8.3%. We're now generating $47K/month using just 3 of the prompts.",
      metric: "8.3% conversion rate",
      industry: "E-commerce"
    },
    {
      name: "Mike Thompson",
      handle: "@RealEstateAI",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "The real estate listing prompts are insane. Generated 127 qualified leads in 30 days. My closing rate went from 12% to 34%. This is game-changing.",
      metric: "127 qualified leads",
      industry: "Real Estate"
    },
    {
      name: "Jessica Park",
      handle: "@ContentAgency",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Client retention jumped to 94% after implementing the content strategy prompts. We're booking $28K/month in recurring revenue with these workflows.",
      metric: "94% retention rate",
      industry: "Digital Marketing"
    }
  ];

  const badges = [
    { icon: Award, text: "Featured in AI Weekly", color: "from-yellow-400 to-orange-400" },
    { icon: Users, text: "2,347+ Happy Customers", color: "from-emerald-400 to-green-400" },
    { icon: TrendingUp, text: "#1 AI Prompts Guide", color: "from-cyan-400 to-blue-400" },
    { icon: Star, text: "4.9/5 Rating", color: "from-purple-400 to-pink-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="social-proof" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Real Results From Real Users
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't take our word for it. Here's what customers are saying about their results.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-xl" />
            
            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-full absolute inset-0'
                  }`}
                >
                  {/* Testimonial Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-cyan-400/50"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Twitter className="w-4 h-4" />
                        <span className="text-sm">{testimonial.handle}</span>
                      </div>
                      <div className="text-sm text-slate-400">{testimonial.industry}</div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg text-slate-200 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Metric Highlight */}
                  <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full px-4 py-2">
                    <span className="font-semibold text-emerald-400">{testimonial.metric}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-cyan-400 w-8' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r ${badge.color}/20 border border-white/10 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                <badge.icon className="w-5 h-5" />
                <span className="font-semibold text-sm">{badge.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">2,347+</div>
                <div className="text-slate-300">Satisfied Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">$2.1M+</div>
                <div className="text-slate-300">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">4.9/5</div>
                <div className="text-slate-300">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;