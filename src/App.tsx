import * as _ from 'lodash';
import * as React from 'react';

import { ItemTable } from './components';
import { items } from './data';
import { Item, Season } from './data/types';
import { getDesiredCountForItem } from './models';

import './App.css';

const allItems = _.values(items) as Item[];

interface State {
  items: Item[];
  season?: Season;
}

export default class App extends React.Component<{}, State> {

  componentWillMount() {
    const season = Season.Spring;
    this.setState({
      items: this._items(season),
      season,
    });
  }

  render() {
    const { items, season } = this.state;

    return (
      <div>
        <select onChange={this._onSeasonChange}>
          <option value='all' selected={!season}>All Seasons</option>
          <option value={Season.Spring} selected={season === Season.Spring}>Spring</option>
          <option value={Season.Summer} selected={season === Season.Summer}>Summer</option>
          <option value={Season.Fall} selected={season === Season.Fall}>Fall</option>
          <option value={Season.Winter} selected={season === Season.Winter}>Winter</option>
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

    return _.sortBy(items, i => getDesiredCountForItem(i) === 0, 'source', 'name');
  }

  _onSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const season = value === 'all' ? undefined : parseInt(event.target.value, 10);

    this.setState({ items: this._items(season) });
  }

}
