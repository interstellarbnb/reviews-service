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
      <div>
        <div>
          <Overview
            numberOfReviews={this.state.numberOfReviews}
            overall={this.state.overall}
            query={this.state.query}
          />
        </div>
        <div>
          <Stars reviews={this.state.reviews} />
        </div>
        <div>
          <Reviews reviews={this.state.reviews} />
        </div>
        <div>
          <Navigation numberOfReviews={this.state.numberOfReviews} />
        </div>
      </div>
    );
  }
}

export default App;

// App.propTypes = {
//   numberOfReviews: PropTypes.number,
//   overall: PropTypes.number,
//   reviews: PropTypes.array,
//   query: PropTypes.string,
// }