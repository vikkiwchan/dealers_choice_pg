import React from 'react';
import SingleSeason from './SingleSeason';

const SeasonList = (props) => {
  const { seasons, selectedSeasonId } = props;
  //console.log('ooooo called from SeasonList:', props);
  return seasons.map((season) => (
    <SingleSeason
      key={season.id}
      season={season}
      selectedSeasonId={selectedSeasonId}
    />
  ));
};

export default SeasonList;
