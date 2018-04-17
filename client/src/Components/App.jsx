import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview';
import Stars from './Stars';
import Reviews from './Reviews';
import Navigation from './Navigation';
// const path = require('path');
import exampleData from './exampleData'; // moved to current folder for now. Will move to DB folder and use path for join
// Ask Henry about how to export/import exampleData so I don't need to reference it as exampleData.exampleData;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listingId: exampleData.exampleData.id,
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
          <Overview numberOfReviews={this.state.numberOfReviews} overall={this.state.overall} />
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
