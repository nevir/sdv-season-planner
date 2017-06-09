import * as _ from 'lodash';
import * as React from 'react';

import { ItemTable } from './components';
import { items } from './data';
import { Item, Season } from './data/types';

import './App.css';

const allItems = _.values(items) as Item[];

interface State {
  items: Item[];
}

export default class App extends React.Component<{}, State> {

  componentWillMount() {
    this.setState({
      items: this._items(),
    });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <select onChange={this._onSeasonChange}>
          <option value='all'>All Seasons</option>
          <option value={Season.Spring}>Spring</option>
          <option value={Season.Summer}>Summer</option>
          <option value={Season.Fall}>Fall</option>
          <option value={Season.Winter}>Winter</option>
        </select>
        <ItemTable items={items} />
      </div>
    );
  }

  _items(season?: Season) {
    let items = allItems;
    if (_.isNumber(season)) {
      items = _.filter(items, item => !item.seasons || _.includes(item.seasons, season));
    }

    return _.sortBy(items, 'name');
  }

  _onSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const season = value === 'all' ? undefined : parseInt(event.target.value, 10);

    this.setState({ items: this._items(season) });
  }

}
