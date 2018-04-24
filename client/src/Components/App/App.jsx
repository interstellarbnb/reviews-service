import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import $ from 'jquery';
// import PropTypes from 'prop-types';
// const path = require('path');

import Overview from '../Overview/Overview';
import Stars from '../Stars/Stars';
import Reviews from '../Reviews/Reviews';
import Navigation from '../Navigation/Navigation';
import { numberOfReviews, reviews } from '../exampleData';
import style from './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfReviews,
      reviews,
      query: '',
      overall: 5,
      accuracy: 5,
      cleanliness: 5,
      location: 1,
      checkIn: 1,
      value: 1,
      communication: 3,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const self = this;
    $.ajax({
      type: 'GET',
      url: '/reviews/1',
      success(data) {
        self.setState({
          numberOfReviews: data.numberOfReviews,
          reviews: data.reviews,
          overall: data.starsSummary.overall,
          accuracy: data.starsSummary.accuracy,
          cleanliness: data.starsSummary.cleanliness,
          location: data.starsSummary.location,
          checkIn: data.starsSummary.checkIn,
          value: data.starsSummary.value,
          communication: data.starsSummary.communication,
        });
      },
    });
  }

  handleSearch(event) {
    this.setState({
      query: event.target.value,
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
          <Stars
            reviews={this.state.reviews}
            accuracy={this.state.accuracy}
            cleanliness={this.state.cleanliness}
            location={this.state.location}
            checkIn={this.state.checkIn}
            value={this.state.value}
            communication={this.state.communication}
          />
        </Row>
        <Row>
          <Reviews
            reviews={this.state.reviews}
            query={this.state.query}
          />
        </Row>
        <Row>
          <Navigation numberOfReviews={this.state.numberOfReviews} />
        </Row>
      </Grid>
    );
  }
}

export default App;
