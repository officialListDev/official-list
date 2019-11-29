import React from 'react'
import { func, number, string } from 'prop-types'
import exact from 'prop-types-exact'

const SliderInput = ({
  labelName, inputName, inputValue, handleChange, min, max, step,
}) => (
  <label htmlFor={inputName}>
    {labelName}
    &nbsp;
    {
      inputValue
    }
    <input
      id={inputName}
      name={inputName}
      type="range"
      min={min}
      max={max}
      step={step}
      value={inputValue}
      onChange={e => handleChange(e.target.value)}
    />
  </label>
)

SliderInput.propTypes = exact({
  labelName: string.isRequired,
  inputName: string.isRequired,
  inputValue: number.isRequired,
  handleChange: func.isRequired,
  min: number.isRequired,
  max: number.isRequired,
  step: number,
})

SliderInput.defaultProps = {
  step: 1,
}

export default SliderInput
