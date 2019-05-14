import React from 'react';
import './App.css';

import Map from './components/Map';
import NavBar from './components/NavBar';
import Search from './components/Search';

class App extends React.Component {

  componentWillMount() {
    this.loading();
  }

  state = {
    isLoading: false
  }
  
  loading() {
    this.setState({...this.state, isLoading: true})
    setTimeout(() => this.setState({...this.state, isLoading: false}), 3000);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Search/>
        <Map isLoading={this.state.isLoading}/>
      </React.Fragment>
    )
  }
}

export default App;