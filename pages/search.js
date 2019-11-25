import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  string, func, bool, arrayOf, shape,
} from 'prop-types';
import exact from 'prop-types-exact';
import {
  closeActorDetail,
  openActorDetail,
  toggleSearchView,
} from '../actions';
import SearchHeader from '../components/Search/SearchHeader';
import SearchFilters from '../components/Search/SearchFilters';
import SearchResults from '../components/Search/SearchResults';
import ActorDetail from '../components/Actor/ActorDetail';


function mapStateToProps (state) {
  const {
    actorDetail,
    searchResults,
    searchViewMode,
    shouldShowSearchFilters,
  } = state;
  return {
    actorDetail,
    searchResults,
    searchViewMode,
    shouldShowSearchFilters,
  };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    closeActorDetail,
    openActorDetail,
    toggleSearchView,
  }, dispatch)
);

class Search extends Component {
  render () {
    const {
      actorDetail,
      closeActorDetail,
      openActorDetail,
      searchResults,
      searchViewMode,
      shouldShowSearchFilters,
      toggleSearchView,
    } = this.props;
    return (
      <div id="search-root" className={shouldShowSearchFilters ? '' : 'expanded'}>
        <SearchHeader shouldShowFilters={shouldShowSearchFilters} toggleViewMode={toggleSearchView} />
        <SearchFilters shouldShowFilters={shouldShowSearchFilters} />
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
        <style jsx>
          {`
            #search-root {
              padding: 7.5rem 2rem 2rem calc(250px + 2rem);
              transition: 0.3s ease;
              background: rgba(67, 197, 196, 0.3);
            }
  
            #search-root.expanded {
              padding: 7.5rem 2rem 2rem 2rem;
            }
          `}

        </style>
      </div>
    );
  }
}

Search.propTypes = exact({
  actorDetail: shape({
    shouldShow: bool.isRequired,
    activeActor: shape({
      firstName: string.isRequired,
      lastName: string.isRequired,
      headshot: string.isRequired,
    }),
  }).isRequired,
  className: string.isRequired,
  closeActorDetail: func.isRequired,
  openActorDetail: func.isRequired,
  searchResults: arrayOf(shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
    headshot: string.isRequired,
  })).isRequired,
  searchViewMode: string.isRequired,
  shouldShowSearchFilters: bool.isRequired,
  toggleSearchView: func.isRequired,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
