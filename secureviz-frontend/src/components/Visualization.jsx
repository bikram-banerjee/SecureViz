import { useState, useEffect } from "react";
import { Bar, Line, Pie, Scatter, Bubble } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import Papa from "papaparse";
import { Dropdown } from "flowbite-react";

ChartJS.register(...registerables);

const Visualization = () => {
  const [chartType, setChartType] = useState("Select");
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);
  const [columns, setColumns] = useState([]);
  const [selectedXAxis, setSelectedXAxis] = useState("");
  const [selectedYAxis, setSelectedYAxis] = useState("");
  const [rawData, setRawData] = useState(null);

  useEffect(() => {
    if (rawData && selectedXAxis && selectedYAxis) {
      processData(rawData);
    }
  }, [rawData, selectedXAxis, selectedYAxis, chartType]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        setRawData(result.data);
        setColumns(Object.keys(result.data[0]));
        setSelectedXAxis(Object.keys(result.data[0])[0]);
        setSelectedYAxis(Object.keys(result.data[0])[1]);
      },
      header: true,
      error: () => {
        setError("Error parsing CSV file");
      },
    });
  };

  const processData = (data) => {
    try {
      const labels = data.map((row) => row[selectedXAxis]);
      const values = data.map((row) => Number(row[selectedYAxis]));

      let datasets;
      switch (chartType) {
        case "Bubble Chart":
        case "Scatter Plot":
          datasets = [
            {
              label: selectedYAxis,
              data: values.map((value, index) => ({
                x: index,
                y: value,
                r:
                  chartType === "Bubble Chart"
                    ? Math.abs(value) / 10
                    : undefined,
              })),
              backgroundColor: "rgba(0, 255, 255, 0.6)",
              borderColor: "rgba(0, 255, 255, 1)",
            },
          ];
          break;
        default:
          datasets = [
            {
              label: selectedYAxis,
              data: values,
              backgroundColor: "rgba(0, 255, 255, 0.6)",
              borderColor: "rgba(0, 255, 255, 1)",
              borderWidth: 1,
            },
          ];
      }

      setChartData({
        labels: labels,
        datasets: datasets,
      });
      setError(null);
    } catch (err) {
      setError("Error processing data: " + err.message);
    }
  };

  const renderChart = () => {
    if (!chartData) return null;

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "white",
          },
        },
        title: {
          display: true,
          text: chartType,
          color: "white",
        },
      },
      scales: {
        x: {
          ticks: { color: "white" },
          grid: { color: "rgba(255, 255, 255, 0.1)" },
        },
        y: {
          ticks: { color: "white" },
          grid: { color: "rgba(255, 255, 255, 0.1)" },
        },
      },
    };

    switch (chartType) {
      case "Bar Chart":
        return <Bar data={chartData} options={options} />;
      case "Line Chart":
        return <Line data={chartData} options={options} />;
      case "Pie Chart":
        return <Pie data={chartData} options={options} />;
      case "Scatter Plot":
        return <Scatter data={chartData} options={options} />;
      case "Bubble Chart":
        return <Bubble data={chartData} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-auto flex flex-col place-items-center bg-custom-dark gap-5">
      <h1 className="text-5xl p-5 font-bold text-custom-light-cyan">DATA VISUALIZATION</h1>
      <div className="w-full max-w-4xl flex flex-wrap justify-around mb-6 gap-4">
        <div className="w-full md:w-auto">
          <h4 className="text-xl mb-2 text-custom-whitish">Upload Files</h4>
          <input
            type="file"
            id="fileUpload"
            onChange={handleFileUpload}
            accept=".csv"
            className="file:bg-gray-800 file:text-white file:border-none file:py-2 file:px-4 bg-gray-800 text-white rounded-md cursor-pointer"
          />
        </div>
        <div className="w-full md:w-auto">
          <h4 className="text-xl mb-2 text-custom-whitish">Select the type of chart</h4>
          <Dropdown label={chartType || "Select"} dismissOnClick={false} >
            <Dropdown.Item onClick={() => setChartType("Bar Chart")} >Bar Chart</Dropdown.Item>
            <Dropdown.Item onClick={() => setChartType("Line Chart")} >Line Chart</Dropdown.Item>
            <Dropdown.Item onClick={() => setChartType("Pie Chart")} >Pie Chart</Dropdown.Item>
            <Dropdown.Item onClick={() => setChartType("Scatter Plot")} >Scatter Plot</Dropdown.Item>
            <Dropdown.Item onClick={() => setChartType("Bubble Chart")} >Bubble Chart</Dropdown.Item>
          </Dropdown>      
        </div>
      </div>
      {columns.length > 0 && (
        <div className="w-full max-w-4xl flex flex-wrap justify-around mb-6 gap-4">
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium mb-2 text-custom-whitish">X-Axis</label>
            <select
              value={selectedXAxis}
              onChange={(e) => setSelectedXAxis(e.target.value)}
              className="bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 w-full md:w-auto"
            >
              {columns.map((column) => (
                <option key={column} value={column}>
                  {column}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium mb-2 text-custom-whitish">Y-Axis</label>
            <select
              value={selectedYAxis}
              onChange={(e) => setSelectedYAxis(e.target.value)}
              className="bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 w-full md:w-auto"
            >
              {columns.map((column) => (
                <option key={column} value={column}>
                  {column}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      {error && <div className="text-red-500 mb-3">{error}</div>}
      <div className="w-full max-w-5xl h-96 flex justify-center items-center">
        {renderChart()}
      </div>
    </div>
  );
};

export default Visualization;
