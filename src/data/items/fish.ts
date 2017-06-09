import * as bundles from '../bundles';
import * as quests from '../quests';
import { Item, Person, Season } from '../types';

export const Albacore: Item = {
  name: `Albacore`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Fall, Season.Winter],
  notes: `6am-11am, 6pm-2am`,
  uses: [
    { quest: quests.FishStew },
  ],
};

export const Anchovy: Item = {
  name: `Anchovy`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Spring, Season.Fall],
  uses: [
    { bounty: 90 },
  ],
};

export const Bream: Item = {
  name: `Bream`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.TownRiver],
  notes: `6pm-2am`,
  uses: [
    { bundle: bundles.NightFishing },
    { bounty: 135 },
  ],
};

export const Bullhead: Item = {
  name: `Bullhead`,
  source: Item.Source.Fishing,
  locations: [Item.Location.MountainLake],
  uses: [
    { bundle: bundles.LakeFish },
  ],
};

export const Carp: Item = {
  name: `Carp`,
  source: Item.Source.Fishing,
  locations: [Item.Location.MountainLake],
  uses: [
    { bundle: bundles.LakeFish },
    { bounty: 90 },
  ],
};

export const Catfish: Item = {
  name: `Catfish`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.TownRiver, Item.Location.SecretWoodsPond],
  seasons: [Season.Spring, Season.Fall],
  notes: `Rain`,
  uses: [
    { bundle: bundles.RiverFish },
    { bounty: 600 },
    { love: Person.Willy },
  ],
};

export const Chub: Item = {
  name: `Chub`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.MountainLake],
  seasons: [Season.Spring, Season.Fall],
  notes: `Rain`,
  uses: [
    { bundle: bundles.FieldResearch },
  ],
};

export const Eel: Item = {
  name: `Eel`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Spring, Season.Fall],
  notes: `Rain, 4pm-2am`,
  uses: [
    { bundle: bundles.NightFishing },
    { bounty: 255 },
  ],
};

export const Ghostfish: Item = {
  name: `Ghostfish`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Mine],
  uses: [
    { bundle: bundles.SpecialtyFish },
  ],
};

export const Herring: Item = {
  name: `Herring`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Spring, Season.Winter],
  uses: [
    { bounty: 90 },
  ],
};

export const LargemouthBass: Item = {
  name: `Largemouth Bass`,
  source: Item.Source.Fishing,
  locations: [Item.Location.MountainLake],
  seasons: [Season.Spring, Season.Fall],
  notes: `6am-7pm`,
  uses: [
    { bundle: bundles.LakeFish },
    { quest: quests.FishCasserole },
    { bounty: 300 },
  ],
};

export const Lingcod: Item = {
  name: `Lingcod`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.TownRiver, Item.Location.MountainLake],
  seasons: [Season.Winter],
  uses: [
    { quest: quests.CatchALingcod },
  ],
};

export const Octopus: Item = {
  name: `Octopus`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Summer],
  notes: `6am-1pm`,
  uses: [
    { bounty: 450 },
    { love: Person.Willy },
  ],
};

export const Perch: Item = {
  name: `Perch`,
  source: Item.Source.Fishing,
  locations: [Item.Location.MountainLake, Item.Location.ForestRiver, Item.Location.ForestPond],
  seasons: [Season.Winter],
  uses: [
    { bounty: 165 },
  ],
};

export const Pike: Item = {
  name: `Pike`,
  source: Item.Source.Fishing,
  locations: [Item.Location.TownRiver, Item.Location.ForestRiver],
  seasons: [Season.Summer, Season.Winter],
  uses: [
    { bounty: 300 },
  ],
};

export const Pufferfish: Item = {
  name: `Pufferfish`,
  source: Item.Source.Fishing,
  locations: [Item.Location.MountainLake],
  seasons: [Season.Summer],
  notes: `12pm-4pm`,
  uses: [
    { bundle: bundles.SpecialtyFish },
    { quest: quests.AquaticResearch },
    { bounty: 600 },
    { love: Person.Abagail },
  ],
};

export const RainbowTrout: Item = {
  name: `Rainbow Trout`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.TownRiver, Item.Location.MountainLake],
  seasons: [Season.Summer],
  notes: `Sunny, 6am-7pm`,
  uses: [
    { bounty: 195 },
  ],
};

export const RedMullet: Item = {
  name: `Red Mullet`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Summer, Season.Winter],
  notes: `6am-7pm`,
  uses: [
    { bounty: 225 },
  ],
};

export const RedSnapper: Item = {
  name: `Red Snapper`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Summer, Season.Fall, Season.Winter],
  notes: `6am-7pm`,
  uses: [
    { bundle: bundles.OceanFish },
    { bounty: 150 },
  ],
};

export const Salmon: Item = {
  name: `Salmon`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.TownRiver],
  seasons: [Season.Fall],
  notes: `6am-7pm`,
  uses: [
    { bounty: 225 },
  ],
};

export const Sandfish: Item = {
  name: `Sandfish`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Desert],
  notes: `6am-8pm`,
  uses: [
    { bundle: bundles.SpecialtyFish },
    { love: Person.Penny },
  ],
};

export const Sardine: Item = {
  name: `Sardine`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Spring, Season.Fall, Season.Winter],
  notes: `6am-7pm`,
  uses: [
    { bundle: bundles.OceanFish },
    { bounty: 120 },
  ],
};

export const SeaCucumber: Item = {
  name: `Sea Cucumber`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Fall, Season.Winter],
  notes: `6am-7pm`,
  uses: [
    { bounty: 225 },
    { love: Person.Willy },
  ],
};

export const Shad: Item = {
  name: `Shad`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.TownRiver],
  seasons: [Season.Spring, Season.Summer, Season.Fall],
  notes: `9am-2pm`,
  uses: [
    { bundle: bundles.RiverFish },
  ],
};

export const SmallmouthBass: Item = {
  name: `Smallmouth Bass`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.TownRiver, Item.Location.MountainLake, Item.Location.ForestPond],
  seasons: [Season.Spring, Season.Fall],
  uses: [
    { bounty: 150 },
  ],
};

export const Squid: Item = {
  name: `Squid`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Winter],
  notes: `6pm-2am`,
  uses: [
    { quest: quests.CatchASquid },
    { bounty: 240 },
  ],
};

export const Sturgeon: Item = {
  name: `Sturgeon`,
  source: Item.Source.Fishing,
  locations: [Item.Location.MountainLake],
  seasons: [Season.Summer, Season.Winter],
  notes: `6am-7pm`,
  uses: [
    { bundle: bundles.LakeFish },
    { love: Person.Willy },
  ],
};

export const Sunfish: Item = {
  name: `Sunfish`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.TownRiver],
  seasons: [Season.Spring, Season.Summer],
  notes: `Sunny, 6am-7pm`,
  uses: [
    { bundle: bundles.RiverFish },
    { bounty: 90 },
  ],
};

export const SuperCucumber: Item = {
  name: `Super Cucumber`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Summer, Season.Fall],
  notes: `6pm-2am`,
  uses: [
    { bounty: 750 },
    { love: Person.Wizard },
  ],
};

export const TigerTrout: Item = {
  name: `Tiger Trout`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.TownRiver],
  seasons: [Season.Fall, Season.Winter],
  notes: `6am-7pm`,
  uses: [
    { bundle: bundles.RiverFish },
    { bounty: 150 },
  ],
};

export const Tilapia: Item = {
  name: `Tilapia`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Summer, Season.Fall],
  notes: `6am-2pm`,
  uses: [
    { bundle: bundles.OceanFish },
  ],
};

export const Tuna: Item = {
  name: `Tuna`,
  source: Item.Source.Fishing,
  locations: [Item.Location.Ocean],
  seasons: [Season.Summer, Season.Winter],
  notes: `6am-7pm`,
  uses: [
    { bundle: bundles.OceanFish },
    { bounty: 300 },
  ],
};

export const Walleye: Item = {
  name: `Walleye`,
  source: Item.Source.Fishing,
  locations: [Item.Location.ForestRiver, Item.Location.TownRiver, Item.Location.MountainLake, Item.Location.ForestPond],
  seasons: [Season.Fall],
  notes: `Rain, 12pm-2am`,
  uses: [
    { bundle: bundles.NightFishing },
    { bounty: 315 },
  ],
};

export const Woodskip: Item = {
  name: `Woodskip`,
  source: Item.Source.Fishing,
  locations: [Item.Location.SecretWoodsPond],
  uses: [
    { bundle: bundles.SpecialtyFish },
    { bounty: 315 },
  ],
};
