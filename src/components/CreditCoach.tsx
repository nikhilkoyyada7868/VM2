import { motion } from 'motion/react';
import { TrendingUp, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';

interface CreditCoachProps {
  creditScore: number;
}

export function CreditCoach({ creditScore }: CreditCoachProps) {
  const scoreBreakdown = [
    { label: 'Payment History', score: 85, weight: '35%', color: 'bg-green-500' },
    { label: 'Credit Utilization', score: 72, weight: '30%', color: 'bg-yellow-500' },
    { label: 'Credit Age', score: 68, weight: '15%', color: 'bg-orange-500' },
    { label: 'Credit Mix', score: 90, weight: '10%', color: 'bg-green-500' },
    { label: 'Recent Inquiries', score: 80, weight: '10%', color: 'bg-green-500' },
  ];

  const tips = [
    { 
      title: 'Pay dues on time', 
      impact: 'High Impact', 
      description: 'Set up auto-pay to never miss payments',
      completed: true
    },
    { 
      title: 'Reduce credit utilization', 
      impact: 'High Impact', 
      description: 'Keep usage below 30% of limit',
      completed: false
    },
    { 
      title: 'Diversify credit sources', 
      impact: 'Medium Impact', 
      description: 'Mix of secured and unsecured credit',
      completed: false
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] px-6 pt-12 pb-8">
        <h1 className="text-white text-2xl mb-2">Credit Coach</h1>
        <p className="text-white/80 text-sm">
          Personalized tips to improve your credit score
        </p>
        
        {/* Credit Score Circle */}
        <div className="flex justify-center mt-6">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="white"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(creditScore / 900) * 351.86} 351.86`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-white text-3xl">{creditScore}</span>
              <span className="text-white/80 text-xs">Good</span>
            </div>
          </div>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="px-6 py-6">
        <h2 className="text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#1D8FE1]" />
          Score Breakdown
        </h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
          {scoreBreakdown.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-sm text-gray-900">{item.label}</span>
                  <span className="text-xs text-gray-500 ml-2">({item.weight})</span>
                </div>
                <span className="text-sm text-gray-900">{item.score}/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`${item.color} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Personalized Tips */}
      <div className="px-6">
        <h2 className="text-gray-900 mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-[#1D8FE1]" />
          Personalized Tips
        </h2>
        <div className="space-y-3">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                {tip.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-900">{tip.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      tip.impact === 'High Impact' 
                        ? 'bg-red-50 text-red-600' 
                        : 'bg-yellow-50 text-yellow-600'
                    }`}>
                      {tip.impact}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
