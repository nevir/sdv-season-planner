import * as bundles from '../bundles';
import { Item } from '../types';

export const CaveCarrot: Item = {
  name: `Cave Carrot`,
  source: Item.Source.MineForaging,
  uses: [
    { bundle: bundles.ExoticForaging },
    { bounty: 75 },
  ],
};

export const EarthCrystal: Item = {
  name: `Earth Crystal`,
  source: Item.Source.MineForaging,
  uses: [
    { bundle: bundles.Geologist },
    { museum: true },
    { bounty: 150 },
  ],
};

export const FireQuartz: Item = {
  name: `Fire Quartz`,
  source: Item.Source.MineForaging,
  uses: [
    { bundle: bundles.Geologist },
    { museum: true },
    { bounty: 300 },
  ],
};

export const FrozenTear: Item = {
  name: `Frozen Tear`,
  source: Item.Source.MineForaging,
  uses: [
    { bundle: bundles.Geologist },
    { museum: true },
    { bounty: 225 },
  ],
};

export const Quartz: Item = {
  name: `Quartz`,
  source: Item.Source.MineForaging,
  uses: [
    { bundle: bundles.Geologist },
    { museum: true },
    { bounty: 75 },
  ],
};
