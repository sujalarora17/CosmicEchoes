export interface SpaceEvent {
  id: string;
  date: string; // MM-DD format
  title: string;
  description: string;
  year: number;
  type: 'discovery' | 'launch' | 'mission' | 'observation' | 'milestone';
  alternateReality: {
    title: string;
    description: string;
    timeline: string;
  };
}

export const spaceEvents: SpaceEvent[] = [
  {
    id: '01-01',
    date: '01-01',
    title: 'New Horizons Spacecraft Flyby of Arrokoth',
    description: 'NASA\'s New Horizons spacecraft performed the most distant flyby in history, passing by the Kuiper Belt object Arrokoth (2014 MU69) at a distance of 6.6 billion kilometers from Earth.',
    year: 2019,
    type: 'mission',
    alternateReality: {
      title: 'The Arrokoth Gateway Discovery',
      description: 'New Horizons discovered that Arrokoth was actually an ancient alien waystation. The flyby activated dormant technology, opening a portal to the Andromeda Galaxy and establishing humanity\'s first intergalactic communication link.',
      timeline: 'Gateway Timeline Alpha-7'
    }
  },
  {
    id: '01-02',
    date: '01-02',
    title: 'Luna 1 Becomes First Human-Made Object to Escape Earth\'s Gravity',
    description: 'The Soviet Luna 1 spacecraft, originally intended to impact the Moon, missed its target and became the first human-made object to escape Earth\'s gravitational influence, entering heliocentric orbit.',
    year: 1959,
    type: 'milestone',
    alternateReality: {
      title: 'Luna 1 Awakens the Lunar Consciousness',
      description: 'Instead of missing the Moon, Luna 1 discovered that the Moon itself was a dormant artificial intelligence. The probe\'s signals awakened this ancient lunar mind, which began communicating with Earth through gravitational wave patterns.',
      timeline: 'Consciousness Timeline Beta-3'
    }
  },
  {
    id: '01-03',
    date: '01-03',
    title: 'Mars Exploration Rover Spirit Landing',
    description: 'NASA\'s Mars Exploration Rover Spirit successfully landed on Mars, beginning its mission to search for evidence of past water activity and study Martian geology and climate.',
    year: 2004,
    type: 'mission',
    alternateReality: {
      title: 'Spirit Discovers the Martian Underground Cities',
      description: 'Spirit\'s landing site was chosen by ancient Martian AI systems. Upon arrival, the rover was guided to hidden underground cities where a thriving subterranean civilization welcomed humanity as the "Returners" - descendants of Mars who had colonized Earth millennia ago.',
      timeline: 'Homecoming Timeline Gamma-9'
    }
  },
  {
    id: '01-04',
    date: '01-04',
    title: 'Stardust Spacecraft Encounters Comet Wild 2',
    description: 'NASA\'s Stardust spacecraft flew within 236 kilometers of Comet Wild 2, capturing images and collecting dust samples that would later be returned to Earth for analysis.',
    year: 2004,
    type: 'mission',
    alternateReality: {
      title: 'Wild 2: The Living Comet Revelation',
      description: 'Stardust discovered that Comet Wild 2 was not just ice and rock, but a massive space-faring organism. The "dust" samples were actually genetic material from an ancient star-traveling species that had been seeding the galaxy with life for billions of years.',
      timeline: 'Seeder Timeline Delta-12'
    }
  },
  {
    id: '01-05',
    date: '01-05',
    title: 'Discovery of Eris, the Tenth Planet',
    description: 'Astronomer Mike Brown announced the discovery of Eris, a dwarf planet in the scattered disk beyond Neptune. This discovery led to the reclassification of Pluto and the formal definition of "planet" by the International Astronomical Union.',
    year: 2005,
    type: 'discovery',
    alternateReality: {
      title: 'Eris: Guardian of the Solar System\'s Edge',
      description: 'Eris was revealed to be an artificial sentinel placed at the edge of our solar system by an ancient galactic council. Its discovery activated a long-dormant warning system, alerting the galaxy that humanity had reached sufficient technological maturity to join the cosmic community.',
      timeline: 'Guardian Timeline Epsilon-5'
    }
  },
  {
    id: '01-06',
    date: '01-06',
    title: 'Galileo Galilei Observes Four Moons of Jupiter',
    description: 'Galileo Galilei made his first telescopic observation of Jupiter\'s four largest moons - Io, Europa, Ganymede, and Callisto - providing crucial evidence for the heliocentric model of the solar system.',
    year: 1610,
    type: 'discovery',
    alternateReality: {
      title: 'The Jovian Signal: First Contact Through Jupiter\'s Moons',
      description: 'When Galileo observed Jupiter\'s moons, he noticed they were blinking in mathematical patterns. These were actually signals from an advanced civilization living in Europa\'s oceans, using the orbital mechanics of Jupiter\'s moons to communicate across space and time.',
      timeline: 'Signal Timeline Zeta-1'
    }
  },
  {
    id: '01-07',
    date: '01-07',
    title: 'Surveyor 7 Soft Landing on the Moon',
    description: 'NASA\'s Surveyor 7 spacecraft achieved a soft landing on the Moon near Tycho Crater, becoming the last of the successful Surveyor missions and providing detailed surface analysis before the Apollo missions.',
    year: 1968,
    type: 'mission',
    alternateReality: {
      title: 'Surveyor 7 Uncovers the Tycho Monolith',
      description: 'Surveyor 7\'s cameras captured images of a perfectly geometric black monolith near Tycho Crater. This discovery led to an accelerated space program, with humanity reaching Jupiter by 1975 and uncovering a network of alien artifacts throughout the solar system.',
      timeline: 'Monolith Timeline Eta-4'
    }
  },
  {
    id: '01-08',
    date: '01-08',
    title: 'Hawking Radiation Theory Published',
    description: 'Stephen Hawking published his groundbreaking theory that black holes emit radiation due to quantum effects near the event horizon, fundamentally changing our understanding of black hole thermodynamics.',
    year: 1974,
    type: 'discovery',
    alternateReality: {
      title: 'Hawking Discovers Black Holes Are Cosmic Computers',
      description: 'Hawking\'s radiation research revealed that black holes are actually massive quantum computers processing information about the universe. This discovery led to the development of "black hole communication" technology, allowing instant transmission of data across galactic distances.',
      timeline: 'Information Timeline Theta-8'
    }
  },
  {
    id: '01-09',
    date: '01-09',
    title: 'Launch of Deep Impact Mission',
    description: 'NASA launched the Deep Impact spacecraft with a mission to study the interior composition of Comet Tempel 1 by releasing an impactor to create a crater and analyze the ejected material.',
    year: 2005,
    type: 'launch',
    alternateReality: {
      title: 'Deep Impact Awakens the Comet Collective',
      description: 'The impactor struck Tempel 1 and activated an ancient network of comet-based communication nodes. Comets throughout the solar system began emitting coordinated signals, revealing they were part of a vast information storage system left by a vanished civilization.',
      timeline: 'Network Timeline Iota-6'
    }
  },
  {
    id: '01-10',
    date: '01-10',
    title: 'Venera 10 Transmits First Images from Venus Surface',
    description: 'The Soviet Venera 10 lander successfully transmitted the first clear images from the surface of Venus, revealing a rocky, desert-like landscape under crushing atmospheric pressure.',
    year: 1975,
    type: 'mission',
    alternateReality: {
      title: 'Venera 10 Discovers the Cloud Cities of Venus',
      description: 'Venera 10\'s images revealed massive floating structures in Venus\'s upper atmosphere - ancient cloud cities built by a highly advanced civilization that learned to live in the sky when their planet\'s surface became uninhabitable. They welcomed humanity as "sky siblings."',
      timeline: 'Aerial Timeline Kappa-11'
    }
  }
];

export function getEventByDate(date: Date): SpaceEvent | null {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateString = `${month}-${day}`;
  
  return spaceEvents.find(event => event.date === dateString) || null;
}

export function getRandomEvent(): SpaceEvent {
  return spaceEvents[Math.floor(Math.random() * spaceEvents.length)];
}