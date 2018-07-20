import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "../App.css";


const renderField = ({ input, type }) => (
  <div className="ui right labeled input">
    <input
      {...input}
      className="two wide field"
      placeholder="50,000 ft"
      type={type}
      max={2000000}
    />
  </div>
);


class Quote extends Component {

  render() {
    return (
        <div>
          <table className="ui celled padded table">
            <tbody>
            <tr>
              <td>future quote from him here which rerenders everytime they add</td>
              <td className="center aligned">
              </td>
              <td><button className="ui button small" id="add_quote">Add Quote</button>
              </td>

            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

Quote = reduxForm({
  form: "quote"
})(Quote);

export default Quote;

/*
* HandleSubmit function that adds that whole table object to redux store
* HandleSubmit fires off API call to get new quote
* *
*
* <div className="ui input"><input type="number" placeholder="add your rating"></input></div>
*
*
* import React from "react";
import { Component } from "react";
import { Field, reduxForm } from "redux-form";

const renderField = ({ input, type }) => (
  <div className="ui right labeled input">
    <input
      {...input}
      className="two wide field"
      placeholder="50,000 ft"
      type={type}
      max={2000000}
    />
  </div>
);

export class Goal extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} size="large" key="large">
        <div className="field">
          <div id="elevation-label">
            <label>Enter Elevation Goal for the Year:</label>
          </div>
          <div className="ui right labeled input">
            <Field name="number" type="number" component={renderField} />
            <div className="ui basic label" id="fix-ft-label">
              ft
            </div>
          </div>
        </div>
        <button
          type="submit"
          id="submit-button"
          className="ui inverted blue button "
        >
          Show Goal
        </button>
      </form>
    );
  }
}

Goal = reduxForm({
  form: "goal"
})(Goal);

export default Goal;

* */