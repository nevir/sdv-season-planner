import * as _ from 'lodash';
import * as React from 'react';

import { ItemTable } from './components';
import { items, types } from './data';

import './App.css';

interface State {
  items: types.Item[];
}

export default class App extends React.Component<{}, State> {

  componentWillMount() {
    this.setState({
      items: this._items(),
    });
  }

  render() {
    const { items } = this.state;

    return <ItemTable items={items} />;
  }

  _items() {
    return _(items)
      .values()
      .sortBy('name')
      .value() as types.Item[];
  }

}
