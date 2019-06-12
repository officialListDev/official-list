import React from 'react'
import exact from 'prop-types-exact'
import {
  number, arrayOf, string, shape, func,
} from 'prop-types'
import ExternalLink from '../../components/Utility/ExternalLink'
import Button from '../../components/Forms/Button'
import InstagramIcon from '../../img/instagram.svg'
import FacebookIcon from '../../img/facebook.svg'
import YoutubeIcon from '../../img/youtube.svg'
import TwitterIcon from '../../img/twitter.svg'

const SearchResultsList = ({ results, openActorDetail }) => (
  <table className="results-list" cellSpacing="0">
    <thead>
      <tr>
        <th>Headshot</th>
        <th>Name</th>
        <th>Social Media</th>
      </tr>
    </thead>
    <tbody>
      {results.map(result => (
        <tr
          className="row"
          key={`${result.firstName}-${result.lastName}`}
          onClick={() => openActorDetail(result.id)}
        >
          <td><div className="headshot-cell" style={{ backgroundImage: `url(${result.headshot})` }} /></td>
          <td className="name-cell">
            {result.firstName}
            &nbsp;
            {result.lastName}
          </td>
          <td>
            <div className="social-icon-group">
              {result.socialMedia.instagram && <ExternalLink href={result.socialMedia.instagram}><img src={InstagramIcon} alt="instagram" /></ExternalLink>}
              {result.socialMedia.facebook && <ExternalLink href={result.socialMedia.facebook}><img src={FacebookIcon} alt="facebook" /></ExternalLink>}
              {result.socialMedia.youtube && <ExternalLink href={result.socialMedia.youtube}><img src={YoutubeIcon} alt="youtube" /></ExternalLink>}
              {result.socialMedia.twitter && <ExternalLink href={result.socialMedia.twitter}><img src={TwitterIcon} alt="twitter" /></ExternalLink>}
            </div>
          </td>
          <td>
            <Button color="#43c5c4">Add to...</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

SearchResultsList.propTypes = exact({
  results: arrayOf(shape({
    id: number.isRequired,
    firstName: string.isRequired,
    lastName: string.isRequired,
    headshot: string.isRequired,
    socialMedia: shape({
      instagram: string,
      facebook: string,
      youtube: string,
      twitter: string,
    }).isRequired,
  })).isRequired,
  openActorDetail: func.isRequired,
})

export default SearchResultsList
