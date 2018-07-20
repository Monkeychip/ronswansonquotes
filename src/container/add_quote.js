import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchData,
  addRowToList
} from "../actions/action_index";
import "../App.css";


const renderField = ({ input, type }) => (
  <div className="ui right labeled input">
    <input
      {...input}
      className="one wide field"
      placeholder="5"
      type={type}
      max={100}
      id="quote_rating"
    />
  </div>
);


class AddQuote extends Component {
  constructor() {
    super();
    this.addRow = this.addRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  addRow = () => {
    const data = {
      quote: this.props.quote[0],
      //quote:"testing a quote",
      rate: 100 //make input value eventually
    };
    this.props.addRowToList(data); //send data to Action Creator and store in Redux
  };

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
                      <label>Your Quote Rating</label>
                    </div>
                     <Field name="number" type="number" component={renderField} />
                  </div>
                </form>
              </td>
              <td>
                <button
                type="submit"
                id="add_quote"
                className="ui button"
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

AddQuote = reduxForm({
  form: "quote"
})(AddQuote);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQuote);
