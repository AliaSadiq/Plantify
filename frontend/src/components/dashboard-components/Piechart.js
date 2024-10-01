import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useParams } from "react-router-dom"; // Import useParams

const PieChartGraph = () => {
  const { socialId } = useParams(); // Extract socialId from the URL parameters

  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: "donut",
        width: "100%",
        height: "100%",
      },
      labels: [],
      colors: ["#496930", "#59ba0d", "#6a9e41", "#99BC85", "#bffa91"],
      legend: {
        position: 'bottom',
        horizontalAlign: 'middle',
        fontSize: '16px',
        labels: {
          colors: ['#000000'],
          useSeriesColors: false
        },
        markers: {
          width: 10,
          height: 10,
        },
        itemMargin: {
          vertical: 0,
        },
      },
    },
  });

  useEffect(() => {
    if (socialId) {
      fetchData();
    }
  }, [socialId]);

  const fetchData = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${apiUrl}/api/socialgroup/${socialId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      if (data && data.locationCounts) {
        const locationArray = Object.keys(data.locationCounts);
        const countsArray = Object.values(data.locationCounts);

        setChartData(prevState => ({
          ...prevState,
          series: countsArray.map((count) => Number(count)),
          options: {
            ...prevState.options,
            labels: locationArray,
          },
        }));
      } else {
        console.error("No campaigns found in the response");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
    </div>
  );
};

export default PieChartGraph;
