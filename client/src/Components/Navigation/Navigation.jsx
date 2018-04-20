import React from 'react';
import PropTypes from 'prop-types';

import style from './Navigation.css';

function Navigation(props) {
  const pages = [];
  for (let i = 1; i < (props.numberOfReviews / 7) + 1; i += 1) {
    pages.push(<button key={i}>{i}</button>);
  }
  return (
    <div id="page-nav">
      {pages}
    </div>
  );
}

export default Navigation;

Navigation.propTypes = {
  numberOfReviews: PropTypes.number.isRequired,
};
