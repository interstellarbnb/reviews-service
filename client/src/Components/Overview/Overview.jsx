import React from 'react';
import PropTypes from 'prop-types';
import style from './Overview.css';
import ReactStars from 'react-stars';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

function Overview(props) {
  return (
    <Grid>
      <Row>
        <Col md={3} id={style.numreviews}>
          {props.numberOfReviews} reviews
          <ReactStars
              count={5}
              value={props.overall}
              size={21}
              color1={'#D8D8D8'}
              color2={'#008489'}
              edit={false} />
        </Col>
        <Col md={6}>
          <input value="Search reviews" onChange={() => console.log('you typed in the search box')} />
        </Col>
      </Row>
    </Grid>
  );
}

export default Overview;

Overview.propTypes = {
  numberOfReviews: PropTypes.number.isRequired,
  overall: PropTypes.number.isRequired,
};
