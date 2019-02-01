import React from 'react';
import exact from 'prop-types-exact';
import {
  string, bool, arrayOf, shape,
} from 'prop-types';
import InstagramIcon from '../../img/instagram.svg';
import FacebookIcon from '../../img/facebook.svg';
import YoutubeIcon from '../../img/youtube.svg';
import TwitterIcon from '../../img/twitter.svg';

const propTypes = exact({
  viewMode: string.isRequired,
  showFilters: bool.isRequired,
  results: arrayOf(shape({
    headshot: string.isRequired,
    firstName: string.isRequired,
    lastName: string.isRequired,
    socialMedia: shape({
      instagram: string,
      facebook: string,
      youtube: string,
      twitter: string,
    }).isRequired,
  })).isRequired,
});

const SearchResults = ({ viewMode, showFilters, results }) => (
  <div id="results-container">
    {viewMode === 'grid' && results.map(result => (
      <div className={showFilters ? 'grid-card' : 'grid-card compact'} key={`${result.firstName}-${result.lastName}`}>
        <div className="grid-card-image" style={{ backgroundImage: `url(${result.headshot})` }} />
        <div className="grid-card-info">
          <p>
            {result.firstName}
            &nbsp;
            {result.lastName}
          </p>
          <div className="social-icon-group">
            {result.socialMedia.instagram && <a href={result.socialMedia.instagram}><img src={InstagramIcon} alt="instagram" /></a>}
            {result.socialMedia.facebook && <a href={result.socialMedia.facebook}><img src={FacebookIcon} alt="facebook" /></a>}
            {result.socialMedia.youtube && <a href={result.socialMedia.youtube}><img src={YoutubeIcon} alt="youtube" /></a>}
            {result.socialMedia.twitter && <a href={result.socialMedia.twitter}><img src={TwitterIcon} alt="twitter" /></a>}
          </div>
        </div>
      </div>
    ))}
    {viewMode === 'list' && (
      <table className="results-list" cellSpacing="0">
        <thead>
          <tr>
            <th>Headshot</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => (
            <tr className="row" key={`${result.firstName}-${result.lastName}`}>
              <td><div className="headshot-cell" style={{ backgroundImage: `url(${result.headshot})` }} /></td>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

SearchResults.propTypes = propTypes;

export default SearchResults;
