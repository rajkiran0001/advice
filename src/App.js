import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  // lifecycle methods
  // 1. render, 2. componentDidMount 3. componentDidUpdate 4. componentWillUnmount
  state= { //1. state (global obj) has all the important things of that component 2. the scope of the returned object is only available to the fetch fn not outside so we have the state
    advice:  ''
  }
  componentDidMount() {
    console.log('component did mount');
    this.fetchAdvice() //this as it belongs to the App class
  }
  fetchAdvice = () => { // dont need const bla =, fetchAdvice is inside the class so this method belong to the class
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip // descructuring response.data.slip.advice
      this.setState({ advice }) //advice: advice
      console.log(response.data.slip.advice);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  render() {
    const { advice } = this.state
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
