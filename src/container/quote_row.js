import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchData,
  addRowToList
} from "../actions/action_index";
import "../App.css";

class QuoteRow extends Component {
  constructor() {
    super();
    this.state = {
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

  //curried function
  removeRow = (index) => () => {
    const rows = [...this.state.rows]
    rows.splice(index,1)
    this.setState({ rows });
  };

  render(){
    console.log(this.props.row,"this.props.row")
    return (
          <tbody>
          {this.state.rows.map((data, index) => (
            <tr key={index}>
              <td>
                {this.state.rows[index].quote}
              </td>
              <td className="center aligned">
                {this.state.rows[index].rate}
              </td>
              <td className="center aligned">
                <i className="icon minus circle center" onClick={this.removeRow(index)}></i>
              </td>
            </tr>
          ))}

          </tbody>
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


