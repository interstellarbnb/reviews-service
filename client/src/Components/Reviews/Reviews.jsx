import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
var moment = require('moment');
import ReactStars from 'react-stars';

import style from './Reviews.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
  const reviews = this.props.reviews.map(review => (
    <Grid className={style.container}>
      <Row>
        <Col md={1}>
          <img src={review.profilePicture} className={style.profilePic} alt="" />
        </Col>
        <Col md={11}>
          <span className={style.name}> {review.name}</span><br/>
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
        <span className={style.review}> {review.body} </span>
      </Row>
      <hr/>
    </Grid>
  ));

    return (
      <div>
        {reviews}
      </div>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
