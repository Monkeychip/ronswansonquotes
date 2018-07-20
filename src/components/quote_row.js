import React, { Component } from "react";

import "../App.css";


class QuoteRow extends Component {
  render() {
    return (
          <tbody>
          <tr>
            <td>It's always a good idea to demonstrate to your coworkers that you are capable of withstanding a tremendous amount of pain.</td>
            <td className="center aligned">
              22
            </td>
            <td className="center aligned">
              <i className="icon minus circle center"></i>
            </td>
          </tr>
          </tbody>
    );
  }
}

export default QuoteRow;
