import React from 'react';
import SearchIcon from '../../img/search.svg';

const SearchBox = () => (
  <form id="search-form">
    <input type="text" />
    <button type="submit">
      <img src={SearchIcon} alt="search" />
    </button>
  </form>
);

export default SearchBox;
