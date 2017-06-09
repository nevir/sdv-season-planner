import * as React from 'react';

import { Item, Use, Person, isBundleUse, isGiftUse, isHelpWantedUse, isQuestUse } from '../data/types';

export interface Props {
  item: Item;
}

export class ItemUses extends React.Component<Props, null> {

  render() {
    const { item } = this.props;

    return <div className='use'>{item.uses.map(this._renderUse)}</div>;
  }

  _renderUse = (use: Use) => {
    if (isBundleUse(use)) {
      return this._renderBundleUse(use);
    } else if (isGiftUse(use)) {
      return this._renderGiftUse(use);
    } else if (isHelpWantedUse(use)) {
      return this._renderHelpWantedUse(use);
    } else if (isQuestUse(use)) {
      return this._renderQuestUse(use);
    } else {
      throw new Error(`Not a known type of use: ${JSON.stringify(use)}`);
    }
  }

  _renderBundleUse(use: Use.BundleUse) {
    return <div className='bundle' key={`bundle:${use.bundle.name}`}>{use.bundle.name}</div>;
  }

  _renderGiftUse(use: Use.GiftUse) {
    return <div className='gift' key={`person:${use.love}`}>{Person[use.love]}</div>;
  }

  _renderHelpWantedUse(use: Use.HelpWantedUse) {
    return <div className='bundle' key='bounty' title={`${use.bounty}g`}>Help Wanted</div>;
  }

  _renderQuestUse(use: Use.QuestUse) {
    return <div className='bundle' key={`quest:${use.quest.name}`}>Quest: {use.quest.name}</div>;
  }

}
