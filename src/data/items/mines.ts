import * as quests from '../quests';
import * as bundles from '../bundles';
import { Item, Person } from '../types';

// Gems

export const Amethyst: Item = {
  name: `Amethyst`,
  source: Item.Source.Mines,
  uses: [
    { museum: true },
    { bounty: 300 },
    { quest: quests.ClintsAttempt },
    { love: Person.Abagail },
  ],
};

export const Aquamarine: Item = {
  name: `Aquamarine`,
  source: Item.Source.Mines,
  uses: [
    { bundle: bundles.Dye },
    { museum: true },
    { bounty: 540 },
  ],
  notes: `Floors 40+`,
};

export const Diamond: Item = {
  name: `Diamond`,
  source: Item.Source.Mines,
  uses: [
    { museum: true },
    { bounty: 2250 },
  ],
  notes: `Floors 50+`,
};

export const Emerald: Item = {
  name: `Emerald`,
  source: Item.Source.Mines,
  uses: [
    { museum: true },
    { bounty: 750 },
    { love: Person.Penny },
  ],
  notes: `Floors 80+`,
};

export const FrozenGeode: Item = {
  name: `Frozen Geode`,
  source: Item.Source.Mines,
  uses: [
    { bundle: bundles.FieldResearch },
  ],
  notes: `Floors 41-79`,
};

export const Jade: Item = {
  name: `Jade`,
  source: Item.Source.Mines,
  uses: [
    { museum: true },
    { bounty: 600 },
  ],
  notes: `Floors 40+`,
};

export const Ruby: Item = {
  name: `Ruby`,
  source: Item.Source.Mines,
  uses: [
    { museum: true },
    { bounty: 750 },
  ],
  notes: `Floors 80+`,
};

export const Topaz: Item = {
  name: `Topaz`,
  source: Item.Source.Mines,
  uses: [
    { museum: true },
    { bounty: 240 },
  ],
};
