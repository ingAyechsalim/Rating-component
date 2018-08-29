import React from "react";
import ReactDOM from "react-dom";
import Rating from "./ratingdynamic";
import AffichRating from "./Ratingstate.js";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Rate: 1 };
  }
  render() {
    return (
      <div className="RatingApp">
        <Rating
          onChangeRating={newRating => {
            this.setState({
              Rate: newRating
            });
          }}
        />
        <div>
          <strong>You search for elements Rated:</strong>
        </div>
        <div className="indice"> {this.state.Rate}</div>
        <div className="movedRate">
          <AffichRating count={this.state.Rate} />
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
