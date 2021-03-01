import React from 'react';
import SingleSeason from './SingleSeason';

const SeasonList = (props) => {
  const { seasons, selectedSeasonId } = props;
  //console.log('called from Season List', props);
  return seasons.map((season) => (
    <SingleSeason key={season.id} season={season} seasonId={selectedSeasonId} />
  ));
};

export default SeasonList;
