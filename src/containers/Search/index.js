import React, { Component } from 'react';
import './style.css';
import SearchHeader from './SearchHeader';
import SearchFilters from './SearchFilters';
import SearchResults from './SearchResults';
import ExternalLink from '../../components/Utility/ExternalLink';
import results from '../../mocks/search-results';
import InstagramIcon from '../../img/instagram.svg';
import FacebookIcon from '../../img/facebook.svg';
import YoutubeIcon from '../../img/youtube.svg';
import TwitterIcon from '../../img/twitter.svg';

class Search extends Component {
  constructor(props) {
    super(props);
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
    };
    this.toggleViewMode = this.toggleViewMode.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
    this.updateMinAge = this.updateMinAge.bind(this);
    this.updateMaxAge = this.updateMaxAge.bind(this);
    this.updateHeightFeet = this.updateHeightFeet.bind(this);
    this.updateHeightInches = this.updateHeightInches.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.updateFilterState = this.updateFilterState.bind(this);
    this.openActorDetail = this.openActorDetail.bind(this);
    this.closeActorDetail = this.closeActorDetail.bind(this);
  }

  closeActorDetail() {
    this.setState({
      showActorDetail: false,
    });
  }

  openActorDetail(id) {
    const { searchResults } = this.state;
    const result = searchResults.filter(actor => actor.id === id);
    this.setState({
      showActorDetail: true,
      activeActor: result[0],
    });
  }

  toggleViewMode(mode) {
    this.setState({
      viewMode: mode,
    });
  }

  toggleFilters(bool) {
    this.setState({
      showFilters: bool,
    });
  }

  updateMinAge(age) {
    this.setState({
      minAge: parseInt(age, 10),
    });
  }

  updateMaxAge(age) {
    this.setState({
      maxAge: parseInt(age, 10),
    });
  }

  updateHeightFeet(feet) {
    const { height } = this.state;
    const { inches } = height;
    this.setState({
      height: {
        feet: parseInt(feet, 10),
        inches,
      },
    });
  }

  updateHeightInches(inches) {
    const { height } = this.state;
    const { feet } = height;
    this.setState({
      height: {
        feet,
        inches: parseInt(inches, 10),
      },
    });
  }

  updateWeight(weight) {
    this.setState({
      weight: parseInt(weight, 10),
    });
  }

  updateFilterState(e, activeStateKey, filter) {
    const newState = {};
    /* eslint-disable */
    let newActiveFilterList = this.state[activeStateKey].slice();
    /* eslint-enable */
    if (e.target.checked) {
      newActiveFilterList.push(filter);
    } else {
      const index = newActiveFilterList.indexOf(filter);
      newActiveFilterList.splice(index, 1);
    }
    newState[activeStateKey] = newActiveFilterList;
    this.setState(newState);
  }

  render() {
    const {
      viewMode,
      searchResults,
      showFilters,
      minAge,
      maxAge,
      height,
      weight,
      showActorDetail,
      activeActor,
    } = this.state;
    return (
      <div id="search-root" className={showFilters ? '' : 'expanded'}>
        <SearchHeader showFilters={showFilters} toggleViewMode={this.toggleViewMode} />
        <SearchFilters
          showFilters={showFilters}
          minAge={minAge}
          maxAge={maxAge}
          height={height}
          weight={weight}
          toggleFilters={this.toggleFilters}
          updateMinAge={this.updateMinAge}
          updateMaxAge={this.updateMaxAge}
          updateHeightFeet={this.updateHeightFeet}
          updateHeightInches={this.updateHeightInches}
          updateWeight={this.updateWeight}
          updateFilterState={this.updateFilterState}
        />
        <SearchResults
          results={searchResults}
          viewMode={viewMode}
          showFilters={showFilters}
          openActorDetail={this.openActorDetail}
        />
        <div
          className={`modal-container${showActorDetail ? ' visible' : ''}`}
          onClick={this.closeActorDetail}
          onKeyPress={this.closeActorDetail}
          role="button"
          tabIndex="0"
        >
          <div
            className="modal-window"
            onClick={e => e.stopPropagation()}
            onKeyPress={e => e.stopPropagation()}
            role="button"
            tabIndex="0"
          >
            <div
              className="headshot-container"
              style={{ backgroundImage: `url(${activeActor.headshot})` }}
            />
            <div className="right-side">
              {activeActor
                && (
                  <h1>
                    {activeActor.firstName}
                    &nbsp;
                    {activeActor.lastName}
                  </h1>
                )
              }
              {activeActor
                && (
                  <div className="social-icon-group">
                    {activeActor.socialMedia.instagram && <ExternalLink href={activeActor.socialMedia.instagram}><img src={InstagramIcon} alt="instagram" /></ExternalLink>}
                    {activeActor.socialMedia.facebook && <ExternalLink href={activeActor.socialMedia.facebook}><img src={FacebookIcon} alt="facebook" /></ExternalLink>}
                    {activeActor.socialMedia.youtube && <ExternalLink href={activeActor.socialMedia.youtube}><img src={YoutubeIcon} alt="youtube" /></ExternalLink>}
                    {activeActor.socialMedia.twitter && <ExternalLink href={activeActor.socialMedia.twitter}><img src={TwitterIcon} alt="twitter" /></ExternalLink>}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
