import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import style from './Stars.css';

function Stars(props) {
  const stars = props.reviews.map(review => (
    <Grid>
      <Row>
        <Col>
        </Col>
      </Row>
    </Grid>
  ));

  return (
    <div>
      {stars}
    </div>
  );
}

export default Stars;

Stars.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
