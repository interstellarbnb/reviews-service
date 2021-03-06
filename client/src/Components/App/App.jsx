import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

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
    const id = window.location.pathname.split('/')[1];

    // Use this localhost link if running component locally
    // axios.get(`http://localhost:3002/${id}/reviews/`)

    // Use this EC2 link during deployment
    axios.get(`http://ec2-18-217-72-127.us-east-2.compute.amazonaws.com/${id}/reviews/`)
      .then(({ data, data: { starsSummary } }) => {
        this.setState({
          numberOfReviews: data.numberOfReviews,
          reviews: data.reviews,
          overall: starsSummary.overall,
          accuracy: starsSummary.accuracy,
          cleanliness: starsSummary.cleanliness,
          location: starsSummary.location,
          checkIn: starsSummary.checkIn,
          value: starsSummary.value,
          communication: starsSummary.communication,
        });
      })
      .catch((error) => {
        console.log(error);
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
        <Col md={7} mdPush={0}>
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
        </Col>
      </Grid>
    );
  }
}

export default App;
