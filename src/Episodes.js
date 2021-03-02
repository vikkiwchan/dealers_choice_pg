import React, { Component } from 'react';
import axios from 'axios';

class Episodes extends Component {
  constructor() {
    super();
    this.state = {
      episodes: [],
    };
  }

  async componentDidUpdate(prevProps) {
    try {
      if (prevProps.selectedSeasonId !== this.props.selectedSeasonId) {
        const { selectedSeasonId } = this.props;
        const episodes = (await axios.get(`/api/episodes/${selectedSeasonId}`))
          .data;
        this.setState({ episodes });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async componentDidMount() {
    try {
      const { selectedSeasonId } = this.props;
      //console.log('|||||| -- called from Episodes:', this.props);
      const episodes = (await axios.get(`/api/episodes/${selectedSeasonId}`))
        .data;
      this.setState({ episodes });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { episodes } = this.state;
    return (
      <ol>
        {episodes.map((episode) => (
          <li key={episode.id}>{episode.name}</li>
        ))}
      </ol>
    );
  }
}

export default Episodes;
