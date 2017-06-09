import * as bundles from '../bundles';
import * as quests from '../quests';
import { Item, Person, Season } from '../types';

// Spring

export const Cauliflower: Item = {
  name: `Cauliflower`,
  source: Item.Source.Farming,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringCrops },
    { quest: quests.JodisRequest },
    { bounty: 525 },
    { love: Person.Maru },
  ],
};

export const GreenBean: Item = {
  name: `Green Bean`,
  source: Item.Source.Farming,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringCrops },
    { bounty: 120 },
  ],
};

export const Kale: Item = {
  name: `Kale`,
  source: Item.Source.Farming,
  seasons: [Season.Spring],
  uses: [
    { bounty: 330 },
  ],
};

export const Parsnip: Item = {
  name: `Parsnip`,
  source: Item.Source.Farming,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringCrops },
    { bundle: bundles.QualityCrops, count: 5, quality: Item.Quality.Gold },
    { bounty: 105 },
    { love: Person.Pam },
  ],
};

export const Potato: Item = {
  name: `Potato`,
  source: Item.Source.Farming,
  seasons: [Season.Spring],
  uses: [
    { bundle: bundles.SpringCrops },
    { bounty: 240 },
  ],
};

export const Strawberry: Item = {
  name: `Strawberry`,
  source: Item.Source.Farming,
  seasons: [Season.Spring],
  uses: [
    { bounty: 360 },
  ],
};
