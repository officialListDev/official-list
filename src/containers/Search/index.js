import React, { Component } from 'react';
import './style.css';
import SearchHeader from './SearchHeader';
import SearchFilters from './SearchFilters';
import SearchResults from './SearchResults';
import results from '../../mocks/search-results';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: 'grid',
      showFilters: true,
      minAge: 25,
      maxAge: 34,
      height: {
        feet: 5,
        inches: 8,
      },
      weight: 160,
    };
    this.toggleViewMode = this.toggleViewMode.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
    this.updateMinAge = this.updateMinAge.bind(this);
    this.updateMaxAge = this.updateMaxAge.bind(this);
    this.updateHeightFeet = this.updateHeightFeet.bind(this);
    this.updateHeightInches = this.updateHeightInches.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
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

  render() {
    const {
      viewMode, showFilters, minAge, maxAge, height, weight,
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
        />
        <SearchResults results={results} viewMode={viewMode} showFilters={showFilters} />
      </div>
    );
  }
}

export default Search;
