import React from 'react';
// import PropTypes from 'prop-types';

import Overview from '../Overview/Overview';
import Stars from '../Stars/Stars';
import Reviews from '../Reviews/Reviews';
import Navigation from '../Navigation/Navigation';
// const path = require('path');
import exampleData from '../exampleData'; // moved to current folder for now. Will move to DB folder and use path for join
/* Ask Henry about how to export/import exampleData so I don't need
to reference it as exampleData.exampleData;
*/
import style from './App.css';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfReviews: exampleData.exampleData.numberOfReviews,
      reviews: exampleData.exampleData.reviews,
      query: 'bedroom',
      overall: 5,
    };
  }

  render() {
    return (
      <Grid className={style.test}>
        <Row>
          <Overview
            numberOfReviews={this.state.numberOfReviews}
            overall={this.state.overall}
            query={this.state.query}
          />
        </Row>
        <Row>
          <Stars reviews={this.state.reviews} />
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
