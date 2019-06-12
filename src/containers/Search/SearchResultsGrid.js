import React from 'react'
import exact from 'prop-types-exact'
import {
  arrayOf, shape, bool, string, number, func,
} from 'prop-types'
import ExternalLink from '../../components/Utility/ExternalLink'
import InstagramIcon from '../../img/instagram.svg'
import FacebookIcon from '../../img/facebook.svg'
import YoutubeIcon from '../../img/youtube.svg'
import TwitterIcon from '../../img/twitter.svg'

const SearchResultsGrid = ({ results, showFilters, openActorDetail }) => (
  results.map(result => (
    <div
      className={showFilters ? 'grid-card' : 'grid-card compact'}
      key={`${result.firstName}-${result.lastName}`}
      onClick={() => openActorDetail(result.id)}
      onKeyPress={() => openActorDetail(result.id)}
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
          {result.socialMedia.instagram && <ExternalLink href={result.socialMedia.instagram}><img src={InstagramIcon} alt="instagram" /></ExternalLink>}
          {result.socialMedia.facebook && <ExternalLink href={result.socialMedia.facebook}><img src={FacebookIcon} alt="facebook" /></ExternalLink>}
          {result.socialMedia.youtube && <ExternalLink href={result.socialMedia.youtube}><img src={YoutubeIcon} alt="youtube" /></ExternalLink>}
          {result.socialMedia.twitter && <ExternalLink href={result.socialMedia.twitter}><img src={TwitterIcon} alt="twitter" /></ExternalLink>}
        </div>
      </div>
    </div>
  ))
)

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
})

export default SearchResultsGrid
