import { motion } from 'motion/react';
import { ArrowLeft, Gift, Zap, Crown, Star } from 'lucide-react';
import { Button } from './ui/button';

interface RewardsTierProps {
  currentTier: string;
  coins: number;
  onBack: () => void;
}

export function RewardsTier({ currentTier, coins, onBack }: RewardsTierProps) {
  const tiers = [
    { name: 'Bronze', minCoins: 0, color: 'from-orange-400 to-orange-600', icon: Star },
    { name: 'Silver', minCoins: 500, color: 'from-gray-300 to-gray-500', icon: Zap },
    { name: 'Gold', minCoins: 1000, color: 'from-yellow-400 to-yellow-600', icon: Crown },
    { name: 'Platinum', minCoins: 2000, color: 'from-purple-400 to-purple-600', icon: Gift },
  ];

  const rewards = [
    { name: 'Amazon Voucher', coins: 100, value: '₹100' },
    { name: 'Flipkart Voucher', coins: 100, value: '₹100' },
    { name: 'GST Filing Discount', coins: 200, value: '10% Off' },
    { name: 'Interest Rate Reduction', coins: 500, value: '0.5%' },
    { name: 'Credit Limit Boost', coins: 1000, value: '₹50,000' },
  ];

  const currentTierIndex = tiers.findIndex(t => t.name === currentTier);
  const nextTier = currentTierIndex < tiers.length - 1 ? tiers[currentTierIndex + 1] : null;
  const coinsToNext = nextTier ? nextTier.minCoins - coins : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] px-6 pt-12 pb-6">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-2xl mb-2">Rewards & Tier</h1>
        <p className="text-white/80 text-sm">
          Redeem MitraCoins for exciting rewards
        </p>
      </div>

      {/* Current Balance */}
      <div className="px-6 py-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="text-sm text-gray-600 mb-2">Your MitraCoins</div>
          <div className="text-4xl text-[#1D8FE1] mb-4">{coins}</div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span>Current Tier:</span>
            <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${
              tiers[currentTierIndex].color
            } text-white`}>
              {currentTier}
            </span>
          </div>
          {nextTier && (
            <div className="mt-3 text-sm text-gray-600">
              {coinsToNext} more coins to reach {nextTier.name}
            </div>
          )}
        </div>
      </div>

      {/* Tier Progress */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-900 mb-4">Tier Levels</h2>
        <div className="space-y-3">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            const isUnlocked = coins >= tier.minCoins;
            const isCurrent = tier.name === currentTier;
            
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-4 shadow-sm ${
                  isCurrent ? 'border-2 border-[#1D8FE1]' : ''
                } ${!isUnlocked ? 'opacity-50' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${tier.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900">{tier.name}</h3>
                    <p className="text-sm text-gray-600">{tier.minCoins}+ coins</p>
                  </div>
                  {isCurrent && (
                    <div className="px-3 py-1 bg-[#1D8FE1]/10 text-[#1D8FE1] text-xs rounded-full">
                      Current
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Rewards Catalog */}
      <div className="px-6">
        <h2 className="text-gray-900 mb-4">Redeem Rewards</h2>
        <div className="space-y-3">
          {rewards.map((reward, index) => {
            const canRedeem = coins >= reward.coins;
            
            return (
              <motion.div
                key={reward.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-4 shadow-sm ${
                  !canRedeem ? 'opacity-50' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-gray-900">{reward.name}</h3>
                    <p className="text-sm text-gray-600">Worth {reward.value}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#1D8FE1] flex items-center gap-1">
                      <Gift className="w-4 h-4" />
                      <span>{reward.coins}</span>
                    </div>
                  </div>
                </div>
                <Button
                  disabled={!canRedeem}
                  className={`w-full ${
                    canRedeem 
                      ? 'bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {canRedeem ? 'Redeem Now' : `Need ${reward.coins - coins} more coins`}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
