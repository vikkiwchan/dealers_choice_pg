import React from 'react';

const SingleSeason = (props) => {
  const { season, selectedSeasonId } = props;

  return (
    <li className={selectedSeasonId * 1 === season.id ? 'selected' : ''}>
      <a href={`#${season.id}`}>{season.name}</a>
    </li>
  );
};

export default SingleSeason;
