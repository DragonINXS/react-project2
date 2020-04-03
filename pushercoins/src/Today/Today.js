import React, { Component } from 'react';
import './Today.css';
import axios from 'axios';
  
class Today extends Component {

  // Adds a class constructor that assigns the initial state values:
  constructor() {
    super();
    this.state = {
      btcPrice: '',
      ltcPrice: '',
      ethPrice: ''
    };
  }

  // This is called when an instance of a component is being created and inserted into the DOM.
  componentWillMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
      .then(response => {

        // We set the latest prices in the state to the gotten from Cryptocurrency.
        this.setState({ btcPrice: response.data.BTC.USD });
        this.setState({ ethPrince: response.data.ETH.USD });
        this.setState({ ltcPrince: response.data.LTC.USD });
      })

      // Catch errors here
      .catch(error => {
        console.log(error = "error while getting crypto prices");
      });
  }

  //The render method contains JSX code which will be compiled to HTML.
  render() {
    return (
      <div className="today--section container">
        <h2>Current Price</h2>
        <div className="columns today--section__box">
          <div className="column btc--section">
            <h5>${this.state.btcPrice}</h5>
            <p>1 BTC</p>
          </div>
          <div className="column eth--section">
            <h5>${this.state.ethPrice}</h5>
            <p>1 ETH</p>
          </div>
          <div className="column ltc--section">
            <h5>${this.state.ltcPrice}</h5>
            <p>1 LTC</p>
          </div>
        </div>
      </div>
    )
  }
}