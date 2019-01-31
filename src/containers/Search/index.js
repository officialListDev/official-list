import React, { Component } from 'react';
import './style.css';
import SearchBox from './SearchBox';
import ListIcon from '../../img/list.svg';
import GridIcon from '../../img/grid.svg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: 'grid',
    };
    this.toggleViewMode = this.toggleViewMode.bind(this);
  }

  toggleViewMode(mode) {
    this.setState({
      viewMode: mode,
    });
  }

  render() {
    const { viewMode } = this.state;
    return (
      <div id="search-root" className="root-container">
        <div className="top-row">
          <SearchBox />
          <div id="view-as">
            <p>View As:</p>
            <button
              type="button"
              onClick={() => this.toggleViewMode('list')}
            >
              <img src={ListIcon} alt="list" />
            </button>
            <button
              type="button"
              onClick={() => this.toggleViewMode('grid')}
            >
              <img src={GridIcon} alt="grid" />
            </button>
          </div>
        </div>
        <p>{viewMode}</p>
      </div>
    );
  }
}

export default Search;
