import React from 'react';
import {
  string, bool, func, shape,
} from 'prop-types';
import exact from 'prop-types-exact';
import ExternalLink from '../Utility/ExternalLink';
import ActorAudition from './ActorAudition';

const ActorDetail = ({ shouldShow, closeActorDetail, activeActor }) => {
  const auditions = [];
  if (activeActor) {
    activeActor.auditions.forEach((audition) => {
      auditions.push(
        // TODO: change key to audition id once backend setup
        <ActorAudition auditionObj={audition} key={audition.date} />
      );
    });
  }
  return (
  // outer div to toggle modal visibility
    <div
    // assign class modal-container and if shouldShow is truthy, visible
      className={`modal-container${shouldShow ? ' visible' : ''}`}
      // on click or key press dispatch close actor action
      onClick={closeActorDetail}
      onKeyPress={closeActorDetail}
      role="button"
      tabIndex="0"
    >
      {/* modal window to display actual content */}
      <div
        className="modal-window"
        // on click or keypress stop event from bubbling up and triggering
        // additional click or key press actions
        onClick={(e) => e.stopPropagation()}
        onKeyPress={(e) => e.stopPropagation()}
        role="button"
        tabIndex="0"
      >
        {/* if activeActor is truthy display headshot */}
        {activeActor && (
          <div
            className="headshot-container"
            style={{ backgroundImage: `url(${activeActor.headshot})` }}
          />
        )}
        {/* if activeActor is truthy display firstName and lastName */}
        <div className="right-side">
          {activeActor
          && (
            <h1>
              {activeActor.firstName}
              &nbsp;
              {activeActor.lastName}
            </h1>
          )}
          {/* if activeActor is truthy display social icons/links present in actor's profile */}
          {activeActor
          && (
            <div className="social-icon-group">
              {activeActor.socialMedia.instagram && <ExternalLink href={activeActor.socialMedia.instagram}><img src="/static/img/instagram.svg" alt="instagram" /></ExternalLink>}
              {activeActor.socialMedia.facebook && <ExternalLink href={activeActor.socialMedia.facebook}><img src="/static/img/facebook.svg" alt="facebook" /></ExternalLink>}
              {activeActor.socialMedia.youtube && <ExternalLink href={activeActor.socialMedia.youtube}><img src="/static/img/youtube.svg" alt="youtube" /></ExternalLink>}
              {activeActor.socialMedia.twitter && <ExternalLink href={activeActor.socialMedia.twitter}><img src="/static/img/twitter.svg" alt="twitter" /></ExternalLink>}
            </div>
          )}
          {activeActor
          && (
            <div className="details-container">
              <div className="bio-container">
                <h4 className="bio-label">Bio:</h4>
                <p className="bio-text">{activeActor.bio}</p>
              </div>
              <div className="auditions-container">
                <h4 className="auditions-label">Auditions:</h4>
                {auditions}
              </div>
              <div className="notes-container">
                <h4 className="notes-label">Notes:</h4>
                <p className="notes">{activeActor.directorNotes}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
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
    `}

      </style>
    </div>
  );
};

ActorDetail.propTypes = exact({
  shouldShow: bool.isRequired,
  closeActorDetail: func.isRequired,
  activeActor: shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
    headshot: string.isRequired,
  }),
});

ActorDetail.defaultProps = {
  activeActor: null,
};

export default ActorDetail;
