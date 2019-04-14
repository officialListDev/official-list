import React from 'react';
import { string, func, arrayOf } from 'prop-types';
import exact from 'prop-types-exact';

const propTypes = exact({
  checklistName: string.isRequired,
  checklistItems: arrayOf(string).isRequired,
  activeStateKey: string.isRequired,
  updateFilterState: func.isRequired,
});

const InputChecklistGroup = ({
  checklistName, checklistItems, activeStateKey, updateFilterState,
}) => (
  <div className="checklist-group">
    {checklistItems.map(checklistItem => (
      <label key={checklistItem} className="checklist-label" htmlFor={`${checklistName}-${checklistItem}`}>
        <input
          id={`${checklistName}-${checklistItem}`}
          type="checkbox"
          value={checklistItem}
          onChange={e => updateFilterState(e, activeStateKey, checklistItem)}
        />
        {checklistItem}
      </label>
    ))}
  </div>
);

InputChecklistGroup.propTypes = propTypes;

export default InputChecklistGroup;
