import React, { Component } from "react";

import "../App.css";
import QuoteRow from "../container/quote_row";
import Quote from "../container/add_quote";


class QuoteList extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="four wide column center aligned">
          <Quote />
        </div>
        <table className="ui celled padded table">
          <thead>
          <tr><th className="single line">Quote</th>
            <th>Rating</th>
            <th>Remove</th>
            </tr></thead>
            <QuoteRow />
        </table>
      </div>
    );
  }
}

export default QuoteList;

/*
* Add click event to rating to resort
*
* */