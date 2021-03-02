import React, { Component } from 'react';
import axios from 'axios';
import SeasonList from './SeasonList';
import Episodes from './Episodes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      seasons: [],
      selectedSeasonId: '',
    };
  }
  async componentDidMount() {
    try {
      const seasons = (await axios.get('/api/seasons')).data;
      this.setState({ seasons });
      window.addEventListener('hashchange', () => {
        this.setState({ selectedSeasonId: window.location.hash.slice(1) });
      });
      this.setState({ selectedSeasonId: window.location.hash.slice(1) });
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    const { seasons, selectedSeasonId } = this.state;
    //console.log('----called from render():', this.state);
    return (
      <div id='lists'>
        <div id='season-list'>
          <p>
            <a href='#'>Home</a>
          </p>
          <ul>
            <SeasonList seasons={seasons} selectedSeasonId={selectedSeasonId} />
          </ul>
        </div>
        <div id='episode-list'>
          {!!selectedSeasonId && (
            <Episodes selectedSeasonId={selectedSeasonId} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
