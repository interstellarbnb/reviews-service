import React from 'react';
import ReactDOM from 'react-dom';

class Stars extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const stars = this.props.reviews.map((review) =>
      <div key={review._id}>
        <li>{review.stars.accuracy}</li>
        <li>{review.stars.cleanliness}</li>
        <li>{review.stars.location}</li>
        <li>{review.stars.checkIn}</li>
        <li>{review.stars.value}</li>
      </div>
    );

    return (
        <div>
          {stars}
        </div>
    );
  }
}

export default Stars;