import React from 'react';
import SingleSeason from './SingleSeason';

const SeasonList = (props) => {
  const { seasons, selectedSeasonId } = props;
  return seasons.map((season) => (
    <SingleSeason
      key={season.id}
      season={season}
      selectedSeasonId={selectedSeasonId}
    />
  ));
};

export default SeasonList;
