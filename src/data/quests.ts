import { Quest, Season } from './types';

// Dated Quests

export const GrannysGift: Quest = {
  name: `Granny's Gift`,
  year: 2,
  season: Season.Spring,
  day: 15,
};

export const ClintsAttempt: Quest = {
  name: `Clint's Attempt`,
  year: 1,
  season: Season.Winter,
  day: 6,
};

// Special Quests

export const TheMysteriousQi: Quest = {
  name: `The Mysterious Qi`,
  notes: `Begin by placing a Battery Pack in the lock-box in the tunnel next to the bus stop`,
};
