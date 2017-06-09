import * as bundles from '../bundles';
import * as quests from '../quests';
import { Item, Person, Season } from '../types';

// Any Season

export const CaveCarrot: Item = {
  name: `Cave Carrot`,
  source: Item.Source.Foraging,
  uses: [
    { bundle: bundles.ExoticForaging },
    { bounty: 75 },
  ],
};

export const Clam: Item = {
  name: `Clam`,
  source: Item.Source.Foraging,
  uses: [
    { bundle: bundles.CrabPot },
  ],
};

export const Cockle: Item = {
  name: `Cockle`,
  source: Item.Source.Foraging,
  uses: [
    { bundle: bundles.CrabPot },
  ],
};

export const Mussel: Item = {
  name: `Mussel`,
  source: Item.Source.Foraging,
  uses: [
    { bundle: bundles.CrabPot },
  ],
};

export const Oyster: Item = {
  name: `Oyster`,
  source: Item.Source.Foraging,
  uses: [
    { bundle: bundles.CrabPot },
  ],
};

export const PurpleMushroom: Item = {
  name: `Purple Mushroom`,
  source: Item.Source.Foraging,
  uses: [
    { bundle: bundles.FieldResearch },
    { bundle: bundles.ExoticForaging },
    { bounty: 750 },
    { love: Person.Wizard },
  ],
  notes: `Found in the Mines (82+)`,
};

export const SeaUrchin: Item = {
  name: `Sea Urchin`,
  source: Item.Source.Foraging,
  uses: [
    { bundle: bundles.Dye },
  ],
};

// Multiple Seasons

export const CommonMushroom: Item = {
  name: `Common Mushroom`,
  source: Item.Source.Foraging,
  seasons: [Season.Spring, Season.Fall],
  notes: `During Spring, only found in Secret Woods`,
  uses: [
    { bundle: bundles.FallForaging },
    { bounty: 120 },
  ],
};

export const RedMushroom: Item = {
  name: `Red Mushroom`,
  source: Item.Source.Foraging,
  seasons: [Season.Summer, Season.Fall],
  uses: [
    { bundle: bundles.Dye },
    { bundle: bundles.ExoticForaging },
    { bounty: 225 },
  ],
  notes: `Found in the Secret Woods, or Mines (27+)`,
};

// Spring

export const Daffodil: Item = {
  name: `Daffodil`,
  source: Item.Source.Foraging,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringForaging },
    { bounty: 90 },
    { love: Person.Sandy },
  ],
};

export const Dandelion: Item = {
  name: `Dandelion`,
  source: Item.Source.Foraging,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringForaging },
    { bounty: 120 },
  ],
};

export const Leek: Item = {
  name: `Leek`,
  source: Item.Source.Foraging,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringForaging },
    { bounty: 180 },
    { love: Person.George },
    { quest: quests.GrannysGift },
  ],
};

export const Morel: Item = {
  name: `Morel`,
  source: Item.Source.Foraging,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.ExoticForaging },
  ],
  notes: `Only found in secret woods or forest farm`,
};

export const WildHorseradish: Item = {
  name: `Wild Horseradish`,
  source: Item.Source.Foraging,
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
  source: Item.Source.Foraging,
  seasons: [Season.Summer],
  uses: [
    { bundle: bundles.Chef },
  ],
};

export const Grape: Item = {
  name: `Grape`,
  source: Item.Source.Foraging,
  seasons: [Season.Summer],
  uses: [
    { bundle: bundles.SummerForaging },
    { bounty: 240 },
    { love: Person.Vincent },
  ],
};

export const RainbowShell: Item = {
  name: `Rainbow Shell`,
  source: Item.Source.Foraging,
  seasons: [Season.Summer],
  uses: [
    { quest: quests.TheMysteriousQi },
  ],
};

export const SpiceBerry: Item = {
  name: `Spice Berry`,
  source: Item.Source.Foraging,
  seasons: [Season.Summer],
  uses: [
    { bundle: bundles.SummerForaging },
    { bounty: 240 },
  ],
};

export const SweetPea: Item = {
  name: `Sweet Pea`,
  source: Item.Source.Foraging,
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
  source: Item.Source.Foraging,
  seasons: [Season.Fall],
  uses: [
    { bundle: bundles.FallForaging },
    { bounty: 60 },
  ],
};

export const Hazelnut: Item = {
  name: `Hazelnut`,
  source: Item.Source.Foraging,
  seasons: [Season.Fall],
  uses: [
    { bundle: bundles.FallForaging },
    { bounty: 270 },
  ],
};

export const WildPlum: Item = {
  name: `Wild Plum`,
  source: Item.Source.Foraging,
  seasons: [Season.Fall],
  uses: [
    { bundle: bundles.FallForaging },
    { bounty: 240 },
  ],
};

// Winter

export const Crocus: Item = {
  name: `Crocus`,
  source: Item.Source.Foraging,
  seasons: [Season.Winter],
  uses: [
    { bundle: bundles.WinterForaging },
    { bounty: 180 },
    { love: Person.Sandy },
  ],
};

export const CrystalFruit: Item = {
  name: `Crystal Fruit`,
  source: Item.Source.Foraging,
  seasons: [Season.Winter],
  uses: [
    { bundle: bundles.WinterForaging },
    { bounty: 450 },
  ],
};

export const NautilusShell: Item = {
  name: `Nautilus Shell`,
  source: Item.Source.Foraging,
  seasons: [Season.Winter],
  uses: [
    { bundle: bundles.FieldResearch },
  ],
};

export const SnowYam: Item = {
  name: `Snow Yam`,
  source: Item.Source.Foraging,
  seasons: [Season.Winter],
  uses: [
    { bundle: bundles.WinterForaging },
    { bounty: 300 },
  ],
};

export const WinterRoot: Item = {
  name: `Winter Root`,
  source: Item.Source.Foraging,
  seasons: [Season.Winter],
  uses: [
    { bundle: bundles.WinterForaging },
    { bounty: 140 },
  ],
};
