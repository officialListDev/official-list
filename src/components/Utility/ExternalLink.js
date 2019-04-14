import React from 'react';
import exact from 'prop-types-exact';
import {
  string, arrayOf, oneOfType, node,
} from 'prop-types';

const propTypes = exact({
  href: string.isRequired,
  children: oneOfType([arrayOf(node), string]).isRequired,
});

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

ExternalLink.propTypes = propTypes;

export default ExternalLink;
