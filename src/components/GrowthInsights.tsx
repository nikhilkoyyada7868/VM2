import { motion } from 'motion/react';
import { TrendingUp, Sparkles, ArrowUpRight, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';

interface GrowthInsightsProps {
  onApplyLimitIncrease: () => void;
}

export function GrowthInsights({ onApplyLimitIncrease }: GrowthInsightsProps) {
  const predictions = [
    { 
      title: 'Revenue Forecast', 
      value: '₹28.5L', 
      change: '+15%', 
      period: 'Next Quarter',
      color: 'from-green-500 to-emerald-600'
    },
    { 
      title: 'Credit Limit Eligibility', 
      value: '₹15L', 
      change: '+50%', 
      period: 'Available Now',
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      title: 'Expected Score', 
      value: '795', 
      change: '+33 pts', 
      period: 'In 3 Months',
      color: 'from-purple-500 to-pink-600'
    },
  ];

  const insights = [
    {
      icon: TrendingUp,
      title: 'Strong Growth Pattern',
      description: 'Your revenue has grown 23% in the last quarter. Maintain this momentum!',
      action: 'View Details'
    },
    {
      icon: Sparkles,
      title: 'Credit Limit Increase Available',
      description: 'Based on your performance, you\'re eligible for a 50% credit limit increase.',
      action: 'Apply Now',
      highlight: true
    },
    {
      icon: Lightbulb,
      title: 'Optimize Payment Timing',
      description: 'Pay invoices 2-3 days early to maximize your credit score improvement.',
      action: 'Learn More'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] px-6 pt-12 pb-6">
        <h1 className="text-white text-2xl mb-2">Growth Insights</h1>
        <p className="text-white/80 text-sm">
          AI-powered predictions and smart recommendations
        </p>
      </div>

      {/* Predictions */}
      <div className="px-6 py-6">
        <h2 className="text-gray-900 mb-4">AI Predictions</h2>
        <div className="space-y-3">
          {predictions.map((pred, index) => (
            <motion.div
              key={pred.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${pred.color} rounded-2xl p-4 text-white`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-white/80 text-sm">{pred.title}</span>
                <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                  <ArrowUpRight className="w-3 h-3" />
                  <span className="text-xs">{pred.change}</span>
                </div>
              </div>
              <div className="text-3xl mb-1">{pred.value}</div>
              <div className="text-white/80 text-xs">{pred.period}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smart Insights */}
      <div className="px-6">
        <h2 className="text-gray-900 mb-4">Smart Insights</h2>
        <div className="space-y-3">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-4 shadow-sm ${
                  insight.highlight ? 'border-2 border-[#1D8FE1]' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    insight.highlight 
                      ? 'bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57]' 
                      : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      insight.highlight ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{insight.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                    {insight.highlight ? (
                      <Button
                        onClick={onApplyLimitIncrease}
                        className="w-full bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white"
                      >
                        {insight.action}
                      </Button>
                    ) : (
                      <button className="text-sm text-[#1D8FE1]">
                        {insight.action} →
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
