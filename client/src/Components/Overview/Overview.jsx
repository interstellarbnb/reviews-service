import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactStars from 'react-stars';

import style from './Overview.css';

function Overview(props) {
  return (
    <Grid>
      <Row>
        <Col md={10} id={style.overview}>
          <span id={style.numreviews}>
            {props.numberOfReviews} reviews
          </span>
          <ReactStars
            count={5}
            value={props.overall}
            size={21}
            color1="#D8D8D8"
            color2="#008489"
            edit={false}
          />
        </Col>
        <Col md={2} id={style.search}>
          <input type="text" placeholder="Search reviews" onChange={() => console.log('hey')} />
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
