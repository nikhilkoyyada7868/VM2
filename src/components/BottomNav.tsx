import { Home, TrendingUp, Gift, User, Sparkles } from 'lucide-react';
import { Screen } from '../App';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { screen: 'dashboard' as Screen, icon: Home, label: 'Home' },
    { screen: 'credit-coach' as Screen, icon: TrendingUp, label: 'Coach' },
    { screen: 'growth-insights' as Screen, icon: Sparkles, label: 'Insights' },
    { screen: 'rewards-tier' as Screen, icon: Gift, label: 'Rewards' },
    { screen: 'settings' as Screen, icon: User, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto bg-white border-t border-gray-200 px-2 py-2 z-50">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = currentScreen === item.screen;
          const Icon = item.icon;
          
          return (
            <button
              key={item.screen}
              onClick={() => onNavigate(item.screen)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                isActive 
                  ? 'bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] text-white' 
                  : 'text-gray-600 hover:text-[#1D8FE1]'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
