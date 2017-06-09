export enum Season {
  Spring,
  Summer,
  Fall,
  Winter,
}

// Bundles

export interface Bundle {
  name: string;
  location: Bundle.Location;
}

export namespace Bundle {
  export enum Location {
    BoilerRoom,
    BulletinBoard,
    CraftsRoom,
    FishTank,
    Pantry,
    Vault,
  }
}

// Items

export type Item = Item.Crop | Item.Fish | Item.Foraged | Item.Loot;

export namespace Item {
  export enum Location {
    Desert,
    ForestRiver,
    MountainLake,
    SecretWoodsPond,
    Sewers,
    TownRiver,
  }

  export enum Source {
    Farming,
    Fishing,
    Foraging,
    Mines,
  }

  export enum Quality {
    Normal,
    Silver,
    Gold,
    Iridium,
  }

  export interface Base {
    name: string;
    uses: Use[];
    seasons?: Season[];
    notes?: string;
  }

  export interface Crop extends Base {
    source: Item.Source.Farming;
  }

  export interface Fish extends Base {
    source: Item.Source.Fishing;
    location: Item.Location[];
  }

  export interface Foraged extends Base {
    source: Item.Source.Foraging;
  }

  export interface Loot extends Base {
    source: Item.Source.Mines;
  }
}

// Uses

export type Use = Use.BundleUse | Use.GiftUse | Use.HelpWantedUse | Use.QuestUse;

export namespace Use {
  export interface BundleUse {
    bundle: Bundle;
    count?: number; // Default is 1
    quality?: Item.Quality; // Default is Normal.
  }

  export interface GiftUse {
    love: Person;
  }

  export interface HelpWantedUse {
    bounty: number;
  }

  export interface QuestUse {
    quest: Quest;
  }
}

// People

export enum Person {
  Abagail,
  Alex,
  Caroline,
  Clint,
  Demetrius,
  Dwarf,
  Elliott,
  Emily,
  Evelyn,
  George,
  Gus,
  Haley,
  Harvey,
  Jas,
  Jodi,
  Kent,
  Krobus,
  Leah,
  Lewis,
  Linus,
  Marnie,
  Maru,
  Pam,
  Penny,
  Pierre,
  Robin,
  Sam,
  Sandy,
  Sebastian,
  Shane,
  Vincent,
  Willy,
  Wizard,
}

// Quests

export type Quest = Quest.Dated | Quest.Special;

export namespace Quest {
  export interface Base {
    name: string;
  }

  export interface Dated extends Base {
    year: number;
    season: Season;
    day: number;
  }

  export interface Special extends Base {
    notes: string;
  }
}