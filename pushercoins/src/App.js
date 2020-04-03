import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';





class App extends Component {
  render() {
    return (
      <div className="">
        <div className="topheader">
          <header className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">PusherCoins</span>
              </div>
              <div className="navbar-end">
                <a className="navbar-item" href="https://pusher.com" target="_blank" rel="noopener noreference">Pusher.com</a>
              </div>
            </nav>
          </header>
        </div>
        <section className="results--section">
          <div className="container">
            <h1>PushCoins is a realtime price information about<br></br>BTC, ETH and LTC.</h1>
          </div>
          <div className="results--section__inner">
            <Today />
            <History />
          </div>
        </section>
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
