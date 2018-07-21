import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from 'reselect'

import {
  fetchData,
  addRowToList
} from "../actions/action_index";
import "../App.css";

class QuoteRow extends Component {
  constructor() {
    super();
    this.sortBy.bind(this);
    this.compareBy.bind(this);
    //this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeIndex: -1,
      rows: [
        {
          quote: "I'm a simple man.  I like pretty, dark-haired women and breakfast food.",
          rate: 10
        },
        {
          quote: "Don’t get emotional Vaughn, you’re embarrassing yourself.",
          rate: 2
        },
        {
          quote: "Tom, I took the quiz in your book about what kind of person I am. I’m a Ron.”",
          rate: 22
        },
      ],
    };
  }
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.rows];
    arrayCopy.sort(this.compareBy(key));
    this.setState({rows: arrayCopy});
  }

  //curried function
  removeRow = (index) => () => {
    const rows = [...this.state.rows]
    rows.splice(index,1)
    this.setState({ rows });
  };

  handleSelect = (index) => () => {
    this.setState({ activeIndex: index})
  }

  componentWillReceiveProps(newProps) {
    if(newProps.row !== 0) {
      this.setState({
        rows: [...this.state.rows, newProps.row]
      })
    }else{
      //do nothing
    }
  }

  render(){
    return (
      <div>
        <table className="ui celled padded selectable table">
        <thead>
          <tr >
            <th className="ui blue Change" onClick={() => this.sortBy('quote')}>Quote</th>
            <th className="ui blue Change center aligned" onClick={() => this.sortBy('rate')}>Rating</th>
            <th className="ui Change_Red center aligned">Delete</th>
          </tr>
        </thead>
      <tbody>
          {this.state.rows.map((data, index) => (
            <tr key={index} onClick={this.handleSelect(index)} className={this.state.activeIndex === index ? 'active' : ''}>
              <td>
                {this.state.rows[index].quote}
              </td>
              <td className="center aligned">
                {this.state.rows[index].rate}
              </td>
              <td className="center aligned">
                <i className="icon trash alternate outline center" onClick={this.removeRow(index)}></i>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quote: state.quote,
    row: state.row
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchData,
      addRowToList
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteRow);


