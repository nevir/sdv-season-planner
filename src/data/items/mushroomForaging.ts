import * as bundles from '../bundles';
import { Item, Person, Season } from '../types';

export const PurpleMushroom: Item = {
  name: `Purple Mushroom`,
  source: Item.Source.MushroomForaging,
  uses: [
    { bundle: bundles.FieldResearch },
    { bundle: bundles.ExoticForaging },
    { bounty: 750 },
    { love: Person.Wizard },
  ],
  notes: `Found in the Mines (82+)`,
};

// Multiple Seasons

export const CommonMushroom: Item = {
  name: `Common Mushroom`,
  source: Item.Source.MushroomForaging,
  seasons: [Season.Spring, Season.Fall],
  notes: `During Spring, only found in Secret Woods`,
  uses: [
    { bundle: bundles.FallForaging },
    { bounty: 120 },
  ],
};

export const RedMushroom: Item = {
  name: `Red Mushroom`,
  source: Item.Source.MushroomForaging,
  seasons: [Season.Summer, Season.Fall],
  uses: [
    { bundle: bundles.Dye },
    { bundle: bundles.ExoticForaging },
    { bounty: 225 },
  ],
  notes: `Found in the Secret Woods, or Mines (27+)`,
};

export const Morel: Item = {
  name: `Morel`,
  source: Item.Source.MushroomForaging,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.ExoticForaging },
  ],
  notes: `Only found in secret woods or forest farm`,
};
