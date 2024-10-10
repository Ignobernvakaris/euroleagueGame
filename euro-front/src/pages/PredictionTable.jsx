import React from "react";
import Header from "../components/Header";

const PredictionTable = () => {
  return (
    <div>
      <Header />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container text-center">
          <h1>Euroleague spelionė</h1>
          <table className="table table-bordered table-striped mt-4">
            <thead>
              <tr>
                <th scope="col">Vieta</th>
                <th scope="col">Dalyvis</th>
                <th scope="col">Taškai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dalyvis 1</td>
                <td>10</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dalyvis 2</td>
                <td>8</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dalyvis 3</td>
                <td>6</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Dalyvis 4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dalyvis 5</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PredictionTable;
