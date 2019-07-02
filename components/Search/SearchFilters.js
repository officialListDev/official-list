import React from 'react'
import exact from 'prop-types-exact'
import {
  func, bool, number, arrayOf, string,
} from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addInstrument,
  addVoiceRange,
  removeInstrument,
  removeVoiceRange,
  toggleSearchFilters,
  updateHeightFeet,
  updateHeightInches,
  updateMinAge,
  updateMaxAge,
} from '../../actions'
import InputSlider from '../../components/Forms/InputSlider'
import InputCheckboxGroup from '../../components/Forms/InputCheckboxGroup'
import ButtonVerticalToggle from '../../components/Forms/ButtonVerticalToggle'

const instruments = ['drums', 'trumpet', 'horn', 'guitar', 'piano', 'accordion']

const voiceRanges = ['soprano', 'mezzo-soprano', 'contralto', 'countertenor', 'tenor', 'baritone', 'bass']

const SearchFilters = (
  {
    activeInstruments,
    activeVoiceRanges,
    addInstrument,
    addVoiceRange,
    heightFeet,
    heightInches,
    minAge,
    maxAge,
    removeInstrument,
    removeVoiceRange,
    shouldShowFilters,
    toggleSearchFilters,
    updateMaxAge,
    updateMinAge,
    updateHeightFeet,
    updateHeightInches,
  },
) => (
  <aside>
    <div
      id="search-filters"
      className={shouldShowFilters ? '' : 'hidden'}
    >
      <form>
        <div id="age-range" className="slider-container">
          <h4>Ages Playable:</h4>
          <InputSlider inputName="min-age" labelName="Min." inputValue={minAge} handleChange={updateMinAge} min={1} max={98} />
          <InputSlider inputName="max-age" labelName="Max." inputValue={maxAge} handleChange={updateMaxAge} min={2} max={99} />
        </div>
        <div id="height-group" className="slider-container">
          <h4>Height:</h4>
          <InputSlider inputName="height-feet" labelName="Feet:" inputValue={heightFeet} handleChange={updateHeightFeet} min={2} max={7} />
          <InputSlider inputName="height-inches" labelName="Inches:" inputValue={heightInches} handleChange={updateHeightInches} min={0} max={11} />
        </div>
        <div id="instruments-group">
          <h4>Instruments:</h4>
          <InputCheckboxGroup
            activeList={activeInstruments}
            addToActiveList={addInstrument}
            checkboxes={instruments}
            groupName="instruments"
            removeFromActiveList={removeInstrument}
          />
        </div>
        <div id="voice-group">
          <h4>Voice Range:</h4>
          <InputCheckboxGroup
            activeList={activeVoiceRanges}
            addToActiveList={addVoiceRange}
            checkboxes={voiceRanges}
            groupName="voiceRange"
            onePerLine
            removeFromActiveList={removeVoiceRange}
          />
        </div>
      </form>
    </div>
    <button type="button" id="apply-filters" className={shouldShowFilters ? '' : 'hidden'}>
      Apply
    </button>
    <ButtonVerticalToggle buttonId="toggle-filters" toggleState={shouldShowFilters} handleClick={toggleSearchFilters} labelName="Filters" />
    <style jsx>{`
      #search-filters {
        position: fixed;
        left: 0px;
        top: 57px;
        z-index: 100;
        width: calc(250px - 2rem);
        padding: 0 1rem 50px;
        height: calc(100vh - 107px);
        overflow-y: scroll;
        background: #ffffff;
        border-right: 1px solid #8E8E93;
        transform: translate3d(0,0,0);
        transition: 0.3s ease;
      }
      #search-filters.hidden {
        transform: translate3d(-251px,0,0);
      }
      #apply-filters {
        appearance: none;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 102;
        background-color: rgb(67, 197, 196);
        color: #ffffff;
        border: none;
        margin: 0;
        padding: 1rem 0;
        text-transform: uppercase;
        font-size: 16px;
        width: 250px;
        transition: 0.3s;
        transform: translate3d(0,0,0);
        cursor: pointer;
      }
      #apply-filters:hover {
        background-color: rgb(57, 153, 153);
      }
      #apply-filters.hidden {
        transform: translate3d(-250px,0,0);
      }
    `}</style>
    <style jsx global>{`
      button.button {
        appearance: none;
        outline: none;
        border: none;
        padding: 5px 8px;
        font-size: 14px;
        color: #ffffff;
        transition: 0.2s;
        cursor: pointer;
        align-self: center;
      }
      button.button:hover {
        box-shadow: -1px 3px 5px 0 #8E8E93;
      }
      input[type="number"]::-webkit-inner-spin-button {
        cursor: pointer;
      }
      .checklist-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      label.checklist-label {
        margin-bottom: 7.5px;
        margin-right: 30px;
        width: 75px;
        text-transform: capitalize;
        display: flex;
        align-items: center;
      }
      label.checklist-label.full-width {
        width: 100%;
      }
      input[type="checkbox"] {
        margin-right: 5px;
        margin-top: 0;
        margin-left: 0;
        margin-bottom: 0;
      }
      .slider-container label {
        margin: 1rem 0;
        display: block;
      }
      .slider-container label input {
        width: 100%;
        margin: 0.25rem 0;
        appearance: none;
        outline: none;
      }
      h4 input.inline {
        outline: none;
        font-size: 18px;
        padding: 8px 11px;
        margin-left: 1rem;
      }
      .slider-container label input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        border: none;
        border-radius: 100%;
        background-color: #43c5c4;
        margin-top: -4px;
        cursor: pointer;
      }
      .slider-container label input[type="range"]::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 8px;
        width: 100%;
        border: 1px solid #8e8e93;
        border-radius: 5px;
        background-color: #ffffff;
        cursor: pointer;
      }
      .slider-container label input[type="range"]::-moz-range-thumb {
        -moz-appearance: none;
        height: 16px;
        width: 16px;
        border: none;
        border-radius: 100%;
        background-color: #43c5c4;
        cursor: pointer;
      }
      .slider-container label input[type="range"]::-moz-range-track {
        -moz-appearance: none;
        height: 8px;
        width: 100%;
        border: 1px solid #8e8e93;
        border-radius: 5px;
        background-color: #ffffff;
        cursor: pointer;
      }
      .slider-container label input[type="range"]::-ms-thumb {
        -ms-appearance: none;
        height: 16px;
        width: 16px;
        border: none;
        border-radius: 100%;
        background-color: #43c5c4;
        cursor: pointer;
      }
      .slider-container label input::-ms-track {
        -ms-appearance: none;
        height: 8px;
        width: 100%;
        border: 1px solid #8e8e93;
        border-radius: 5px;
        background-color: #ffffff;
        cursor: pointer;
      }
    `}</style>
    <style jsx global>{`
      #toggle-filters {
        appearance: none;
        outline: none;
        border: none;
        position: fixed;
        top: calc((100vh - 57px) / 2);
        left: 251px;
        z-index: 101;
        background-color: rgb(67, 197, 196);
        color: #ffffff;
        width: 20px;
        text-align: center;
        text-transform: uppercase;
        padding: 0.25rem;
        cursor: pointer;
        transform: translate3d(0,0,0);
        transition: 0.3s ease;
      }
      #toggle-filters:hover {
        background-color: rgba(67, 197, 196, 0.7);
      }
      #toggle-filters.left {
        transform: translate3d(-251px,0,0)
      }
      #toggle-filters p {
        margin: 0;
      }
    `}</style>
  </aside>
)

function mapStateToProps (state) {
  const {
    activeInstruments,
    activeVoiceRanges,
    heightFeet,
    heightInches,
    maxAge,
    minAge,
  } = state
  return {
    activeInstruments,
    activeVoiceRanges,
    heightFeet,
    heightInches,
    maxAge,
    minAge,
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addInstrument,
    addVoiceRange,
    removeInstrument,
    removeVoiceRange,
    toggleSearchFilters,
    updateHeightFeet,
    updateHeightInches,
    updateMinAge,
    updateMaxAge,
  }, dispatch)
)

SearchFilters.propTypes = exact({
  activeInstruments: arrayOf(string).isRequired,
  activeVoiceRanges: arrayOf(string).isRequired,
  addInstrument: func.isRequired,
  addVoiceRange: func.isRequired,
  heightFeet: number.isRequired,
  heightInches: number.isRequired,
  minAge: number.isRequired,
  maxAge: number.isRequired,
  removeInstrument: func.isRequired,
  removeVoiceRange: func.isRequired,
  shouldShowFilters: bool.isRequired,
  toggleSearchFilters: func.isRequired,
  updateMinAge: func.isRequired,
  updateMaxAge: func.isRequired,
  updateHeightFeet: func.isRequired,
  updateHeightInches: func.isRequired,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFilters)
