import React, { Component } from "react";

import "../App.css";

class QuoteRow extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
    };
  }

  fetchData(url) {
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false });
        return response;
      })
      .then((response) => response.json())
      .then((quotes) => this.setState({ quotes }))
      .catch(() => this.setState({ hasErrored: true }));
  }

  componentDidMount() {
    this.fetchData('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  }

  render(){
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the quotes</p>;
    }
    if (this.state.isLoading) {
      return <p>Loading…</p>;
    }

    return (
          <tbody>
          <tr>
            <td>
              {this.state.quotes}
            </td>
            <td className="center aligned">
              2
            </td>
            <td className="center aligned">
              <i className="icon minus circle center"></i>
            </td>
          </tr>
          </tbody>
    );
  }
}

export default QuoteRow;

/*
* Data comes in from store object
* select option
* */