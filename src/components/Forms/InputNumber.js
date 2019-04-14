import React from 'react';
import { number, func, string } from 'prop-types';
import exact from 'prop-types-exact';

const propTypes = exact({
  inputValue: number.isRequired,
  inputName: string.isRequired,
  className: string,
  handleChange: func.isRequired,
  min: number.isRequired,
  max: number.isRequired,
});

const defaultProps = {
  className: '',
};

const InputNumber = ({
  inputValue, inputName, className, handleChange, min, max,
}) => (
  <input
    id={inputName}
    className={className}
    name={inputName}
    type="number"
    min={min}
    max={max}
    value={inputValue}
    onChange={e => handleChange(e.target.value)}
  />
);

InputNumber.defaultProps = defaultProps;

InputNumber.propTypes = propTypes;

export default InputNumber;
