import React from 'react';

function Overview(props) {
  return (
    <div>
      <div className="container">
        {props.numberOfReviews} reviews<span>{props.overall} stars(use SVG to render)</span>
        <input value="Search reviews" onChange={() => console.log('you typed in the search box')} />
      </div>
    </div>
  );
}

export default Overview;
