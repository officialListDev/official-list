import React from 'react'
import {
  string, func, arrayOf, bool,
} from 'prop-types'
import exact from 'prop-types-exact'

const InputChecklistGroup = ({
  checklistName, checklistItems, activeStateKey, updateFilterState, onePerLine,
}) => (
  <div className="checklist-group">
    {checklistItems.map(checklistItem => (
      <label key={checklistItem} className={`checklist-label${onePerLine ? ' full-width' : ''}`} htmlFor={`${checklistName}-${checklistItem}`}>
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
)

InputChecklistGroup.propTypes = exact({
  checklistName: string.isRequired,
  checklistItems: arrayOf(string).isRequired,
  activeStateKey: string.isRequired,
  updateFilterState: func.isRequired,
  onePerLine: bool,
})

InputChecklistGroup.defaultProps = {
  onePerLine: false,
}

export default InputChecklistGroup
