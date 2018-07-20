import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchData
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
    quote: state.quote
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
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
* let rows = this.state.data.map(person => {
      return <PersonRow key = {
        person.id
      }
      data = {
        person
      }
      />
    })
    return <table >
      < tbody > {
        rows
      } < /tbody> < /table>
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>
        { props.data.id }
      </td>
      <td>
        { props.data.name }
      </td>
    </tr>
  );
*
*
*
*
* var RecordsComponent = React.createClass({
    getInitialState: {
        return {
          rows: ['row 1', 'row 2', 'row 3']
        }
    },
    render : function() {
        return (
            <div>
                <table>
                    {rows.map((r) => (
                      <tr>
                          <td>{r}</td>
                      </tr>
                    ))}
                </table>
                <button id="addBtn" onClick={addRow}>ADD</button>
            </div>
        );
    },
    addRow : function() {
        var rows = this.state.rows
        rows.push('new row')
        this.setState({rows: rows})
    },
});

React.render(<RecordsComponent/>, document.getElementById('display'))
* */