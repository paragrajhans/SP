import React, { useState } from "react";
import returns from "./data/total_returns.json";
import ReturnsTable from "./components/ReturnsTable/ReturnsTable";
import ReturnsSlider from "./components/ReturnsSlider/ReturnsSlider";

function App() {
  const [startYear, setStartYear] = useState(1926);
  const [resultData, setResultData] = useState(returns);
  const latestYear = resultData[0].year;
  const [endYear, setEndYear] = useState(latestYear);

  const getData = () => {
    let sortedData = [].concat(resultData).sort((a, b) => {
      return a.year - b.year;
    });
    let filteredData = sortedData.filter((data) => {
      return data.year >= startYear && data.year <= endYear;
    });
    return filteredData;
  };

  return (
    <div className="App">
      <ReturnsTable resultData={getData()} />
    </div>
  );
}
export default App;
