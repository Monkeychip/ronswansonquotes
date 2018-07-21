import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchData, addRowToList } from "../actions/action_index";
import "../App.css";

class AddQuote extends Component {
  constructor() {
    super();
    this.addRow = this.addRow.bind(this);
    this.state = {
      inputValue: "" //initialize inputValue to nothing, used to keep track of quote's rating
    };
  }

  addRow = () => {
    const data = {
      quote: this.props.quote[0], //pulling quote from Redux store
      rate: this.state.inputValue //pulling rate number from inputValue on component's state
    };
    this.props.addRowToList(data); //passing to action creator addRowToList, saving on Redux Store to retrieve in sibling component
    this.setState({
      inputValue: ""
    });
  };

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  componentDidMount() {
    this.props.fetchData(); //update the displayed quote
  }

  render() {
    const { handleSubmit } = this.props;
    let rateSuggestion = Math.floor((Math.random() * 10) + 1);
    return (
      <div>
        <table className="ui celled padded table">
          <tbody>
            <tr>
              <td>{this.props.quote}</td>
              <td className="center aligned">
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <div>
                      <label>Rate the Quote</label>
                    </div>

                    <div className="ui input focus" id="quote_rating">
                      <input
                        className="center aligned"
                        type="number"
                        placeholder={`maybe a ${rateSuggestion}?`}
                        value={this.state.inputValue}
                        onChange={evt => this.updateInputValue(evt)}
                      />
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
    quote: state.quote //return the quote from the Redux store, and make accessible via props
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchData, //bind the action creator so that fetchData is called every time component mounts
      addRowToList //bind so that component can send data to this action creator
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQuote);
