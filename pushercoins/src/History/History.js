import React, { Component } from 'react';
import './History.css';
import axios from 'axios';
import moment from 'moment';

class History extends Component {
  constructor() {
    super();
    this.state = {
      todaysPrice: {},
      yesterdayPrice: {},
      twoDayPrice: {},
      threeDayPrice: {},
      fourDayPrice: {},
    };
    this.getBTCPrices = this.getBTCPrices.bind(this);
    this.getETHPrices = this.getETHPrices.bind(this);
    this.getLTCPrices = this.getLTCPrices.bind(this);
  }

  // Gets the ETH price for a specific timestamp/date. Date is passed in as an argument
  getETHPrices(date) {
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
  }
  // Gets the BTC price for a specific timestamp/date. Date is passed in as an argument
  getBTCPrices(date) {
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
  }
  // Gets the LTC price for a specific timestamp/date. Date is passed in as an argument
  getLTCPrices(date) {
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
  }



  // This function gets the prices for the current date.
  gettodayPrice() {
    // Get today's date in timestamp
    let t = moment().unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
        let f = {
          date: moment.unix(t).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        };
        // Set the state of todayPrice to the content of the object f
        this.setState({ todayPrice: f });
      }));
  }

  // This function gets the prices for the yesterday.
  getyesterdayPrice() {
    // Get yesterday's date in timestamp
    let t = moment().subtract(1, 'days').unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
        let f = {
          date: moment.unix(t).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        };
        // Set the state of yesterdayPrice to the content of the object f
        this.setState({ yesterdayPrice: f });
      }));
  }

  // This function gets the prices for the two days ago.
  gettwoDayPrice() {
    // Get the date for two days ago in timestamp
    let t = moment().subtract(2, 'days').unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
        let f = {
          date: moment.unix(t).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        };
        // Set the state of twoDayPrice to the content of the object f
        this.setState({ twoDayPrice: f });
      }));
  }

  // This function gets the prices for the three days ago.
  getthreeDayPrice() {
    // Get the date for three days ago in timestamp
    let t = moment().subtract(3, 'days').unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
        let f = {
          date: moment.unix(t).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        };
        // Set the state of threeDayPrice to the content of the object f
        this.setState({ threeDayPrice: f });
      }));
  }

  // This function gets the prices for the four days ago.
  getfourDayPrice() {
    // Get the date for four days ago in timestamp
    let t = moment().subtract(4, 'days').unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
      .then(axios.spread((eth, btc, ltc) => {
        let f = {
          date: moment.unix(t).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        };
        // Set the state of fourDayPrice to the content of the object f
        this.setState({ fourDayPrice: f });
      }));
  }

  // This is called when an instance of a component is being created and inserted into the DOM.
  componentWillMount() {
    this.gettodayPrice();
    this.getyesterdayPrice();

  }

  render() {
    return (
      <div className="history--section container">
        <h2>History (Past 5 days)</h2>
        <div className="history--section__box">
          <div className="history--section__box__inner">
            <h4>{this.state.todayPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.todayPrice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.todayPrice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.todayPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.yesterdayPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.yesterdayPrice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.yesterdayPrice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.yesterdayPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.twoDayPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.twoDayPrice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.twoDayPrice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.twoDayPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.threeDayPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.threeDayPrice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.threeDayPrice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.threeDayPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.fourDayPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.fourDayPrice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.fourDayPrice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.fourDayPrice.ltc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default History;