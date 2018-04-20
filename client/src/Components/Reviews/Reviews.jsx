import React from 'react';
import ReactDOM from 'react-dom';
import style from './Reviews.css';

class Reviews extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

  const reviews = this.props.reviews.map((review) => 
    <div key={review._id} id="reviews" className="container">    
    {review.name}
    <img src={review.profilePicture} className="rounded-circle" ></img>
    <div className="container">
      {review.body}
    </div>
    </div>
  )

    return (
      <div>
        {reviews}
      </div>  
    );
  }
}

export default Reviews;