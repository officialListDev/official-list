import React from 'react'
import {
  string, func, arrayOf, bool,
} from 'prop-types'
import exact from 'prop-types-exact'

const InputCheckboxGroup = ({
  activeList,
  addToActiveList,
  checkboxes,
  groupName,
  onePerLine,
  removeFromActiveList,
}) => (
  <div className="checklist-group">
    {checkboxes.map(checkboxItem => (
      <label key={checkboxItem} className={`checklist-label${onePerLine ? ' full-width' : ''}`} htmlFor={`${groupName}-${checkboxItem}`}>
        <input
          id={`${groupName}-${checkboxItem}`}
          type="checkbox"
          value={checkboxItem}
          onChange={e => { e.target.checked ? addToActiveList(checkboxItem) : removeFromActiveList(checkboxItem) }}
          checked={activeList.includes(checkboxItem)}
        />
        {checkboxItem}
      </label>
    ))}
  </div>
)

InputCheckboxGroup.propTypes = exact({
  activeList: arrayOf(string).isRequired,
  addToActiveList: func.isRequired,
  checkboxes: arrayOf(string).isRequired,
  groupName: string.isRequired,
  onePerLine: bool,
  removeFromActiveList: func.isRequired,
})

InputCheckboxGroup.defaultProps = {
  onePerLine: false,
}

export default InputCheckboxGroup
