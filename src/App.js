import React from 'react';
import './App.css';

import Map from './components/Map';
import NavBar from './components/NavBar';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Search />
        <Map />
      </React.Fragment>
    )
  }
}

export default App;