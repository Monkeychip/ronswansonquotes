// @flow

import React, { Component } from "react";

import RonsHead from "../images/ronavatar.jpg";
import "../App.css";

type Props = { /* ... */ };

class Title extends Component<Props> {

  render() {
    return (
      <div>
        <span className="ui header center aligned">
          <div>
            <img
              src={RonsHead}
              className="ui centered aligned circular image medium"
              id="ron_image"
            />
          </div>
          <h2>Rate Ron's Quotes</h2>
        </span>
      </div>
    );
  }
}

export default Title;
