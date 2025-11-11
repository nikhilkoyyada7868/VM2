import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, CreditCard, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface ConnectMoreDataProps {
  onBack: () => void;
  onComplete: () => void;
}

export function ConnectMoreData({ onBack, onComplete }: ConnectMoreDataProps) {
  const [connected, setConnected] = useState<string[]>([]);

  const dataProviders = [
    { 
      id: 'amazon', 
      name: 'Amazon Seller', 
      icon: ShoppingCart, 
      description: 'E-commerce sales data',
      boost: '+15 points'
    },
    { 
      id: 'razorpay', 
      name: 'Razorpay', 
      icon: CreditCard, 
      description: 'Payment gateway data',
      boost: '+12 points'
    },
    { 
      id: 'utility', 
      name: 'Utility Bills', 
      icon: Zap, 
      description: 'Regular payment history',
      boost: '+8 points'
    },
  ];

  const handleConnect = (id: string) => {
    if (!connected.includes(id)) {
      setConnected([...connected, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] px-6 pt-12 pb-6">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-2xl mb-2">Connect More Data</h1>
        <p className="text-white/80 text-sm">
          Link additional data sources to boost your credit score
        </p>
      </div>

      {/* Data Providers */}
      <div className="px-6 py-6 space-y-4">
        {dataProviders.map((provider, index) => {
          const Icon = provider.icon;
          const isConnected = connected.includes(provider.id);
          
          return (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1D8FE1]/10 to-[#2E8B57]/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#1D8FE1]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-900">{provider.name}</h3>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {provider.boost}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{provider.description}</p>
                  {isConnected ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm">Connected</span>
                    </div>
                  ) : (
                    <Button
                      onClick={() => handleConnect(provider.id)}
                      variant="outline"
                      className="w-full"
                    >
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Complete Button */}
      {connected.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto p-6 bg-white border-t border-gray-200">
          <Button
            onClick={onComplete}
            className="w-full h-12 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white rounded-xl"
          >
            Done ({connected.length} connected)
          </Button>
        </div>
      )}
    </div>
  );
}
