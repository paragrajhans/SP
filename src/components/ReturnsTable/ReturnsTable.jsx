import React from "react";
import "./ReturnsTable.scss";

const ReturnsTable = (props) => {
  const calcCumulative = (index) => {
    let total = 0,
      cumulative = 0;
    for (let i = 0; i <= index; i++) {
      total = total + Number(props.resultData[i].totalReturn);
      cumulative = total.toFixed(2);
    }
    return cumulative;
  };
  return (
    <div className="table-container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Total Return</th>
            <th scope="col">Cumulative Return</th>
          </tr>
        </thead>
        <tbody>
          {props.resultData.map((record, index) => {
            return (
              <tr key={index}>
                <td>{record.year}</td>
                <td>{record.totalReturn}</td>
                <td>{calcCumulative(index)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ReturnsTable;
