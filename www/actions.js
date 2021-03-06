import fetch from 'isomorphic-unfetch';
import { apiUrl } from './static/constants/api';

// Action Types
export const ADD_INSTRUMENT = 'ADD_INSTRUMENT';
export const ADD_VOICE_RANGE = 'ADD_VOICE_RANGE';
export const CLOSE_ACTOR_DETAIL = 'CLOSE_ACTOR_DETAIL';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const OPEN_ACTOR_DETAIL = 'OPEN_ACTOR_DETAIL';
export const REMOVE_INSTRUMENT = 'REMOVE_INSTRUMENT';
export const REMOVE_VOICE_RANGE = 'REMOVE_VOICE_RANGE';
export const TOGGLE_SEARCH_VIEW = 'TOGGLE_SEARCH_VIEW';
export const TOGGLE_SEARCH_FILTERS = 'TOGGLE_SEARCH_FILTERS';
export const UPDATE_MIN_AGE = 'UPDATE_MIN_AGE';
export const UPDATE_MAX_AGE = 'UPDATE_MAX_AGE';
export const UPDATE_HEIGHT_FEET = 'UPDATE_HEIGHT_FEET';
export const UPDATE_HEIGHT_INCHES = 'UPDATE_HEIGHT_INCHES';


// Other Constants
export const SearchViewModes = {
  GRID: 'GRID',
  LIST: 'LIST',
};

// Action Creators
export function addInstrument (instrument) {
  return { type: ADD_INSTRUMENT, instrument };
}

export function addVoiceRange (voiceRange) {
  return { type: ADD_VOICE_RANGE, voiceRange };
}

export function closeActorDetail () {
  return { type: CLOSE_ACTOR_DETAIL };
}

export function login (userProfile) {
  return { type: LOGIN, userProfile };
}

export function loginFailure (errorObj) {
  return { type: LOGIN_FAILURE, errorObj };
}

export function loginSuccess (activeUser) {
  console.log('activeUser in loginSuccess: ', activeUser);
  return { type: LOGIN_SUCCESS, activeUser };
}

export function loginRequest (loginInfo) {
  return (dispatch) => {
    console.log(dispatch);
    return fetch(`${apiUrl}/auth/director/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginInfo),
    }).then((response) => {
      if (response.ok) return response.json();
      console.log('incorrect login info');
      return Promise.reject(new Error('incorrect login info'));
    })
      .then((userProfile) => {
        console.log('dispatching loginSuccess');
        dispatch(loginSuccess(userProfile));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailure({ errorObj: err }));
      });
  };
}

export function logout () {
  return { type: LOGOUT };
}

export function openActorDetail (activeActor) {
  return { type: OPEN_ACTOR_DETAIL, activeActor };
}

export function removeInstrument (instrument) {
  return { type: REMOVE_INSTRUMENT, instrument };
}

export function removeVoiceRange (voiceRange) {
  return { type: REMOVE_VOICE_RANGE, voiceRange };
}

export function toggleSearchView (searchView) {
  return { type: TOGGLE_SEARCH_VIEW, searchView };
}

export function toggleSearchFilters (shouldShowSearchFilters) {
  return { type: TOGGLE_SEARCH_FILTERS, shouldShowSearchFilters };
}

export function updateHeightFeet (heightFeet) {
  return { type: UPDATE_HEIGHT_FEET, heightFeet: parseInt(heightFeet, 10) };
}

export function updateHeightInches (heightInches) {
  return { type: UPDATE_HEIGHT_INCHES, heightInches: parseInt(heightInches, 10) };
}

export function updateMinAge (minAge) {
  return { type: UPDATE_MIN_AGE, minAge: parseInt(minAge, 10) };
}

export function updateMaxAge (maxAge) {
  return { type: UPDATE_MAX_AGE, maxAge: parseInt(maxAge, 10) };
}
