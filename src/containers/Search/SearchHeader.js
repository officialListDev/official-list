import React from 'react';
import exact from 'prop-types-exact';
import { bool, func } from 'prop-types';
import ListIcon from '../../img/list.svg';
import GridIcon from '../../img/grid.svg';
import SearchBox from './SearchBox';

const propTypes = exact({
  showFilters: bool.isRequired,
  toggleViewMode: func.isRequired,
});

const SearchHeader = ({ showFilters, toggleViewMode }) => (
  <div className={showFilters ? 'top-row' : 'top-row expanded'}>
    <SearchBox />
    <div id="view-as">
      <p>View As:</p>
      <button
        type="button"
        onClick={() => toggleViewMode('list')}
      >
        <img src={ListIcon} alt="list" />
      </button>
      <button
        type="button"
        onClick={() => toggleViewMode('grid')}
      >
        <img src={GridIcon} alt="grid" />
      </button>
    </div>
  </div>
);

SearchHeader.propTypes = propTypes;

export default SearchHeader;
