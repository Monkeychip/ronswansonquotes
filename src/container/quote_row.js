import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchData,
  fetchQuote
} from "../actions/action_index";
import "../App.css";

class QuoteRow extends Component {
  constructor() {
    super();
    this.state = {
      quote: [],
    };
  }

  componentDidMount() {
    this.props.fetchData();
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
              {this.props.quote}
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

function mapStateToProps(state) {
  return {
    quote: state.quote
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchQuote,
      fetchData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteRow);

/*
* class ActivitiesChart extends Component {
\\\
getData() {
  let code = this.props.fetchCode();
  let thisYearsActivities = store.getState().thisYearsActivities;
  let lastYearsActivites = store.getState().activities;

  if (code.payload !== "no code") {
    //if no activities for either last or this year, then run the fetch, otherwise, do nothing
    !thisYearsActivities ? this.props.fetchActivitiesWithCodeThisYear() : "";
    !lastYearsActivites ? this.props.fetchActivitiesWithCode() : "" ;
  } else {
    !thisYearsActivities ? this.props.fetchThisYear() : "";
    !lastYearsActivites ? this.props.fetchActivities() : "";
  }
}

componentDidMount() {
  this.getData();
  this.setState({ goal: localStorage.getItem("goal") });
}

render() {
  if (!this.props.activitiesArray) {
    return <div>Loading Activities ...</div>;
  } else {
*/