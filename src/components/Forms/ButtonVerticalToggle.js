import React from 'react'
import { func, string, bool } from 'prop-types'
import exact from 'prop-types-exact'

const VerticalButton = ({
  buttonId, handleClick, toggleState, labelName,
}) => (
  <button
    type="button"
    id={buttonId}
    className={toggleState ? '' : 'left'}
    onClick={() => handleClick(!toggleState)}
  >
    <p>
      {labelName.split('').map((letter, index) => (
        <span key={index}>
          {letter}
          <br />
        </span>
      ))}
    </p>
  </button>
)

VerticalButton.propTypes = exact({
  handleClick: func.isRequired,
  toggleState: bool.isRequired,
  buttonId: string.isRequired,
  labelName: string.isRequired,
})

export default VerticalButton
