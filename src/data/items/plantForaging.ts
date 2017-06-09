import * as bundles from '../bundles';
import * as quests from '../quests';
import { Item, Person, Season } from '../types';

// Spring

export const Daffodil: Item = {
  name: `Daffodil`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringForaging },
    { bounty: 90 },
    { love: Person.Sandy },
  ],
};

export const Dandelion: Item = {
  name: `Dandelion`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringForaging },
    { bounty: 120 },
  ],
};

export const Leek: Item = {
  name: `Leek`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringForaging },
    { bounty: 180 },
    { love: Person.George },
    { quest: quests.GrannysGift },
  ],
};

export const WildHorseradish: Item = {
  name: `Wild Horseradish`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringForaging },
    { bounty: 150 },
    { love: Person.Krobus },
  ],
};

// Summer

export const FiddleheadFerm: Item = {
  name: `Fiddlehead Ferm`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Summer],
  uses: [
    { bundle: bundles.Chef },
  ],
};

export const Grape: Item = {
  name: `Grape`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Summer],
  uses: [
    { bundle: bundles.SummerForaging },
    { bounty: 240 },
    { love: Person.Vincent },
  ],
};

export const SpiceBerry: Item = {
  name: `Spice Berry`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Summer],
  uses: [
    { bundle: bundles.SummerForaging },
    { bounty: 240 },
  ],
};

export const SweetPea: Item = {
  name: `Sweet Pea`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Summer],
  uses: [
    { bundle: bundles.SummerForaging },
    { bounty: 150 },
    { love: Person.Sandy },
  ],
};

// Fall

export const Blackberry: Item = {
  name: `Blackberry`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Fall],
  uses: [
    { bundle: bundles.FallForaging },
    { bounty: 60 },
  ],
};

export const Hazelnut: Item = {
  name: `Hazelnut`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Fall],
  uses: [
    { bundle: bundles.FallForaging },
    { bounty: 270 },
  ],
};

export const WildPlum: Item = {
  name: `Wild Plum`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Fall],
  uses: [
    { bundle: bundles.FallForaging },
    { bounty: 240 },
  ],
};

// Winter

export const Crocus: Item = {
  name: `Crocus`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Winter],
  uses: [
    { bundle: bundles.WinterForaging },
    { bounty: 180 },
    { love: Person.Sandy },
  ],
};

export const CrystalFruit: Item = {
  name: `Crystal Fruit`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Winter],
  uses: [
    { bundle: bundles.WinterForaging },
    { bounty: 450 },
  ],
};

export const SnowYam: Item = {
  name: `Snow Yam`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Winter],
  uses: [
    { bundle: bundles.WinterForaging },
    { bounty: 300 },
  ],
};

export const WinterRoot: Item = {
  name: `Winter Root`,
  source: Item.Source.PlantForaging,
  seasons: [Season.Winter],
  uses: [
    { bundle: bundles.WinterForaging },
    { bounty: 140 },
  ],
};
