import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Rocket, Eye, Telescope, Zap, Star } from 'lucide-react';
import { SpaceEvent } from '../data/events';

interface EventCardProps {
  event: SpaceEvent;
  isAlternate: boolean;
}

const typeIcons = {
  discovery: Telescope,
  launch: Rocket,
  mission: Zap,
  observation: Eye,
  milestone: Star
};

export const EventCard: React.FC<EventCardProps> = ({ event, isAlternate }) => {
  const IconComponent = typeIcons[event.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-slate-900/90 via-purple-900/50 to-slate-900/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 -z-10" />
      
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2 text-sm text-purple-300 mb-1">
              <Calendar className="w-4 h-4" />
              <span>{isAlternate ? event.alternateReality.timeline : event.year}</span>
            </div>
            <div className="px-3 py-1 bg-purple-600/30 rounded-full text-xs text-purple-200 inline-block">
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </div>
          </div>
        </div>
        
        {isAlternate && (
          <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs text-white font-medium">
            Alternate Reality
          </div>
        )}
      </div>

      {/* Content */}
      <motion.div
        key={isAlternate ? 'alternate' : 'reality'}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
          {isAlternate ? event.alternateReality.title : event.title}
        </h2>
        
        <p className="text-gray-300 leading-relaxed text-lg">
          {isAlternate ? event.alternateReality.description : event.description}
        </p>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -20, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};