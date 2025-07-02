import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnhancedStarField } from './components/EnhancedStarField';
import { Header } from './components/Header';
import { DateDisplay } from './components/DateDisplay';
import { AnimatedEventCard } from './components/AnimatedEventCard';
import { ToggleButton } from './components/ToggleButton';
import { StoryModeToggle } from './components/StoryModeToggle';
import { StoryGenerationPanel } from './components/StoryGenerationPanel';
import { LoadingSequence } from './components/LoadingSequence';
import { getEventByDate, getRandomEvent, SpaceEvent } from './data/events';
import { useNASAData } from './hooks/useNASAData';
import { StoryGenerator } from './services/storyGenerator';

function App() {
  const [currentDate] = useState(new Date());
  const [currentEvent, setCurrentEvent] = useState<SpaceEvent | null>(null);
  const [isAlternate, setIsAlternate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [enhancedEvent, setEnhancedEvent] = useState<SpaceEvent | null>(null);
  const [isStoryMode, setIsStoryMode] = useState(false);
  const [currentStory, setCurrentStory] = useState<any>(null);

  const { nasaEvent, loading: nasaLoading } = useNASAData(currentDate);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      let todayEvent = getEventByDate(currentDate);
      
      if (!todayEvent) {
        todayEvent = getRandomEvent();
      }

      // Enhance the event with AI-generated alternate reality if it doesn't have one
      if (todayEvent && !todayEvent.alternateReality.description.includes('ancient')) {
        const alternateStory = StoryGenerator.generateAlternateStory(
          todayEvent.title,
          todayEvent.description
        );
        
        const enhanced = {
          ...todayEvent,
          alternateReality: alternateStory
        };
        
        setEnhancedEvent(enhanced);
        setCurrentEvent(enhanced);
      } else {
        setCurrentEvent(todayEvent);
        setEnhancedEvent(todayEvent);
      }
      
      setIsLoading(false);
    }, 3000); // Extended loading for dramatic effect

    return () => clearTimeout(loadingTimer);
  }, [currentDate]);

  const handleToggle = () => {
    setIsAlternate(!isAlternate);
  };

  const handleStoryModeToggle = () => {
    setIsStoryMode(!isStoryMode);
  };

  const handleStoryGenerated = (story: any) => {
    setCurrentStory(story);
    setIsAlternate(true); // Switch to alternate view to show the new story
  };

  if (isLoading) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <EnhancedStarField />
        <div className="relative z-10">
          <LoadingSequence />
        </div>
      </div>
    );
  }

  if (!currentEvent) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <EnhancedStarField />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto px-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full mx-auto mb-6"
            />
            <h2 className="text-3xl text-white font-bold mb-4">
              Quantum Void Detected
            </h2>
            <p className="text-gray-300 text-lg">
              The cosmic timeline appears to be empty at this coordinate. 
              The universe holds its breath in anticipation of future events.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Use current story if available, otherwise use the event's alternate reality
  const displayEvent = currentStory ? {
    ...currentEvent,
    alternateReality: currentStory
  } : enhancedEvent || currentEvent;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <EnhancedStarField />
      
      <div className="relative z-10 container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
          
          <div className="max-w-5xl mx-auto">
            <DateDisplay currentDate={currentDate} />
            
            {/* Story Mode Toggle */}
            <StoryModeToggle 
              isStoryMode={isStoryMode} 
              onToggle={handleStoryModeToggle} 
            />
            
            {/* Story Generation Panel */}
            <StoryGenerationPanel
              event={currentEvent}
              onStoryGenerated={handleStoryGenerated}
              isVisible={isStoryMode}
            />
            
            <div className="mb-12">
              <AnimatePresence mode="wait">
                <AnimatedEventCard 
                  key={isAlternate ? 'alternate' : 'reality'}
                  event={displayEvent} 
                  nasaEvent={nasaEvent}
                  isAlternate={isAlternate} 
                />
              </AnimatePresence>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex justify-center"
            >
              <ToggleButton 
                isAlternate={isAlternate} 
                onToggle={handleToggle} 
              />
            </motion.div>

            {/* NASA Data Status */}
            {nasaLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-8"
              >
                <p className="text-purple-300 text-sm">
                  Loading NASA astronomical data...
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-6 py-3 rounded-lg z-50 font-medium shadow-lg focus:shadow-xl transition-all"
      >
        Skip to main content
      </a>
      
      <div id="main-content" className="sr-only">
        Cosmic Echoes main content: Space events and alternate realities
      </div>
    </div>
  );
}

export default App;