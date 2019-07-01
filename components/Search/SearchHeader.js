import React from 'react'
import exact from 'prop-types-exact'
import { bool, func } from 'prop-types'
import { SearchViewModes } from '../../actions'
const { GRID, LIST } = SearchViewModes
import SearchBox from './SearchBox'

const SearchHeader = ({ shouldShowFilters, toggleViewMode }) => (
  <div className={shouldShowFilters ? 'top-row' : 'top-row expanded'}>
    <SearchBox />
    <div id="view-as">
      <p>View As:</p>
      <button
        type="button"
        onClick={() => toggleViewMode(LIST)}
      >
        <img src="/static/img/list.svg" alt="list" />
      </button>
      <button
        type="button"
        onClick={() => toggleViewMode(GRID)}
      >
        <img src="/static/img/grid.svg" alt="grid" />
      </button>
    </div>
    <style jsx>{`
      .top-row {
        position: fixed;
        width: calc(100% - 250px - 2rem);
        top: 56px;
        left: calc(250px);
        padding-left: 2rem;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        border-bottom: 1px solid #8e8e93;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        transition: 0.3s ease;
      }

      .top-row.expanded {
        width: calc(100% - 2rem);
        left: 0;
      }

      #view-as {
        display: flex;
        align-items: center;
        padding-right: 2rem;
      }

      #view-as p {
        margin-right: 1rem;
      }

      #view-as button {
        appearance: none;
        background: none;
        border: none;
        outline: none;
        padding-top: 3px;
        cursor: pointer;
      }

      #view-as [alt="list"] {
        margin-right: 0.25rem;
      }

      #view-as [alt="grid"] {
        margin-left: 0.25rem;
      }
    `}</style>
  </div>
)

SearchHeader.propTypes = exact({
  shouldShowFilters: bool.isRequired,
  toggleViewMode: func.isRequired,
})

export default SearchHeader
