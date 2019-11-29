import React from 'react';
import exact from 'prop-types-exact';
import {
  arrayOf, shape, bool, string, number, func,
} from 'prop-types';
import ExternalLink from '../Utility/ExternalLink';

const SearchResultsGrid = ({ results, showFilters, openActorDetail }) => (
  results.map((result) => (
    <div
      className={showFilters ? 'grid-card' : 'grid-card compact'}
      key={`${result.firstName}-${result.lastName}`}
      onClick={() => openActorDetail(result)}
      onKeyPress={() => openActorDetail(result)}
      role="button"
      tabIndex="0"
    >
      <div className="grid-card-image" style={{ backgroundImage: `url(${result.headshot})` }} />
      <div className="grid-card-info">
        <p>
          {result.firstName}
          &nbsp;
          {result.lastName}
        </p>
        <div className="social-icon-group">
          {result.socialMedia.instagram && <ExternalLink href={result.socialMedia.instagram}><img src="/static/img/instagram.svg" alt="instagram" /></ExternalLink>}
          {result.socialMedia.facebook && <ExternalLink href={result.socialMedia.facebook}><img src="/static/img/facebook.svg" alt="facebook" /></ExternalLink>}
          {result.socialMedia.youtube && <ExternalLink href={result.socialMedia.youtube}><img src="/static/img/youtube.svg" alt="youtube" /></ExternalLink>}
          {result.socialMedia.twitter && <ExternalLink href={result.socialMedia.twitter}><img src="/static/img/twitter.svg" alt="twitter" /></ExternalLink>}
        </div>
      </div>
      <style jsx>
        {`
        .grid-card {
          width: calc(50% - 1rem);
          margin: 0.5rem 0;
          cursor: pointer;
          transition: 0.3s ease;
          background-color: #ffffff;
          outline: none;
        }

        .grid-card:hover {
          box-shadow: -1px 3px 5px 0 #8E8E93;
        }

        .grid-card.compact {
          width: calc(33% - 1rem);
        }

        .grid-card-image {
          width: calc(100% - 4rem);
          height: calc(350px - 4rem);
          margin: 2rem 2rem 1rem;
          display: flex;
          justify-content: center;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #ffffff;
        }

        .grid-card-info {
          padding: 0 1rem;
          font-size: 20px;
          display: flex;
          justify-content: space-between;
        }

        .grid-card-info p {
          margin: 10px 0;
        }

        .social-icon-group {
          display: flex;
          align-items: center;
        }

        .social-icon-group img {
          width: 18px;
          height: 18px;
          margin: 0 0.25rem;
          transition: 0.2s ;
        }

        .social-icon-group img:hover {
          opacity: 0.7;
        }
      `}

      </style>
    </div>
  ))
);

SearchResultsGrid.propTypes = exact({
  showFilters: bool.isRequired,
  results: arrayOf(shape({
    id: number.isRequired,
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
  openActorDetail: func.isRequired,
});

export default SearchResultsGrid;
