export interface AlternateStory {
  title: string;
  description: string;
  timeline: string;
}

export class StoryGenerator {
  private static alternateTimelines = [
    'Quantum Divergence Alpha',
    'Parallel Reality Beta',
    'Temporal Shift Gamma',
    'Dimensional Echo Delta',
    'Cosmic Branch Epsilon',
    'Reality Fracture Zeta',
    'Timeline Nexus Theta',
    'Multiverse Node Kappa'
  ];

  private static storyTemplates = [
    {
      prefix: 'Instead of {original}, scientists discovered that',
      scenarios: [
        'the celestial body was actually an ancient alien artifact',
        'the event triggered a dormant quantum field that connected Earth to distant galaxies',
        'the phenomenon revealed a hidden dimension where time flows backwards',
        'the discovery activated an intergalactic communication network',
        'the object was a seed ship from a dying civilization',
        'the event opened a portal to a parallel universe where physics work differently'
      ]
    },
    {
      prefix: 'In this timeline, {original} led to',
      scenarios: [
        'humanity developing faster-than-light travel within a decade',
        'the awakening of a planetary consciousness that had been dormant for millennia',
        'first contact with a benevolent alien species living in our solar system',
        'the discovery that our universe is actually a simulation',
        'the revelation that Earth is a nature preserve maintained by advanced beings',
        'the unlocking of psychic abilities in a small percentage of the human population'
      ]
    },
    {
      prefix: 'What appeared to be {original} was actually',
      scenarios: [
        'a test conducted by time travelers from the future',
        'the final piece of an ancient cosmic puzzle left by the universe\'s creators',
        'a beacon activated by humanity reaching a certain level of consciousness',
        'the birth cry of a new form of life that exists in the vacuum of space',
        'a message encoded in the fabric of spacetime itself',
        'the key to unlocking the true purpose of dark matter and dark energy'
      ]
    }
  ];

  static generateAlternateStory(originalTitle: string, originalDescription: string): AlternateStory {
    const template = this.storyTemplates[Math.floor(Math.random() * this.storyTemplates.length)];
    const scenario = template.scenarios[Math.floor(Math.random() * template.scenarios.length)];
    const timeline = this.alternateTimelines[Math.floor(Math.random() * this.alternateTimelines.length)];
    
    // Extract key elements from original title for alternate version
    const keyWords = originalTitle.split(' ').filter(word => 
      word.length > 3 && !['the', 'and', 'for', 'with', 'from'].includes(word.toLowerCase())
    );
    
    const alternateTitle = this.generateAlternateTitle(originalTitle, keyWords);
    const alternateDescription = template.prefix.replace('{original}', originalTitle.toLowerCase()) + ' ' + scenario + '. ' + this.addTechnicalDetails();
    
    return {
      title: alternateTitle,
      description: alternateDescription,
      timeline: timeline
    };
  }

  private static generateAlternateTitle(originalTitle: string, keyWords: string[]): string {
    const alternatePrefixes = [
      'The Hidden Truth Behind',
      'Quantum Revelation:',
      'Interdimensional Discovery:',
      'The Secret of',
      'Cosmic Awakening:',
      'Parallel Event:',
      'The Real Story of',
      'Multiverse Incident:'
    ];
    
    const prefix = alternatePrefixes[Math.floor(Math.random() * alternatePrefixes.length)];
    const mainElement = keyWords[Math.floor(Math.random() * keyWords.length)] || 'the Event';
    
    return `${prefix} ${mainElement}`;
  }

  private static addTechnicalDetails(): string {
    const details = [
      'Quantum resonance patterns indicated the presence of exotic matter.',
      'Gravitational wave detectors recorded impossible signatures.',
      'The event caused temporary alterations in the fundamental constants of physics.',
      'Satellite imagery revealed geometric patterns invisible to the naked eye.',
      'Radio telescopes detected structured signals embedded in cosmic background radiation.',
      'The phenomenon triggered spontaneous formation of complex organic molecules in nearby space.',
      'Magnetic field fluctuations suggested the presence of a massive, cloaked object.',
      'Spectral analysis revealed elements that shouldn\'t exist according to current physics.'
    ];
    
    return details[Math.floor(Math.random() * details.length)];
  }
}