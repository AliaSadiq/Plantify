import React from 'react';
import { Line } from 'react-chartjs-2';

const viewCampaign = () => {
  // Dummy data for demonstration
  const donationData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Donation Amount ($)',
        data: [1000, 1500, 2000, 2500, 3000, 3500],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const volunteerData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Volunteers',
        data: [20, 25, 30, 35, 40, 45],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Campaign Insights</h1>

      {/* Overview Section */}
      {/* ... Your existing code for overview section ... */}

      {/* Donation Trends Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Donation Trends</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Line data={donationData} />
        </div>
      </section>

      {/* Volunteer Engagement Section */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Volunteer Engagement</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Line data={volunteerData} />
        </div>
      </section>
    </div>
  );
};

export default viewCampaign;
