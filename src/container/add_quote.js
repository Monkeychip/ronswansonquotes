import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchData,
  addRowToList
} from "../actions/action_index";
import "../App.css";

class AddQuote extends Component {
  constructor() {
    super();
    this.addRow = this.addRow.bind(this);
    this.state = {
      inputValue: ''
    };
  }

  componentDidMount() {
    this.props.fetchData();
  }

  addRow = () => {
    const data = {
      quote: this.props.quote[0],
      rate: this.state.inputValue
    };
    this.props.addRowToList(data);
  };

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {

    const { handleSubmit } = this.props;
    return (
        <div>
          <table className="ui celled padded table">
            <tbody>
            <tr>
              <td>{this.props.quote}</td>
              <td className="center aligned">
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <div >
                      <label>Rate the Quote</label>
                    </div>

                    <div className="ui input focus" id="quote_rating">
                      <input className="center aligned" type="number" placeholder="5" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                    </div>
                  </div>
                </form>
              </td>
              <td className="center aligned">
                <button
                type="submit"
                className="ui button blue Change"
                onClick={this.addRow}
                >
                Add Quote
              </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
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
      fetchData,
      addRowToList
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQuote);
