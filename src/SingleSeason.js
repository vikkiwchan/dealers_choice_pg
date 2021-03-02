import React from 'react';

const SingleSeason = (props) => {
  const { season, selectedSeasonId } = props;
  return (
    <li
      className={selectedSeasonId * 1 === season.id ? 'selected' : ''}
      key={season.id}
    >
      <a href={`#${season.id}`}>
        {season.name} ({season.release_year})
      </a>
    </li>
  );
};

export default SingleSeason;
