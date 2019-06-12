import React, { Component } from 'react'
import './style.css'
import SearchHeader from './SearchHeader'
import SearchFilters from './SearchFilters'
import SearchResults from './SearchResults'
import results from '../../mocks/search-results'
import ActorDetail from '../../components/Actor/ActorDetail'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewMode: 'list',
      searchResults: results,
      showFilters: true,
      minAge: 25,
      maxAge: 34,
      height: {
        feet: 5,
        inches: 8,
      },
      weight: 160,
      eyeColors: [],
      hairColors: [],
      showActorDetail: true,
      activeActor: results[0],
    }
  }

  closeActorDetail = () => {
    this.setState({
      showActorDetail: false,
    })
  }

  openActorDetail = (id) => {
    const { searchResults } = this.state
    const result = searchResults.filter(actor => actor.id === id)
    this.setState({
      showActorDetail: true,
      activeActor: result[0],
    })
  }

  toggleViewMode = (mode) => {
    this.setState({
      viewMode: mode,
    })
  }

  toggleFilters = (bool) => {
    this.setState({
      showFilters: bool,
    })
  }

  updateMinAge = (age) => {
    this.setState({
      minAge: parseInt(age, 10),
    })
  }

  updateMaxAge = (age) => {
    this.setState({
      maxAge: parseInt(age, 10),
    })
  }

  updateHeightFeet = (feet) => {
    const { height } = this.state
    const { inches } = height
    this.setState({
      height: {
        feet: parseInt(feet, 10),
        inches,
      },
    })
  }

  updateHeightInches = (inches) => {
    const { height } = this.state
    const { feet } = height
    this.setState({
      height: {
        feet,
        inches: parseInt(inches, 10),
      },
    })
  }

  updateFilterState = (e, activeStateKey, filter) => {
    const newState = {}
    /* eslint-disable-next-line */
    let newActiveFilterList = this.state[activeStateKey].slice();
    if (e.target.checked) {
      newActiveFilterList.push(filter)
    } else {
      const index = newActiveFilterList.indexOf(filter)
      newActiveFilterList.splice(index, 1)
    }
    newState[activeStateKey] = newActiveFilterList
    this.setState(newState)
  }

  render() {
    const {
      viewMode,
      searchResults,
      showFilters,
      minAge,
      maxAge,
      height,
      showActorDetail,
      activeActor,
    } = this.state
    return (
      <div id="search-root" className={showFilters ? '' : 'expanded'}>
        <SearchHeader showFilters={showFilters} toggleViewMode={this.toggleViewMode} />
        <SearchFilters
          showFilters={showFilters}
          minAge={minAge}
          maxAge={maxAge}
          height={height}
          toggleFilters={this.toggleFilters}
          updateMinAge={this.updateMinAge}
          updateMaxAge={this.updateMaxAge}
          updateHeightFeet={this.updateHeightFeet}
          updateHeightInches={this.updateHeightInches}
          updateFilterState={this.updateFilterState}
        />
        <SearchResults
          results={searchResults}
          viewMode={viewMode}
          showFilters={showFilters}
          openActorDetail={this.openActorDetail}
        />
        <ActorDetail
          showActorDetail={showActorDetail}
          closeActorDetail={this.closeActorDetail}
          activeActor={activeActor}
        />
      </div>
    )
  }
}

export default Search
