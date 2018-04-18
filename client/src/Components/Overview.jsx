import React from 'react';
import ReactDOM from 'react-dom';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="overview" className="container">
          {this.props.numberOfReviews} reviews<span>{this.props.overall} stars(use SVG to render)</span>
          <input value="Search reviews" onChange={() => console.log('you typed in the search box')}></input>
        </div>
      </div>
    );
  }
}

export default Overview;