import React, { Component } from 'react';

// Components
import Table from './table';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: [],
    };

    this.campersFetch();
  }
  
  // Uses the order specified to sort the array
  // Then sets state to the sorted array
  campersSort(order) {
    let sortedCampers = this.state.campers.sort((a, b) => {
      switch (order) {
        case 'TOP':
          return b.alltime - a.alltime;
        case 'RECENT':
          return b.recent - a.recent;
        default:
          return b.recent - a.recent;
      }
    });
    this.setState({ campers: sortedCampers });
  }

  // Fetch the camper list JSON
  campersFetch() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(data => { return data.json(); })
      .then(json => this.setState({ campers: json }));
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <img className="img-fluid align-middle" src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="freecodecamp logo" />
          <h1 id="leaderboard" className="align-middle">Leaderboard</h1>
        </div>
        <Table
          campers={ this.state.campers }
          onCampersSort={ order => this.campersSort(order) }
        />
      </div>
    );
  }
}

export default App;