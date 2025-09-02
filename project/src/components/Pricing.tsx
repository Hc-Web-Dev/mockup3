import React, { useState, useEffect } from 'react';
import { Check, Zap, Crown, Gift, Clock, Users } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PaystackButton } from "react-paystack";

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 });
  const [subscriberCount, setSubscriberCount] = useState(73);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Subscriber counter
  useEffect(() => {
    const interval = setInterval(() => {
      setSubscriberCount(prev => {
        if (prev < 100) {
          return prev + Math.floor(Math.random() * 2) + 1;
        }
        return prev;
      });
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const handlePurchase = (planName: string, price: number) => {
    // In a real implementation, this would integrate with a payment processor
    alert(`Redirecting to checkout for ${planName} plan - $${price}`);
  };

  const handleSubscription = (withDiscount = false) => {
    const price = withDiscount ? 7.65 : 9;
    alert(`Redirecting to subscription checkout - $${price}/month`);
  };

  // Paystack config for one-time purchase
  const paystackOneTimeConfig = {
    publicKey: "pk_test_xxxx",
    email: "customer@email.com",
    amount: 4700, // kobo
    currency: "USD",
    text: "Pay with Paystack",
    reference: String(Date.now()),
    onSuccess: () => alert("Paystack Payment Successful!"),
    onClose: () => alert("Paystack Payment Cancelled"),
  };

  // Paystack config for subscription
  const paystackSubConfig = {
    publicKey: "pk_test_xxxx",
    email: "customer@email.com",
    amount: 900, // kobo for $9
    currency: "USD",
    text: "Subscribe with Paystack",
    reference: String(Date.now()),
    onSuccess: () => alert("Paystack Subscription Successful!"),
    onClose: () => alert("Paystack Subscription Cancelled"),
  };

  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
              Choose Your Success Path
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Get the complete 75-prompt system for just $47 (save $7), then optionally stay ahead 
            with monthly AI updates for $9/month.
          </p>
          
          {/* Countdown Timer for Bonus */}
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full backdrop-blur-sm mb-8">
            <Clock className="w-5 h-5 text-red-400" />
            <span className="text-red-300 font-semibold">
              Bonus Toolkit ends in: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
            <div className="flex items-center gap-1 text-xs text-orange-300">
              <Users className="w-4 h-4" />
              {subscriberCount}/100 claimed
            </div>
          </div>
        </div>

        {/* One-Time Purchase - Fixed badge positioning */}
        <div className="max-w-4xl mx-auto mb-16 mt-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-visible">
            {/* Popular Badge - Fixed with proper spacing */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg max-w-max">
                <span className="hidden sm:inline">MOST POPULAR - ONE-TIME PURCHASE</span>
                <span className="sm:hidden">MOST POPULAR</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mt-8 md:mt-6">
              {/* Left Side - Product Details */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">AI Profit Accelerator</h3>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-3xl md:text-4xl font-black text-white">$47</span>
                  <div className="text-left">
                    <div className="text-slate-400 line-through text-sm">$54</div>
                    <div className="text-xs text-emerald-400">Save $7</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "75 Battle-Tested AI Prompts",
                    "12 Industry-Specific Templates", 
                    "Automated Workflow Guides",
                    "E-commerce Section ($2k+/mo value)",
                    "Real Estate Hacks (5 listings/month)",
                    "Profit Calculation Worksheets",
                    "30-Day Money-Back Guarantee"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handlePurchase("Complete Package", 47)}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-white"
                >
                  Get Complete Access - $47
                </button>
                {/* PayPal and Paystack Buttons for One-Time Purchase */}
                <div className="mt-4 space-y-2">
                  <PayPalScriptProvider options={{ clientId: "test" }}>
                    <PayPalButtons
                      style={{ layout: "horizontal" }}
                      createOrder={(_data, actions) => {
                        return actions.order?.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            { amount: { currency_code: "USD", value: "47.00" } }
                          ],
                        });
                      }}
                      onApprove={(_data, actions) => {
                        if (actions.order) {
                          return actions.order.capture().then(() => {
                            alert("PayPal Payment Successful!");
                          });
                        }
                        return Promise.resolve();
                      }}
                      onError={() => alert("PayPal Payment Failed")}
                    />
                  </PayPalScriptProvider>
                  <PaystackButton {...paystackOneTimeConfig} />
                </div>
              </div>

              {/* Right Side - Bonuses */}
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 md:p-6">
                <h4 className="font-semibold text-cyan-400 mb-4 text-base md:text-lg">🎁 INCLUDED BONUSES:</h4>
                <div className="space-y-3">
                  {[
                    "AI Prompt Cheat Sheet ($27 value)",
                    "ChatGPT Settings Optimizer ($19 value)", 
                    "Prompt Troubleshooting Guide ($23 value)",
                    "Dropshipping Automation Kit ($47 value)",
                    "FSBO Lead Generation Scripts ($39 value)",
                    "Viral Content Templates ($31 value)"
                  ].map((bonus, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Gift className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{bonus}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-600">
                  <div className="text-emerald-400 font-bold">Total Bonus Value: $186</div>
                  <div className="text-slate-400 text-sm">Yours FREE with purchase</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Subscription Option */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead of the AI Curve</h3>
            <p className="text-slate-300">Optional monthly updates with the latest AI profit strategies</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Subscription Details */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Monthly AI Updates</h4>
                    <p className="text-purple-400">Stay cutting-edge</p>
                  </div>
                </div>

                <div className="text-3xl font-bold text-white mb-4">$9<span className="text-lg text-slate-400">/month</span></div>

                <div className="space-y-2 mb-6">
                  {[
                    "5-10 new tested prompts monthly",
                    "Latest AI tool integrations",
                    "2025 trend adaptations",
                    "Exclusive workflow updates",
                    "Cancel anytime, no lock-in"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleSubscription()}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl text-white"
                >
                  Subscribe for $9/month
                </button>
                {/* PayPal and Paystack Buttons for Subscription */}
                <div className="mt-4 space-y-2">
                  <PayPalScriptProvider options={{ clientId: "test", vault: true, intent: "subscription" }}>
                    <PayPalButtons
                      style={{ layout: "horizontal" }}
                      createSubscription={(_data, actions) => {
                        return actions.subscription?.create({
                          plan_id: "P-XXXXXXXXXX" // Replace with your PayPal plan ID
                        });
                      }}
                      onApprove={() => {
                        alert("PayPal Subscription Successful!");
                        return Promise.resolve();
                      }}
                      onError={() => alert("PayPal Subscription Failed")}
                    />
                  </PayPalScriptProvider>
                  <PaystackButton {...paystackSubConfig} />
                </div>
              </div>

              {/* First 100 Bonus */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-bold text-yellow-400 mb-2">First 100 Subscribers Only!</h5>
                  <p className="text-sm text-slate-300 mb-4">
                    Get the <strong>Prompt Engineering Toolkit</strong> FREE 
                    (normally $47) when you subscribe in the next {timeLeft.hours}h {timeLeft.minutes}m
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-3 mb-4">
                    <div className="text-2xl font-bold text-yellow-400">{subscriberCount}/100</div>
                    <div className="text-xs text-slate-400">Spots claimed</div>
                  </div>
                  <div className="text-xs text-slate-400">
                    🔥 Advanced prompt optimization techniques<br/>
                    ⚡ AI automation blueprints<br/>
                    🎯 Performance tracking templates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bundle Option */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm text-center">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4">🔥 Best Value Bundle</h3>
            <p className="text-slate-300 mb-6">
              Get the complete system + 3 months of updates for one low price
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-3xl md:text-4xl font-black text-white">$74</span>
              <div className="text-left">
                <div className="text-slate-400 line-through text-sm">$101</div>
                <div className="text-xs text-emerald-400">Save $27</div>
              </div>
            </div>
            <button 
              onClick={() => handlePurchase("Bundle", 74)}
              className="px-6 md:px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-white"
            >
              Get Bundle Deal - Save $27
            </button>
            <p className="text-xs text-slate-400 mt-3">
              Includes everything + 3 months of updates + bonus toolkit
            </p>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">30-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-slate-300 max-w-2xl">
              Try AI Profit Accelerator risk-free for 30 days. 
              If you don't see results, we'll refund every penny. No questions asked.
              Subscription can be cancelled anytime with no penalties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;