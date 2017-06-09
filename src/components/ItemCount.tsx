import * as React from 'react';

import { Item } from '../data/types';
import { getCurrentCount, getDesiredCountForItem, setCurrentCount } from '../models';

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
    const { item } = this.props;
    const { currentCount } = this.state;
    const numDesired = getDesiredCountForItem(item);

    return (
      <div className={`count ${currentCount >= numDesired ? 'have-enough' : ''}`}>
        <input type='number' value={currentCount} onChange={this._onChange} />
        &nbsp;of {numDesired}
      </div>
    );
  }

  _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentCount = parseInt(event.target.value, 10) || 0;
    this.setState({ currentCount });
    setCurrentCount(this.props.item, currentCount);
  }

}
