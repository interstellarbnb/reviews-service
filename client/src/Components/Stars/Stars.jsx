import React from 'react';
import style from './Stars.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Stars extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const stars = this.props.reviews.map((review) =>
      <Grid>
        <Row>
          <Col>
          </Col>
        </Row>
      </Grid>
    );

    return (
        <div>
          {stars}
        </div>
    );
  }
}

export default Stars;