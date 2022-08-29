import React, { Component } from "react";

class MoviesTable extends Component {
  state = {
    testVar: 0,
  };

  render() {
    return (
      <React.Fragment>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>{}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesTable;
