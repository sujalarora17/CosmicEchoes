import React from 'react';
import { motion } from 'framer-motion';
import { Shuffle, RotateCcw } from 'lucide-react';

interface ToggleButtonProps {
  isAlternate: boolean;
  onToggle: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ isAlternate, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
      
      <div className="flex items-center space-x-3">
        <motion.div
          animate={{ rotate: isAlternate ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isAlternate ? (
            <RotateCcw className="w-5 h-5" />
          ) : (
            <Shuffle className="w-5 h-5" />
          )}
        </motion.div>
        <span>
          {isAlternate ? 'Return to Reality' : 'Enter Alternate Timeline'}
        </span>
      </div>
      
      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/50 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: '50%',
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.button>
  );
};