import * as bundles from '../bundles';
import * as quests from '../quests';
import { Item, Season } from '../types';

export const Clam: Item = {
  name: `Clam`,
  source: Item.Source.BeachForaging,
  uses: [
    { bundle: bundles.CrabPot },
  ],
};

export const Cockle: Item = {
  name: `Cockle`,
  source: Item.Source.BeachForaging,
  uses: [
    { bundle: bundles.CrabPot },
  ],
};

export const Mussel: Item = {
  name: `Mussel`,
  source: Item.Source.BeachForaging,
  uses: [
    { bundle: bundles.CrabPot },
  ],
};

export const Oyster: Item = {
  name: `Oyster`,
  source: Item.Source.BeachForaging,
  uses: [
    { bundle: bundles.CrabPot },
  ],
};

export const SeaUrchin: Item = {
  name: `Sea Urchin`,
  source: Item.Source.BeachForaging,
  uses: [
    { bundle: bundles.Dye },
  ],
};

export const RainbowShell: Item = {
  name: `Rainbow Shell`,
  source: Item.Source.BeachForaging,
  seasons: [Season.Summer],
  uses: [
    { quest: quests.TheMysteriousQi },
  ],
};

export const NautilusShell: Item = {
  name: `Nautilus Shell`,
  source: Item.Source.BeachForaging,
  seasons: [Season.Winter],
  uses: [
    { bundle: bundles.FieldResearch },
  ],
};
