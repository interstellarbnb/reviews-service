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
          <input value="Search reviews"></input>
        </div>
      </div>
    );
  }
}

export default Overview;