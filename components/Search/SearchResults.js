import React from 'react'
import exact from 'prop-types-exact'
import {
  string, bool, arrayOf, shape, number, func,
} from 'prop-types'
import { SearchViewModes } from '../../actions'
const { GRID, LIST } = SearchViewModes
import SearchResultsList from './SearchResultsList'
import SearchResultsGrid from './SearchResultsGrid'

const SearchResults = ({
  viewMode, showFilters, results, openActorDetail,
}) => (
  <div id="results-container">
    {viewMode === GRID && <SearchResultsGrid results={results} showFilters={showFilters} openActorDetail={openActorDetail} />}
    {viewMode === LIST && <SearchResultsList results={results} openActorDetail={openActorDetail} />}
    <style jsx>{`
      #results-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 2rem;
        width: 100%;
      }
    `}</style>
  </div>
)

SearchResults.propTypes = exact({
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
})

export default SearchResults
