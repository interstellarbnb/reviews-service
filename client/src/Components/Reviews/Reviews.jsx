import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import ReactStars from 'react-stars';
import style from './Reviews.css';

const moment = require('moment');

class Reviews extends React.Component {

  render() {
    const queriedReviews = this.props.reviews.filter(review =>
      review.body.includes(this.props.query));
    const renderedReviews = queriedReviews.map(review => (
      <div className={style.container}>
        <Row>
          <Col md={1}>
            <img src={review.profilePicture} className={style.profilePic} alt="" />
          </Col>
          <Col md={11}>
            <span className={style.name}> {review.name}</span><br />
            <span className={style.date}>{moment(review.date).format('MMMM YYYY')} </span>
          </Col>
        </Row>
        <Row className={style.stars}>
          <ReactStars
            count={5}
            value={4}
            size={12}
            color1="#D8D8D8"
            color2="#008489"
            edit={false}
          />
        </Row>
        <Row>
          <div className={style.review}> {review.body} </div>
        </Row>
        <hr />
      </div>
    ));

    return (
      <div>
        {renderedReviews}
      </div>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
};
