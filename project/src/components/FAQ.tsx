import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How quickly can I start seeing results with these prompts?",
      answer: "Most customers see immediate improvements in their AI outputs within the first day. The prompts are designed to work right out of the box - just copy, customize with your details, and paste into ChatGPT. Many report significant business results within the first week of implementation."
    },
    {
      question: "Do I need any technical skills to use these prompts?",
      answer: "Absolutely not! These prompts are designed for complete beginners. Each prompt comes with step-by-step instructions, examples, and customization tips. If you can copy and paste, you can use these prompts effectively."
    },
    {
      question: "What's included in the monthly subscription vs. one-time purchase?",
      answer: "The one-time purchase ($47) gives you the complete 75-prompt system with all bonuses - everything you need to start profiting immediately. The optional monthly subscription ($9/month) keeps you ahead with 5-10 new prompts monthly, latest AI tool updates, and trend adaptations. You can succeed with just the one-time purchase."
    },
    {
      question: "Can I cancel the monthly subscription anytime?",
      answer: "Yes! There's no lock-in period. You can cancel anytime with one click. Even if you cancel, you keep access to all prompts you've received during your subscription period."
    },
    {
      question: "Which AI tools do these prompts work with?",
      answer: "These prompts are optimized for ChatGPT (3.5 and 4), but also work excellently with Claude, Gemini, and other major AI platforms. We include platform-specific optimization tips for maximum effectiveness across different AI tools."
    },
    {
      question: "What if these prompts don't work for my specific industry?",
      answer: "We cover 12+ major industries with specific prompts for each. Plus, our prompts are designed to be adaptable - we include customization guides to modify any prompt for your unique situation. If you're still not satisfied, we offer a 30-day money-back guarantee."
    },
    {
      question: "How is this different from free prompts I can find online?",
      answer: "Free prompts are usually generic and untested. Our prompts are battle-tested with real businesses, optimized for specific outcomes, and come with detailed implementation guides. We've invested over 500 hours testing and refining these prompts to ensure they deliver consistent results."
    },
    {
      question: "Do you offer support if I have questions?",
      answer: "Yes! All customers get email support, and subscribers get priority support with faster response times. We also include troubleshooting guides and a private community where you can get help from other users."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-6">
            <HelpCircle className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Got Questions? We've Got Answers
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to know about AI Profit Accelerator
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-5">
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-slate-300 mb-6">
              Get in touch and we'll help you find the perfect solution for your business.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;