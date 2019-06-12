import React from 'react'
import {
  oneOfType, arrayOf, node, string,
} from 'prop-types'
import exact from 'prop-types-exact'

const Button = ({ children, color }) => (
  <button className="button" type="button" style={{ backgroundColor: color }}>
    {children}
  </button>
)

Button.propTypes = exact({
  children: oneOfType([arrayOf(node), string]).isRequired,
  color: string.isRequired,
})

export default Button
