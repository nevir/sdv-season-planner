import { Quest, Season } from './types';

// Dated Quests

export const JodisRequest: Quest = {
  name: `Jodi's Request`,
  year: 1,
  season: Season.Spring,
  day: 19,
};

export const ClintsAttempt: Quest = {
  name: `Clint's Attempt`,
  year: 1,
  season: Season.Winter,
  day: 6,
};

export const CatchASquid: Quest = {
  name: `Catch A Squid`,
  year: 1,
  season: Season.Winter,
  day: 2,
};

export const CatchALingcod: Quest = {
  name: `Catch A Lingcod`,
  year: 1,
  season: Season.Winter,
  day: 13,
};

export const FishStew: Quest = {
  name: `Fish Stew`,
  year: 1,
  season: Season.Winter,
  day: 26,
};

export const GrannysGift: Quest = {
  name: `Granny's Gift`,
  year: 2,
  season: Season.Spring,
  day: 15,
};

export const AquaticResearch: Quest = {
  name: `Aquatic Research`,
  year: 2,
  season: Season.Summer,
  day: 6,
};

// Special Quests

export const TheMysteriousQi: Quest = {
  name: `The Mysterious Qi`,
  notes: `Begin by placing a Battery Pack in the lock-box in the tunnel next to the bus stop`,
};

export const FishCasserole: Quest = {
  name: `Fish Casserole`,
  notes: `Once you reach 4 hearts with Jodi`,
};
