import React, { Component } from 'react';
import axios from 'axios';
import SeasonList from './SeasonList';

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
    return (
      <div id='seasons'>
        <ul>
          <li>
            <a href='#'>All</a>
          </li>
          <SeasonList
            seasons={this.state.seasons}
            seasonId={this.state.selectedSeasonId}
          />
        </ul>
      </div>
    );
  }
}

export default App;
