import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Building, 
  FileText, 
  Calendar,
  ArrowRight,
  Settings as SettingsIcon,
  Award,
  BarChart3,
  Wallet,
  Database,
  Shield,
  Zap
} from 'lucide-react';
import { Button } from './ui/button';
import { UserData, Screen } from '../App';

interface DashboardProps {
  userData: UserData;
  onNavigate: (screen: Screen) => void;
}

export function Dashboard({ userData, onNavigate }: DashboardProps) {
  const creditUtilization = ((userData.creditLimit! - userData.availableLimit!) / userData.creditLimit!) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] rounded-b-3xl px-6 pt-8 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-white/80 text-sm mb-1">Hello,</p>
            <h1 className="text-white text-2xl">{userData.businessName || 'Business'} 👋</h1>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => onNavigate('gamification')}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
            >
              <Award className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => onNavigate('settings')}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
            >
              <SettingsIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Credit Coins */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 inline-flex">
          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xs">🪙</span>
          </div>
          <span className="text-white">{userData.coins || 0} MitraCoins</span>
        </div>

        {/* Credit Journey Map */}
        <div className="mt-4">
          <p className="text-white/80 text-xs mb-2">Credit Journey</p>
          <div className="flex items-center gap-2">
            {['Bronze', 'Silver', 'Gold', 'Platinum'].map((tier, idx) => {
              const isActive = 
                (tier === 'Bronze' && userData.creditScore! >= 650) ||
                (tier === 'Silver' && userData.creditScore! >= 700) ||
                (tier === 'Gold' && userData.creditScore! >= 750) ||
                (tier === 'Platinum' && userData.creditScore! >= 800);
              
              const tierColor = 
                tier === 'Bronze' ? 'bg-orange-500' :
                tier === 'Silver' ? 'bg-gray-400' :
                tier === 'Gold' ? 'bg-yellow-400' :
                'bg-purple-400';
              
              const textColor = 
                tier === 'Bronze' ? 'text-orange-300' :
                tier === 'Silver' ? 'text-gray-300' :
                tier === 'Gold' ? 'text-yellow-300' :
                'text-purple-300';
              
              return (
                <div key={tier} className="flex-1">
                  <div className={`h-1.5 rounded-full ${
                    isActive ? tierColor : 'bg-white/20'
                  }`} />
                  <p className={`text-xs mt-1 ${isActive ? textColor : 'text-white/50'}`}>
                    {tier}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-6 -mt-16 pb-8">
        {/* Credit Limit Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-lg mb-6"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-gray-600 text-sm mb-1">Available Credit</p>
              <h2 className="text-3xl">₹{(userData.availableLimit! / 100000).toFixed(1)}L</h2>
              <p className="text-gray-500 text-sm mt-1">of ₹{(userData.creditLimit! / 100000).toFixed(0)}L limit</p>
            </div>
            <div className="w-20 h-20 relative">
              {/* Circular Progress */}
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: `0 ${2 * Math.PI * 32}` }}
                  animate={{ 
                    strokeDasharray: `${(userData.availableLimit! / userData.creditLimit!) * 2 * Math.PI * 32} ${2 * Math.PI * 32}` 
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D8FE1" />
                    <stop offset="100%" stopColor="#2E8B57" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm">{Math.round((userData.availableLimit! / userData.creditLimit!) * 100)}%</span>
              </div>
            </div>
          </div>

          <Button
            onClick={() => onNavigate('loan-application')}
            className="w-full h-12 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white rounded-xl"
          >
            Get Working Capital Now
          </Button>
        </motion.div>

        {/* Data Strength Meter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-4 mb-6 border border-purple-200"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-600" />
              <div>
                <h3 className="text-gray-800 text-sm">Data Strength</h3>
                <p className="text-xs text-gray-600">4 of 6 sources connected</p>
              </div>
            </div>
            <span className="text-purple-700 text-xl">67%</span>
          </div>
          
          <div className="relative w-full h-2 bg-white rounded-full overflow-hidden mb-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '67%' }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-indigo-500"
            />
          </div>

          <div className="flex items-start gap-2 bg-white rounded-xl p-2">
            <Shield className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700">
              Connect 2 more data sources to reduce interest rate by 0.5% and unlock Platinum benefits
            </p>
          </div>
          
          <button
            onClick={() => onNavigate('connect-data')}
            className="w-full h-9 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl mt-3 text-sm flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Connect More Data
          </button>
        </motion.div>

        {/* Health Tiles */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { icon: TrendingUp, label: 'GST Health', value: '92/100', color: 'from-green-400 to-green-600' },
            { icon: Building, label: 'Bank Stability', value: 'Strong', color: 'from-blue-400 to-blue-600' },
            { icon: FileText, label: 'Pending PO Value', value: '₹2.3L', color: 'from-purple-400 to-purple-600' },
            { icon: Calendar, label: 'Next EMI Due', value: '15 Nov', color: 'from-orange-400 to-orange-600' },
          ].map((tile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${tile.color} rounded-xl flex items-center justify-center mb-3`}>
                <tile.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-600 text-xs mb-1">{tile.label}</p>
              <p className="text-lg">{tile.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h3 className="text-gray-700">Quick Actions</h3>
          {[
            { icon: Wallet, label: 'View Repayment Schedule', screen: 'repayment' as Screen },
            { icon: BarChart3, label: 'Business Analytics', screen: 'analytics' as Screen },
            { icon: Award, label: 'Rewards & Levels', screen: 'gamification' as Screen },
          ].map((action, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + 0.1 * index }}
              onClick={() => onNavigate(action.screen)}
              className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center">
                  <action.icon className="w-5 h-5 text-[#1D8FE1]" />
                </div>
                <span className="text-gray-700">{action.label}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          ))}
        </div>

        {/* Credit Score Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-4"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              💡
            </div>
            <div>
              <p className="text-sm mb-1">Boost your credit limit</p>
              <p className="text-xs text-gray-600">File GSTR-3B on time to increase your limit by ₹50K. Maintain &lt;2 bounces to reach Platinum tier.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}