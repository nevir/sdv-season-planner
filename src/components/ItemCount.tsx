import * as React from 'react';

import { Item, isBundleUse, isGiftUse } from '../data/types';
import { getCurrentCount, setCurrentCount } from '../models';

import './ItemCount.css';

export interface Props {
  item: Item;
}

interface State {
  currentCount: number;
}

export class ItemCount extends React.Component<Props, State> {

  componentWillMount() {
    this.setState({ currentCount: getCurrentCount(this.props.item) });
  }

  render() {
    const { currentCount } = this.state;
    const numDesired = this._calcNumDesired();

    return (
      <div className={`count ${currentCount >= numDesired ? 'have-enough' : ''}`}>
        <input type='number' value={currentCount} onChange={this._onChange} />
        &nbsp;of {numDesired}
      </div>
    );
  }

  _calcNumDesired() {
    let count = 0;
    for (const use of this.props.item.uses) {
      if (isGiftUse(use)) continue;
      if (isBundleUse(use)) {
        count += use.count || 1;
      } else {
        count += 1;
      }
    }

    return count;
  }

  _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentCount = parseInt(event.target.value, 10) || 0;
    this.setState({ currentCount });
    setCurrentCount(this.props.item, currentCount);
  }

}
