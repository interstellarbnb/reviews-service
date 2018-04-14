import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview.jsx'

class Reviews extends React.Component {
  render() {
    return (
      <div>
      <div>
        <Overview />
    </div>

    <div id="stars">
      Accuracy ****
      Communication ***
      Cleanliness **
      Location ****
      Check In *
      Value ***
    </div>
    <div id="reviews" className="container">
      Karley Sporer
      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/gseguin/128.jpg" className="rounded-circle" ></img>
      <div className="container">
      Aut numquam pariatur. Quaerat aut illum minima quia et corporis sed. Quae natus et harum voluptates quasi enim quaerat. Sapiente ratione ut sed aut amet qui ex ipsa.
      </div>
    <div id="page-nav">
      <button>1</button><button>2</button><button>3</button>
    </div>
    </div>
  </div>
    );
  }
}

export default Reviews;