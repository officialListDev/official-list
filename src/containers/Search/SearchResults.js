import React from 'react';
import exact from 'prop-types-exact';
import {
  string, bool, arrayOf, shape, number, func,
} from 'prop-types';
import SearchResultsList from './SearchResultsList';
import SearchResultsGrid from './SearchResultsGrid';

const propTypes = exact({
  viewMode: string.isRequired,
  showFilters: bool.isRequired,
  results: arrayOf(shape({
    id: number.isRequired,
    headshot: string.isRequired,
    firstName: string.isRequired,
    lastName: string.isRequired,
    socialMedia: shape({
      instagram: string,
      facebook: string,
      youtube: string,
      twitter: string,
    }).isRequired,
  })).isRequired,
  openActorDetail: func.isRequired,
});

const SearchResults = ({
  viewMode, showFilters, results, openActorDetail,
}) => (
  <div id="results-container">
    {viewMode === 'grid' && <SearchResultsGrid results={results} showFilters={showFilters} openActorDetail={openActorDetail} />}
    {viewMode === 'list' && <SearchResultsList results={results} openActorDetail={openActorDetail} />}
  </div>
);

SearchResults.propTypes = propTypes;

export default SearchResults;