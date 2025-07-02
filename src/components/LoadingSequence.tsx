import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Satellite, Globe, Zap } from 'lucide-react';

export const LoadingSequence: React.FC = () => {
  const icons = [Rocket, Satellite, Globe, Zap];
  
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="text-center">
        {/* Animated icon sequence */}
        <div className="flex justify-center space-x-4 mb-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotateY: -180 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0, 1.2, 1, 0],
                rotateY: [-180, 0, 0, 180]
              }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl"
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>
          ))}
        </div>

        {/* Main loading spinner */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full mx-auto"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border-4 border-blue-500/30 border-b-blue-500 rounded-full"
          />
        </motion.div>

        {/* Loading text with typewriter effect */}
        <motion.h2 
          className="text-3xl text-white font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 2, delay: 1 }}
            className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-purple-400"
          >
            Scanning the Cosmos...
          </motion.span>
        </motion.h2>

        {/* Loading steps */}
        <div className="space-y-2 max-w-md mx-auto">
          {[
            "Connecting to NASA databases...",
            "Analyzing space-time coordinates...",
            "Generating alternate realities...",
            "Calibrating quantum flux..."
          ].map((step, index) => (
            <motion.p
              key={index}
              className="text-purple-300 text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 + index * 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 1.5, 
                  delay: 1.5 + index * 0.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"
              />
              {step}
            </motion.p>
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          className="w-64 h-2 bg-gray-700 rounded-full mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, delay: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};