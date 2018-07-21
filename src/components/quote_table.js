import React, { Component } from "react";

import "../App.css";
import QuoteRow from "../container/quote_row";
import AddQuote from "../container/add_quote";

class QuoteTable extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="four wide column center aligned">
          <AddQuote />
        </div>
          <QuoteRow />
      </div>
    );
  }
}

export default QuoteTable;
