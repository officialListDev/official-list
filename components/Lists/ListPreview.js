/**
 * @module ListPreview.js
 * @author Austin Ruby
 * @description Reusable component to display director's lists in summary view
 */

import React from 'react';
import {
  string, shape,
} from 'prop-types';
import exact from 'prop-types-exact';

// list item with name and description of list
const ListPreview = ({ listDetails }) => {
  const { listName, listDescription } = listDetails;
  return (
    <div className="list-preview-container">
      <button type="button">
        <h3 className="list-name">{listName}</h3>
        <p className="list-description">{listDescription}</p>
      </button>
      <style jsx>
        {`
        button{
          background-color: white;
          border: 0px;
          width: 80%;
          margin: 10px;
        }
        .list-name{

        }
      `}
      </style>
    </div>
  );
};

ListPreview.propTypes = exact({
  listDetails: shape({
    listName: string.isRequired,
    listDescription: string,
  }).isRequired,
});

export default ListPreview;
