import React from 'react';
import axios from 'axios';
import config from '../config';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {query:''}
  
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${config.axiosKey}`
      }
    })
  }
  
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
