import React from 'react';
import ReactDOM from 'react-dom';

class Overview extends React.Component {
  render() {
    return (
    <div>
    <div id="overview" className="container">
      212 reviews <span>5 stars(use SVG to render)</span>
      <input value="Search reviews"></input>
    </div>
    </div>
    );
  }
}

export default Overview;