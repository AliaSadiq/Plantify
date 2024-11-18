
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MetricCard from '../../components/dashboard-components/KeyMetricCard';
import { Bar } from 'react-chartjs-2'; // Import Bar chart
import PieChartGraph from "../../components/dashboard-components/Piechart.js";
import useCount from "../../hooks/useCount.js";

const Onboard = () => {
  const { id: socialGroupId } = useParams();
  const [socialGroup, setSocialGroup] = useState(null);
  const [user, setUser] = useState("");
  const {count: campaignCount} = useCount(`http://localhost:5000/api/campaigns/social-campaign-count/${socialGroupId}`);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/socialgroup/${socialGroupId}`);
        setSocialGroup(response.data);
      } catch (error) {
        console.error("Error fetching social group data:", error);
      }
    };

    if (socialGroupId) {
      fetchGroupData();
    } else {
      console.error("socialGroupId is undefined in Onboard");
    }
  }, [socialGroupId]);

  if (!socialGroup) {
    return <div>Loading...</div>;
  }

  // Define metrics data
  const metrics = [
    { 
      title: "Total Campaigns", 
      value: campaignCount, 
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Targeted Donation',
            data: [12000, 25000, 50000, 60000, 85000, 100000],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          },
        ],
      }
    },
    { 
      title: "Completed campaigns", 
      value: "0",
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Collected Donation',
            data: [10000, 15000, 30000, 40000, 60000, 75000],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
          },
        ],
      }
    },
    { 
      title: "Active", 
      value: "2,000", 
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Likes',
            data: [200, 500, 800, 1200, 1700, 2000],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
          },
        ],
      }
    },
    { 
      title: "Followers", 
      value: "1,500",
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Followers',
            data: [500, 800, 1000, 1200, 1400, 1500],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true,
          },
        ],
      }
    }
  ];

  // Bar chart data for Donation Distribution
  const barChartData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Number of Campaigns',
        data: [5, 10, 15, 20, 25, 30], // Example data for campaigns per year
        backgroundColor: '#99BC85',
        borderColor: '#99BC85',
        borderWidth: 1,
      }
    ],
  };

  return (
      <div className='min-h-screen lg:ml-[245px] p-4'>
        <div className='bg-neutral p-4 rounded-pl'>
            <h2 className='text-lg font-bold mb-10'>Hello {socialGroup.name}</h2>
            <div className="gap-1 p-2 bg-[rgba(255, 255, 255, 0.1)] rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <MetricCard 
                    key={index} 
                    title={metric.title} 
                    value={metric.value}
                    chartData={metric.chartData}
                  />
                ))}
              </div>

              <div className="flex flex-col lg:flex-row gap-6 mt-8">
                <div className='flex-1 rounded-lg h-[330px] shadow-md p-4'>
                  <h2 className="text-xl font-josefin-sans font-bold text-left mb-4">Campaigns Count</h2>
                  <div className="relative font-josefin-sans h-[250px]">
                    <Bar
                      data={barChartData}
                      options={{
                        maintainAspectRatio: false, // Allow chart to fit its container
                        responsive: true,
                        scales: {
                          x: {
                            title: {
                              display: true,
                              text: 'Year',
                            },
                          },
                          y: {
                            title: {
                              display: true,
                              text: 'Number of Campaigns',
                            },
                            beginAtZero: true,
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 rounded-lg shadow-md p-4">
                  <h2 className="text-xl font-bold text-center mb-4">Piechart</h2>
                  <PieChartGraph />
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Onboard;