import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface DateDisplayProps {
  currentDate: Date;
}

export const DateDisplay: React.FC<DateDisplayProps> = ({ currentDate }) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center space-x-3 mb-8 p-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-2xl backdrop-blur-sm border border-purple-500/30"
    >
      <Calendar className="w-6 h-6 text-purple-400" />
      <span className="text-lg md:text-xl text-white font-medium">
        {formatDate(currentDate)}
      </span>
    </motion.div>
  );
};