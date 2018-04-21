import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import style from './Stars.css';

// function Stars(props) {
//   const stars = props.reviews.map(review => (
//     <Grid>
//       <Row>
//         <Col md={6}>
//           <ReactStars
//               count={5}
//               value={4.5}
//               size={21}
//               color1="#D8D8D8"
//               color2="#008489"
//               edit={false}
//           />
//         </Col>
//         <Col md={6}>
//           <ReactStars
//               count={5}
//               value={3}
//               size={21}
//               color1="#D8D8D8"
//               color2="#008489"
//               edit={false}
//           />
//         </Col>
//       </Row>
//     </Grid>
//   ));

//   return (
//     <div>
//       {stars}
//     </div>
//   );
// }

// export default Stars;

// Stars.propTypes = {
//   reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
