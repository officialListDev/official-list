import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { string, func, bool, number, arrayOf, shape } from 'prop-types'
import exact from 'prop-types-exact'
import {
  addInstrument,
  addVoiceRange,
  closeActorDetail,
  openActorDetail,
  removeInstrument,
  removeVoiceRange,
  toggleSearchView,
  toggleSearchFilters,
  updateHeightFeet,
  updateHeightInches,
  updateMinAge,
  updateMaxAge,
} from '../actions'
import SearchHeader from '../components/Search/SearchHeader'
import SearchFilters from '../components/Search/SearchFilters'
import SearchResults from '../components/Search/SearchResults'
import ActorDetail from '../components/Actor/ActorDetail'

class Search extends Component {
  render () {
    const {
      actorDetail,
      activeInstruments,
      activeVoiceRanges,
      addInstrument,
      addVoiceRange,
      closeActorDetail,
      heightFeet,
      heightInches,
      minAge,
      maxAge,
      openActorDetail,
      removeInstrument,
      removeVoiceRange,
      searchResults,
      searchViewMode,
      shouldShowSearchFilters,
      toggleSearchView,
      toggleSearchFilters,
      updateHeightFeet,
      updateHeightInches,
      updateMinAge,
      updateMaxAge,
    } = this.props
    return (
      <div id="search-root" className={shouldShowSearchFilters ? '' : 'expanded'}>
        <SearchHeader shouldShowFilters={shouldShowSearchFilters} toggleViewMode={toggleSearchView} />
        <SearchFilters
          activeInstruments={activeInstruments}
          activeVoiceRanges={activeVoiceRanges}
          addInstrument={addInstrument}
          addVoiceRange={addVoiceRange}
          height={{ feet: heightFeet, inches: heightInches }}
          minAge={minAge}
          maxAge={maxAge}
          removeInstrument={removeInstrument}
          removeVoiceRange={removeVoiceRange}
          shouldShowFilters={shouldShowSearchFilters}
          toggleFilters={toggleSearchFilters}
          updateMinAge={updateMinAge}
          updateMaxAge={updateMaxAge}
          updateHeightFeet={updateHeightFeet}
          updateHeightInches={updateHeightInches}
        />
        <SearchResults
          results={searchResults}
          viewMode={searchViewMode}
          showFilters={shouldShowSearchFilters}
          openActorDetail={openActorDetail}
        />
        <ActorDetail
          shouldShow={actorDetail.shouldShow}
          closeActorDetail={closeActorDetail}
          activeActor={actorDetail.activeActor}
        />
        <style jsx>{`
          #search-root {
            padding: 7.5rem 2rem 2rem calc(250px + 2rem);
            transition: 0.3s ease;
            background: rgba(67, 197, 196, 0.3);
          }

          #search-root.expanded {
            padding: 7.5rem 2rem 2rem 2rem;
          }
        `}</style>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {
    activeInstruments,
    activeVoiceRanges,
    actorDetail,
    heightFeet,
    heightInches,
    maxAge,
    minAge,
    searchResults,
    searchViewMode,
    shouldShowSearchFilters,
  } = state
  return {
    activeInstruments,
    activeVoiceRanges,
    actorDetail,
    heightFeet,
    heightInches,
    maxAge,
    minAge,
    searchResults,
    searchViewMode,
    shouldShowSearchFilters,
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addInstrument,
    addVoiceRange,
    closeActorDetail,
    openActorDetail,
    removeInstrument,
    removeVoiceRange,
    toggleSearchView,
    toggleSearchFilters,
    updateHeightFeet,
    updateHeightInches,
    updateMinAge,
    updateMaxAge,
  }, dispatch)
)

Search.propTypes = exact({
  activeInstruments: arrayOf(string).isRequired,
  activeVoiceRanges: arrayOf(string).isRequired,
  actorDetail: shape({
    shouldShow: bool.isRequired,
    activeActor: shape({
      firstName: string.isRequired,
      lastName: string.isRequired,
      headshot: string.isRequired,
    }),
  }).isRequired,
  addInstrument: func.isRequired,
  addVoiceRange: func.isRequired,
  className: string.isRequired,
  closeActorDetail: func.isRequired,
  heightFeet: number.isRequired,
  heightInches: number.isRequired,
  maxAge: number.isRequired,
  minAge: number.isRequired,
  openActorDetail: func.isRequired,
  removeInstrument: func.isRequired,
  removeVoiceRange: func.isRequired,
  searchResults: arrayOf(shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
    headshot: string.isRequired,
  })).isRequired,
  searchViewMode: string.isRequired,
  shouldShowSearchFilters: bool.isRequired,
  toggleSearchView: func.isRequired,
  toggleSearchFilters: func.isRequired,
  updateHeightFeet: func.isRequired,
  updateHeightInches: func.isRequired,
  updateMaxAge: func.isRequired,
  updateMinAge: func.isRequired,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)
