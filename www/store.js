import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { SearchViewModes } from './actions';
import mockSearchResults from './mocks/actors';
import mockDirectorLists from './mocks/director-lists';

const { GRID } = SearchViewModes;

const exampleInitialState = {
  actorDetail: {
    shouldShow: false,
    activeActor: null,
  },
  activeVoiceRanges: [],
  activeInstruments: [],
  searchViewMode: GRID,
  searchResults: mockSearchResults,
  shouldShowSearchFilters: true,
  minAge: 25,
  maxAge: 34,
  heightFeet: 5,
  heightInches: 8,
  login: { activeUser: null, errorObj: null },
};

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
