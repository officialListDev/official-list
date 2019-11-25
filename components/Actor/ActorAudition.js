import React from 'react';
import {
  string, shape,
} from 'prop-types';
import exact from 'prop-types-exact';

const ActorAudition = ({ auditionObj }) => {
  const { date, show } = auditionObj;
  return (
    <div className="audition">
      <span>
        {date}
:
        {' '}
      </span>
      <span>{show}</span>
    </div>
  );
};

ActorAudition.propTypes = exact({
  auditionObj: shape({
    date: string.isRequired,
    show: string.isRequired,
  }).isRequired,
});

export default ActorAudition;
