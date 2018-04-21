import React from 'react';
import { Grid, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// const path = require('path');

import Overview from '../Overview/Overview';
// import Stars from '../Stars/Stars';
import Reviews from '../Reviews/Reviews';
import Navigation from '../Navigation/Navigation';
import { exampleData } from '../exampleData';
import style from './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfReviews: exampleData.numberOfReviews,
      reviews: exampleData.reviews,
      query: '',
      overall: 5,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    this.setState({
      query,
    });
  }

  render() {
    return (
      <Grid id={style.component}>
        <Row>
          <Overview
            numberOfReviews={this.state.numberOfReviews}
            overall={this.state.overall}
            query={this.state.query}
            handleSearch={this.handleSearch}
          />
        </Row>
        <Row>
          {/* <Stars reviews={this.state.reviews} /> */}
        </Row>
        <Row>
          <Reviews reviews={this.state.reviews} />
        </Row>
        <Row>
          <Navigation numberOfReviews={this.state.numberOfReviews} />
        </Row>
      </Grid>
    );
  }
}

export default App;
