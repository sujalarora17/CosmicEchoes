import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, RefreshCw, Sparkles, Brain, Zap, X } from 'lucide-react';
import { StoryGenerator } from '../services/storyGenerator';
import { SpaceEvent } from '../data/events';

interface StoryGenerationPanelProps {
  event: SpaceEvent;
  onStoryGenerated: (story: any) => void;
  isVisible: boolean;
}

export const StoryGenerationPanel: React.FC<StoryGenerationPanelProps> = ({ 
  event, 
  onStoryGenerated, 
  isVisible 
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedStories, setGeneratedStories] = useState<any[]>([]);
  const [selectedStory, setSelectedStory] = useState<any>(null);

  const generateNewStory = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newStory = StoryGenerator.generateAlternateStory(event.title, event.description);
    setGeneratedStories(prev => [newStory, ...prev.slice(0, 2)]); // Keep last 3 stories
    onStoryGenerated(newStory);
    setIsGenerating(false);
  };

  const handleStoryClick = (story: any) => {
    setSelectedStory(story);
    onStoryGenerated(story);
  };

  const closeModal = () => {
    setSelectedStory(null);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AI Story Generator</h3>
                    <p className="text-purple-300 text-sm">Create infinite alternate realities</p>
                  </div>
                </div>
                
                <motion.button
                  onClick={generateNewStory}
                  disabled={isGenerating}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={isGenerating ? { rotate: 360 } : {}}
                      transition={{ duration: 1, repeat: isGenerating ? Infinity : 0 }}
                    >
                      {isGenerating ? <RefreshCw className="w-4 h-4" /> : <Wand2 className="w-4 h-4" />}
                    </motion.div>
                    <span>{isGenerating ? 'Generating...' : 'Generate New Story'}</span>
                  </div>
                </motion.button>
              </div>

              {isGenerating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-300">AI is crafting your alternate reality...</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                </motion.div>
              )}

              {generatedStories.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span>Generated Stories (Click to read full story)</span>
                  </h4>
                  
                  {generatedStories.map((story, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-xl border border-purple-500/20 cursor-pointer hover:border-purple-400/40 hover:bg-purple-800/40 transition-all duration-300"
                      onClick={() => handleStoryClick(story)}
                    >
                      <h5 className="font-semibold text-purple-200 mb-2">{story.title}</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        {story.description.length > 150 
                          ? `${story.description.substring(0, 150)}...` 
                          : story.description
                        }
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-purple-400">Timeline: {story.timeline}</div>
                        <div className="text-xs text-blue-400 font-medium">Click to read full story →</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/20">
                <div className="flex items-start space-x-3">
                  <Brain className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h5 className="font-semibold text-blue-300 mb-1">How AI Storytelling Works</h5>
                    <p className="text-gray-400 text-sm">
                      Our AI analyzes the original space event and generates scientifically-inspired alternate 
                      realities using advanced narrative templates, quantum physics concepts, and creative 
                      extrapolation to create unique "what if" scenarios.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900 border border-purple-500/40 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Full Story</h3>
                    <p className="text-purple-300 text-sm">{selectedStory.timeline}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-purple-800/50 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400 hover:text-white" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-purple-200 mb-3">{selectedStory.title}</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedStory.description}</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-xl border border-purple-500/20">
                  <h5 className="font-semibold text-purple-200 mb-2">Timeline Information</h5>
                  <p className="text-purple-300 text-sm">{selectedStory.timeline}</p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl text-white font-medium transition-all duration-300"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};