import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Zap } from 'lucide-react';

interface StoryModeToggleProps {
  isStoryMode: boolean;
  onToggle: () => void;
}

export const StoryModeToggle: React.FC<StoryModeToggleProps> = ({ isStoryMode, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex justify-center mb-8"
    >
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative group px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 ${
          isStoryMode 
            ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white' 
            : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white'
        }`}
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10 ${
          isStoryMode 
            ? 'bg-gradient-to-r from-orange-600 to-red-600' 
            : 'bg-gradient-to-r from-purple-600 to-blue-600'
        }`} />
        
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ rotate: isStoryMode ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {isStoryMode ? (
              <Zap className="w-5 h-5" />
            ) : (
              <BookOpen className="w-5 h-5" />
            )}
          </motion.div>
          <span>
            {isStoryMode ? 'AI Story Mode Active' : 'Enable AI Storytelling'}
          </span>
          <Sparkles className="w-4 h-4" />
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
    </motion.div>
  );
};