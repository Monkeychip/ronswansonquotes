import React, { Component } from "react";
import "../App.css";

class AddQuote extends Component {
  render() {
    return (
        <div>
          <table className="ui celled padded table">
            <tbody>
            <tr>
              <td>future quote from him here which rerenders everytime they add</td>
              <td className="center aligned">
                <div className="ui input"><input type="number" placeholder="add your rating"></input></div>
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

export default AddQuote;

