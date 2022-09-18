import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
export default TableBody;

// <td>{movie.title}</td>
// <td>{movie.genre.name}</td>
// <td>{movie.numberInStock}</td>
// <td>{movie.dailyRentalRate}</td>
// <td>
//   <Like liked={movie.liked} onClick={() => onLike(movie)} />
// </td>
// <td>
//   <button
//     onClick={() => onDelete(movie)} // arrow function to pass argument
//     className="btn btn-danger btn-sm"
//   >
//     Delete
//   </button>
