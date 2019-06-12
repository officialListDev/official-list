import React from 'react'
import {
  string, bool, func, shape,
} from 'prop-types'
import exact from 'prop-types-exact'
import './style.css'
import ExternalLink from '../Utility/ExternalLink'
import InstagramIcon from '../../img/instagram.svg'
import FacebookIcon from '../../img/facebook.svg'
import YoutubeIcon from '../../img/youtube.svg'
import TwitterIcon from '../../img/twitter.svg'

const ActorDetail = ({ showActorDetail, closeActorDetail, activeActor }) => (
  <div
    className={`modal-container${showActorDetail ? ' visible' : ''}`}
    onClick={closeActorDetail}
    onKeyPress={closeActorDetail}
    role="button"
    tabIndex="0"
  >
    <div
      className="modal-window"
      onClick={e => e.stopPropagation()}
      onKeyPress={e => e.stopPropagation()}
      role="button"
      tabIndex="0"
    >
      <div
        className="headshot-container"
        style={{ backgroundImage: `url(${activeActor.headshot})` }}
      />
      <div className="right-side">
        {activeActor
          && (
            <h1>
              {activeActor.firstName}
              &nbsp;
              {activeActor.lastName}
            </h1>
          )
        }
        {activeActor
          && (
            <div className="social-icon-group">
              {activeActor.socialMedia.instagram && <ExternalLink href={activeActor.socialMedia.instagram}><img src={InstagramIcon} alt="instagram" /></ExternalLink>}
              {activeActor.socialMedia.facebook && <ExternalLink href={activeActor.socialMedia.facebook}><img src={FacebookIcon} alt="facebook" /></ExternalLink>}
              {activeActor.socialMedia.youtube && <ExternalLink href={activeActor.socialMedia.youtube}><img src={YoutubeIcon} alt="youtube" /></ExternalLink>}
              {activeActor.socialMedia.twitter && <ExternalLink href={activeActor.socialMedia.twitter}><img src={TwitterIcon} alt="twitter" /></ExternalLink>}
            </div>
          )}
      </div>
    </div>
  </div>
)

ActorDetail.propTypes = exact({
  showActorDetail: bool.isRequired,
  closeActorDetail: func.isRequired,
  activeActor: shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
    headshot: string.isRequired,
  }),
})

export default ActorDetail
