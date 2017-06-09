import { Item, Use, isBundleUse, isGiftUse, isHelpWantedUse, isQuestUse, isMuseumUse } from '../data/types';

export function getCurrentCount(item: Item): number {
  return parseInt(localStorage.getItem(`ItemCount/${item.name}`) || '0', 10);
}

export function setCurrentCount(item: Item, count: number) {
  localStorage.setItem(`ItemCount/${item.name}`, `${Math.max(count, 0)}`);
}

export function isItemUseComplete(item: Item, use: Use): boolean {
  return localStorage.getItem(`ItemUse/${item.name}/${itemUseKey(use)}`) === 'true';
}

export function setItemUseComplete(item: Item, use: Use, complete: boolean) {
  localStorage.setItem(`ItemUse/${item.name}/${itemUseKey(use)}`, `${complete}`);
  // TODO: Real data modeling/eventing.
  if (complete) {
    const newCount = getCurrentCount(item) - getCountForUse(use);
    setCurrentCount(item, newCount);
  }
}

export function getCountForUse(use: Use) {
  if (isGiftUse(use)) return 0;
  if (isBundleUse(use)) return use.count || 1;
  return 1;
}

export function getDesiredCountForItem(item: Item): number {
  let count = 0;
  for (const use of item.uses) {
    if (isItemUseComplete(item, use)) continue;
    if (isGiftUse(use)) continue;
    if (isBundleUse(use)) {
      count += use.count || 1;
    } else {
      count += 1;
    }
  }

  return count;
}

export function itemUseKey(use: Use): string {
  if (isBundleUse(use)) {
    return `bundle:${use.bundle.name}`;
  } else if (isGiftUse(use)) {
    return `person:${use.love}`;
  } else if (isHelpWantedUse(use)) {
    return `bounty`;
  } else if (isMuseumUse(use)) {
    return `museum`;
  } else if (isQuestUse(use)) {
    return `quest:${use.quest.name}`;
  } else {
    throw new Error(`Not a known type of use: ${JSON.stringify(use)}`);
  }
}
