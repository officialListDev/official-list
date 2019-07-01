import { combineReducers } from 'redux'
import {
  ADD_INSTRUMENT,
  ADD_VOICE_RANGE,
  CLOSE_ACTOR_DETAIL,
  OPEN_ACTOR_DETAIL,
  REMOVE_VOICE_RANGE,
  REMOVE_INSTRUMENT,
  SearchViewModes,
  TOGGLE_SEARCH_VIEW,
  TOGGLE_SEARCH_FILTERS,
  UPDATE_MIN_AGE,
  UPDATE_MAX_AGE,
  UPDATE_HEIGHT_FEET,
  UPDATE_HEIGHT_INCHES,
} from './actions'

const { GRID } = SearchViewModes

function activeInstruments (state = [], action) {
  switch (action.type) {
  case ADD_INSTRUMENT:
    return [
      ...state,
      action.instrument,
    ]
  case REMOVE_INSTRUMENT:
    return state.slice(0).filter(instrument => instrument !== action.instrument)
  default:
    return state
  }
}

function activeVoiceRanges (state = [], action) {
  switch (action.type) {
  case ADD_VOICE_RANGE:
    return [
      ...state,
      action.voiceRange,
    ]
  case REMOVE_VOICE_RANGE:
    return state.slice(0).filter(voiceRange => voiceRange !== action.voiceRange)
  default:
    return state
  }
}

function actorDetail (state = { shouldShow: false, activeActor: null }, action) {
  switch (action.type) {
  case CLOSE_ACTOR_DETAIL:
    return {
      shouldShow: false,
      activeActor: state.activeActor,
    }
  case OPEN_ACTOR_DETAIL:
    return {
      shouldShow: true,
      activeActor: action.activeActor,
    }
  default:
    return state
  }
}

function heightFeet (state = 5, action) {
  switch (action.type) {
  case UPDATE_HEIGHT_FEET:
    return action.heightFeet
  default:
    return state
  }
}

function heightInches (state = 8, action) {
  switch (action.type) {
  case UPDATE_HEIGHT_INCHES:
    return action.heightInches
  default:
    return state
  }
}

function maxAge (state = 34, action) {
  switch (action.type) {
  case UPDATE_MAX_AGE:
    return action.maxAge
  default:
    return state
  }
}

function minAge (state = 25, action) {
  switch (action.type) {
  case UPDATE_MIN_AGE:
    return action.minAge
  default:
    return state
  }
}

function searchViewMode (state = GRID, action) {
  switch (action.type) {
  case TOGGLE_SEARCH_VIEW:
    return action.searchView
  default:
    return state
  }
}

function searchResults (state = [], action) {
  switch (action.type) {
  default:
    return state
  }
}

function shouldShowSearchFilters (state = true, action) {
  switch (action.type) {
  case TOGGLE_SEARCH_FILTERS:
    return action.shouldShowSearchFilters
  default:
    return state
  }
}

const rootReducer = combineReducers({
  actorDetail,
  activeInstruments,
  activeVoiceRanges,
  heightFeet,
  heightInches,
  maxAge,
  minAge,
  searchResults,
  searchViewMode,
  shouldShowSearchFilters,
})

export default rootReducer