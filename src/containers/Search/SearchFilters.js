import React from 'react';
import exact from 'prop-types-exact';
import {
  func, bool, number, shape,
} from 'prop-types';

const propTypes = exact({
  showFilters: bool.isRequired,
  minAge: number.isRequired,
  maxAge: number.isRequired,
  height: shape({
    feet: number.isRequired,
    inches: number.isRequired,
  }).isRequired,
  weight: number.isRequired,
  toggleFilters: func.isRequired,
  updateMinAge: func.isRequired,
  updateMaxAge: func.isRequired,
  updateHeightFeet: func.isRequired,
  updateHeightInches: func.isRequired,
  updateWeight: func.isRequired,
});

const SearchFilters = (
  {
    showFilters,
    toggleFilters,
    minAge,
    updateMinAge,
    maxAge,
    updateMaxAge,
    height,
    updateHeightFeet,
    updateHeightInches,
    weight,
    updateWeight,
  },
) => (
  <aside>
    <div
      id="search-filters"
      className={showFilters ? '' : 'hidden'}
    >
      <form>
        <div id="age-range" className="slider-container">
          <h4>Ages Playable:</h4>
          <label htmlFor="min-age">
            Min:&nbsp;
            {
              minAge
            }
            <input
              id="min-age"
              name="min-age"
              type="range"
              min="1"
              max="98"
              step="1"
              value={minAge}
              onChange={e => updateMinAge(e.target.value)}
            />
          </label>
          <label htmlFor="max-age">
            Max:&nbsp;
            {
              maxAge
            }
            <input
              id="max-age"
              name="max-age"
              type="range"
              min="2"
              max="99"
              step="1"
              value={maxAge}
              onChange={e => updateMaxAge(e.target.value)}
            />
          </label>
        </div>
        <div id="height" className="slider-container">
          <h4>Height:</h4>
          <label htmlFor="height-feet">
            Feet:&nbsp;
            {
              height.feet
            }
            <input
              id="height-feet"
              name="height-feet"
              type="range"
              min="2"
              max="7"
              step="1"
              value={height.feet}
              onChange={e => updateHeightFeet(e.target.value)}
            />
          </label>
          <label htmlFor="height-inches">
            Inches:&nbsp;
            {
              height.inches
            }
            <input
              id="height-inches"
              name="height-inches"
              type="range"
              min="0"
              max="11"
              step="1"
              value={height.inches}
              onChange={e => updateHeightInches(e.target.value)}
            />
          </label>
        </div>
        <div id="weight">
          <h4>
            Weight (lbs):
            <input
              id="weight"
              className="inline"
              name="weight"
              type="number"
              min="1"
              max="350"
              value={weight}
              onChange={e => updateWeight(e.target.value)}
            />
          </h4>
        </div>
      </form>
    </div>
    <button
      type="button"
      id="toggle-filters"
      className={showFilters ? '' : 'left'}
      onClick={() => toggleFilters(!showFilters)}
    >
      <p>
        F
        <br />
        i
        <br />
        l
        <br />
        t
        <br />
        e
        <br />
        r
        <br />
        s
      </p>
    </button>
  </aside>
);

SearchFilters.propTypes = propTypes;

export default SearchFilters;
