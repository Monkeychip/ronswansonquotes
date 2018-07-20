import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
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


class Quote extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <table className="ui celled padded table">
            <tbody>
            <tr>
              <td>future quote from him here which rerenders everytime they add</td>
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

Quote = reduxForm({
  form: "quote"
})(Quote);

export default Quote;

/*
* First focusing on passing the number
* then
* */