import React from "react";
import ReactDom from "react-dom";

function MyTable() {
  return (
    <table className="table">
      <tbody>
        <tr className="headerRow">
          <th>Author</th>
          <th>Title</th>
          <th>Published</th>
        </tr>
        <tr className="dataRow1">
          <td>James</td>
          <td>Life as we know it</td>
          <td>2009</td>
        </tr>
        <Data />
      </tbody>
    </table>
  );
}

function Data() {
  return (
    <tr className="dataRow2">
      <td>Jimmy</td>
      <td>Not like this</td>
      <td>2009</td>
    </tr>
  );
}

ReactDom.render(<MyTable />, document.getElementById("root"));
