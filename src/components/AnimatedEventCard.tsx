import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Calendar, Rocket, Eye, Telescope, Zap, Star } from 'lucide-react';
import { SpaceEvent } from '../data/events';
import { NASAEvent } from '../services/nasaApi';

interface AnimatedEventCardProps {
  event: SpaceEvent;
  nasaEvent?: NASAEvent | null;
  isAlternate: boolean;
}

const typeIcons = {
  discovery: Telescope,
  launch: Rocket,
  mission: Zap,
  observation: Eye,
  milestone: Star
};

export const AnimatedEventCard: React.FC<AnimatedEventCardProps> = ({ 
  event, 
  nasaEvent, 
  isAlternate 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const IconComponent = typeIcons[event.type];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gradient-to-br from-slate-900/95 via-purple-900/60 to-slate-900/95 backdrop-blur-sm border border-purple-500/40 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 cursor-pointer group"
    >
      {/* Enhanced glow effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        animate={{ 
          background: [
            'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
            'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))',
            'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Header with enhanced animations */}
      <motion.div 
        className="flex items-start justify-between mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div 
            className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconComponent className="w-7 h-7 text-white relative z-10" />
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
          
          <div>
            <motion.div 
              className="flex items-center space-x-2 text-sm text-purple-300 mb-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Calendar className="w-4 h-4" />
              <span className="font-medium">
                {isAlternate ? event.alternateReality.timeline : event.year}
              </span>
            </motion.div>
            
            <motion.div 
              className="px-4 py-2 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-full text-xs text-purple-200 inline-block font-medium border border-purple-500/30"
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring" }}
            >
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </motion.div>
          </div>
        </div>
        
        {isAlternate && (
          <motion.div 
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs text-white font-bold shadow-lg"
            initial={{ scale: 0, rotate: -10 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            Alternate Reality
          </motion.div>
        )}
      </motion.div>

      {/* Content with staggered animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {isAlternate ? event.alternateReality.title : event.title}
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 leading-relaxed text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          {isAlternate ? event.alternateReality.description : event.description}
        </motion.p>
      </motion.div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Interactive border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          background: 'linear-gradient(45deg, transparent, transparent)',
          backgroundSize: '200% 200%'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
};