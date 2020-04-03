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
    }
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





  
}