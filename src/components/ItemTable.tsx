import * as React from 'react';

import { Item } from '../data/types';
import { ItemCount, ItemUses } from '.';

import './ItemTable.css';

export interface Props {
  items: Item[];
}

export class ItemTable extends React.Component<Props, null> {

  render() {
    const { items } = this.props;

    return (
      <table className='items'>
        <thead>
          <tr>
            <th>Source</th>
            <th>Name</th>
            <th>Count</th>
            <th>Uses</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {items.map(this._renderItem)}
        </tbody>
      </table>
    );
  }

  _renderItem = (item: Item) => {
    return (
      <tr key={item.name}>
        <td>{Item.Source[item.source]}</td>
        <td>{item.name}</td>
        <td><ItemCount item={item} /></td>
        <td><ItemUses item={item} /></td>
        <td>{item.notes}</td>
      </tr>
    );
  }

}
