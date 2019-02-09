import React from 'react';
import exact from 'prop-types-exact';
import {
  func, bool, number, shape,
} from 'prop-types';
import InputSlider from '../../components/Forms/InputSlider';
import InputNumber from '../../components/Forms/InputNumber';
import InputChecklistGroup from '../../components/Forms/InputChecklistGroup';
import ButtonVerticalToggle from '../../components/Forms/ButtonVerticalToggle';
import '../../components/Forms/style.css';

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
  updateFilterState: func.isRequired,
});

const eyeColors = ['green', 'blue', 'gray', 'hazel', 'brown'];

const hairColors = ['blonde', 'brown', 'black', 'red', 'gray', 'white'];

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
    updateFilterState,
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
          <InputSlider inputName="min-age" labelName="Min." inputValue={minAge} handleChange={updateMinAge} min={1} max={98} />
          <InputSlider inputName="max-age" labelName="Max." inputValue={maxAge} handleChange={updateMaxAge} min={2} max={99} />
        </div>
        <div id="height-group" className="slider-container">
          <h4>Height:</h4>
          <InputSlider inputName="height-feet" labelName="Feet:" inputValue={height.feet} handleChange={updateHeightFeet} min={2} max={7} />
          <InputSlider inputName="height-inches" labelName="Inches:" inputValue={height.inches} handleChange={updateHeightInches} min={0} max={11} />
        </div>
        <div id="weight-group">
          <h4>
            Weight (lbs):
            <InputNumber className="inline" inputName="weight" inputValue={weight} min={1} max={350} handleChange={updateWeight} />
          </h4>
        </div>
        <div id="eye-color-group">
          <h4>Eye Color:</h4>
          <InputChecklistGroup checklistName="eye" activeStateKey="eyeColors" checklistItems={eyeColors} updateFilterState={updateFilterState} />
        </div>
        <div id="hair-color-group">
          <h4>Hair Color:</h4>
          <InputChecklistGroup checklistName="hair" activeStateKey="hairColors" checklistItems={hairColors} updateFilterState={updateFilterState} />
        </div>
      </form>
    </div>
    <button type="button" id="apply-filters" className={showFilters ? '' : 'hidden'}>
      Apply
    </button>
    <ButtonVerticalToggle buttonId="toggle-filters" toggleState={showFilters} handleClick={toggleFilters} labelName="Filters" />
  </aside>
);

SearchFilters.propTypes = propTypes;

export default SearchFilters;
