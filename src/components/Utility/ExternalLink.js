import React from 'react'
import exact from 'prop-types-exact'
import {
  string, arrayOf, oneOfType, node,
} from 'prop-types'

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
)

ExternalLink.propTypes = exact({
  href: string.isRequired,
  children: oneOfType([arrayOf(node), string, node]).isRequired,
})

export default ExternalLink
