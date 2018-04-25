import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import style from './Stars.css';

function Stars(props) {
  return (
    <div id={style.starsGrid}>
      <Row>
        <Col md={3}>
          <span className={style.descriptors}>Accuracy</span>
        </Col>
        <Col md={3}>
          <ReactStars
            count={5}
            value={props.accuracy}
            size={18}
            color1="#D8D8D8"
            color2="#008489"
            edit={false}
            />
        </Col>
        <Col md={3}>
          <span className={style.descriptors}>Location</span>
        </Col>
        <Col md={3}>
          <ReactStars
              count={5}
              value={props.location}
              size={18}
              color1="#D8D8D8"
              color2="#008489"
              edit={false}
              />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <span className={style.descriptors}>Communication</span>
        </Col>
        <Col md={3}>
          <ReactStars
            count={5}
            value={props.communication}
            size={18}
            color1="#D8D8D8"
            color2="#008489"
            edit={false}
            />
        </Col>
        <Col md={3}>
          <span className={style.descriptors}>Check In</span>
        </Col>
        <Col md={3}>
          <ReactStars
              count={5}
              value={props.checkIn}
              size={18}
              color1="#D8D8D8"
              color2="#008489"
              edit={false}
              />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <span className={style.descriptors}>Cleanliness</span>
        </Col>
        <Col md={3}>
          <ReactStars
            count={5}
            value={props.cleanliness}
            size={18}
            color1="#D8D8D8"
            color2="#008489"
            edit={false}
            />
        </Col>
        <Col md={3}>
          <span className={style.descriptors}>Value</span>
        </Col>
        <Col md={3}>
          <ReactStars
              count={5}
              value={props.value}
              size={18}
              color1="#D8D8D8"
              color2="#008489"
              edit={false}
              />
        </Col>
      </Row>
    </div>
  );
}

export default Stars;

Stars.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
