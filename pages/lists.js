/**
 * @module ListPreview.js
 * @author Austin Ruby
 * @description Page to display all of a director's lists
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  string, func, bool, number, arrayOf, shape,
} from 'prop-types';
import exact from 'prop-types-exact';
import {
  closeActorDetail,
  openActorDetail,
  toggleSearchView,
} from '../actions';
import ActorDetail from '../components/Actor/ActorDetail';
import ListPreview from '../components/Lists/ListPreview';

function mapStateToProps (state) {
  const { lists } = state.userProfile;
  return { lists };
}

class Lists extends Component {
  render () {
    const { lists } = this.props;
    const listPreviewTags = lists.map((list) =>
      // console.log('list: ', list);
      (
        <ListPreview listDetails={list} key={list.listID} />
      ));
    // console.log('listPreviewTags: ', listPreviewTags);

    return (
      <div id="lists-root">
        { listPreviewTags }
        <style jsx>
          {`
          #lists-root {
            height: 100vh;
            padding: 7.5rem 2rem 2rem calc(250px + 2rem);
            transition: 0.3s ease;
            background: rgba(67, 197, 196, 0.3);
          }
        `}
        </style>
      </div>
    );
  }
}

Lists.propTypes = exact({
  lists: arrayOf(shape({
    listID: number.isRequired,
    listName: string.isRequired,
    listDescription: string.isRequired,
    actors: arrayOf(number),
  })).isRequired,
});

export default connect(mapStateToProps, null)(Lists);
