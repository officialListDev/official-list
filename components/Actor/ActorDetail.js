import React from 'react'
import {
  string, bool, func, shape,
} from 'prop-types'
import exact from 'prop-types-exact'
import ExternalLink from '../Utility/ExternalLink'

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
              {activeActor.socialMedia.instagram && <ExternalLink href={activeActor.socialMedia.instagram}><img src="/static/img/instagram.svg" alt="instagram" /></ExternalLink>}
              {activeActor.socialMedia.facebook && <ExternalLink href={activeActor.socialMedia.facebook}><img src="/static/img/facebook.svg" alt="facebook" /></ExternalLink>}
              {activeActor.socialMedia.youtube && <ExternalLink href={activeActor.socialMedia.youtube}><img src="/static/img/youtube.svg" alt="youtube" /></ExternalLink>}
              {activeActor.socialMedia.twitter && <ExternalLink href={activeActor.socialMedia.twitter}><img src="/static/img/twitter.svg" alt="twitter" /></ExternalLink>}
            </div>
          )}
      </div>
    </div>
    <style jsx>{`
      .modal-container {
        position: fixed;
        z-index: 999999;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        background-color: rgba(0, 0, 0, 0.8);
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
      }
      .modal-container.visible {
        pointer-events: auto;
        opacity: 1;
        cursor: pointer;
      }
      .modal-container * {
        transition: 0.4s;
      }
      .modal-container .modal-window {
        visibility: hidden;
        background-color: rgba(255, 255, 255, 1);
        width: 50%;
        padding: 1rem;
        display: flex;
        box-shadow: -2px 4px 8px 0 rgba(0, 0, 0, 1);
        pointer-events: none;
      }
      .modal-container.visible .modal-window {
        visibility: visible;
        pointer-events: initial;
        cursor: default !important;
      }
      .modal-window .headshot-container {
        width: 300px;
        height: 420px;
        background-size: cover;
        background-position: center;
        transition: none;
      }
      .modal-window .right-side {
        padding-left: 1rem;  
      }
      .modal-window .right-side h1 {
        margin-top: 0;
      }
      .modal-window .social-icon-group img {
        width: 30px;
        height: 30px;
        margin: 0 0.5rem;
        transition: 0.2s ;
        pointer-events: auto;
      }
      .modal-window .social-icon-group a:first-child img {
        margin-left: 0;
      }
    `}</style>
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

ActorDetail.defaultProps = {
  activeActor: null,
}

export default ActorDetail
