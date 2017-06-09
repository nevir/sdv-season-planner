import * as React from 'react';

import { Item, Use, Person, isBundleUse, isGiftUse, isHelpWantedUse, isQuestUse } from '../data/types';
import { itemUseKey, isItemUseComplete, setItemUseComplete } from '../models';

import './ItemUses.css';

interface Props {
  item: Item;
}

interface State {
  useStatuses: { [key: string]: boolean };
}

export class ItemUses extends React.Component<Props, State> {

  componentWillMount() {
    const { item } = this.props;
    const useStatuses = {};
    for (const use of item.uses) {
      useStatuses[itemUseKey(use)] = isItemUseComplete(item, use);
    }

    this.setState({ useStatuses });
  }

  render() {
    const { uses } = this.props.item;

    return <div className='uses'>{uses.map(this._renderUse)}</div>;
  }

  _renderUse = (use: Use) => {
    let info;
    if (isBundleUse(use)) {
      info = this._renderBundleUse(use);
    } else if (isGiftUse(use)) {
      info = this._renderGiftUse(use);
    } else if (isHelpWantedUse(use)) {
      info = this._renderHelpWantedUse(use);
    } else if (isQuestUse(use)) {
      info = this._renderQuestUse(use);
    } else {
      throw new Error(`Not a known type of use: ${JSON.stringify(use)}`);
    }

    const key = itemUseKey(use);
    const complete = this.state.useStatuses[key];

    return (
      <label className='use' key={key}>
        <input type='checkbox' checked={complete} onChange={e => this._onUseChange(use, e)} />
        {info}
      </label>
    );
  }

  _renderBundleUse(use: Use.BundleUse) {
    return <div className='bundle'>{use.bundle.name}</div>;
  }

  _renderGiftUse(use: Use.GiftUse) {
    return <div className='gift'>{Person[use.love]}</div>;
  }

  _renderHelpWantedUse(use: Use.HelpWantedUse) {
    return <div className='bounty' title={`${use.bounty}g`}>Help Wanted</div>;
  }

  _renderQuestUse(use: Use.QuestUse) {
    return <div className='quest'>Quest: {use.quest.name}</div>;
  }

  _onUseChange = (use: Use, event: React.ChangeEvent<HTMLInputElement>) => {
    const { item } = this.props;
    const { checked } = event.target;

    this.setState({
      useStatuses: {
        ...this.state.useStatuses,
        [itemUseKey(use)]: checked,
      },
    });
    setItemUseComplete(item, use, checked);
  }

}
