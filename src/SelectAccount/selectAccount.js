// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import DappsStore from '../dappsStore';

@observer
export default class SelectAccount extends Component {
  dappsStore = DappsStore.get();

  static propTypes = {
    value: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
  };

  render () {
    const { value } = this.props;

    return (
      <select
        value={ value }
        onChange={ this.handleSelect }
      >
        { this.renderOptions() }
      </select>
    );
  }

  renderOptions () {
    return this.dappsStore.accounts.map((account) => {
      return (
        <option value={ account.address } key={ account.address }>
          { account.name }
        </option>
      );
    });
  }

  handleSelect = (event) => {
    this.props.onSelect && this.props.onSelect(event);
  }
}
