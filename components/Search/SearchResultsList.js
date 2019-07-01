import React from 'react'
import exact from 'prop-types-exact'
import {
  number, arrayOf, string, shape, func,
} from 'prop-types'
import ExternalLink from '../../components/Utility/ExternalLink'
import Button from '../../components/Forms/Button'

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
          onClick={() => openActorDetail(result)}
        >
          <td><div className="headshot-cell" style={{ backgroundImage: `url(${result.headshot})` }} /></td>
          <td className="name-cell">
            {result.firstName}
            &nbsp;
            {result.lastName}
          </td>
          <td>
            <div className="social-icon-group">
              {result.socialMedia.instagram && <ExternalLink href={result.socialMedia.instagram}><img src="/static/img/instagram.svg" alt="instagram" /></ExternalLink>}
              {result.socialMedia.facebook && <ExternalLink href={result.socialMedia.facebook}><img src="/static/img/facebook.svg" alt="facebook" /></ExternalLink>}
              {result.socialMedia.youtube && <ExternalLink href={result.socialMedia.youtube}><img src="/static/img/youtube.svg" alt="youtube" /></ExternalLink>}
              {result.socialMedia.twitter && <ExternalLink href={result.socialMedia.twitter}><img src="/static/img/twitter.svg" alt="twitter" /></ExternalLink>}
            </div>
          </td>
          <td>
            <Button color="#43c5c4">Add to...</Button>
          </td>
        </tr>
      ))}
    </tbody>
    <style jsx>{`
      .results-list {
        width: 100%;
        border: 1px solid #8E8E93;
        background-color: #ffffff;
      }
      .row {
        cursor: pointer;
      }
      .row:nth-child(2n-1) {
        background: rgba(142, 142, 147, 0.2);
      }
      .row:hover {
        background: rgba(67, 197, 196, 0.15);
      }
      th {
        padding: 1rem;
        text-align: center;
      }
      td {
        padding: 1rem;
        text-align: left;
      }
      .name-cell {
        padding-left: 4rem;
      }
      td .social-icon-group {
        width: 260px;
        margin: 0 auto;
      }
      td .social-icon-group img {
        width: 25px;
        height: 25px;
        margin: 0 1.25rem;
        transition: 0.2s ;
      }
      .headshot-cell {
        height: 135px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}</style>
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
