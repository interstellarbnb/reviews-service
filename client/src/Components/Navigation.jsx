import React from 'react';
import ReactDOM from 'react-dom';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let pages = [];
    for (var i = 1; i < (this.props.numberOfReviews / 7) + 1; i++) {
        pages.push(<button key={i}>{i}</button>);
    }

    return (
      <div id="page-nav">
      {pages}
      </div>
    );
  }
}

export default Navigation;