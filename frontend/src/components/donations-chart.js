import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from 'chart.js';
import axios from 'axios';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
);

const DonationsChart = ({ userId }) => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/donations/user/${userId}`);
                const donations = response.data;

                // Initialize array for all 12 months
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const currentYear = new Date().getFullYear();
                const labels = months.map(month => `${month} ${currentYear}`);
                const donationCounts = Array(12).fill(0);
                const monthlyDonations = {};

                // Aggregate donations by month
                donations.forEach(donation => {
                    const date = new Date(donation.created_at);
                    const month = date.getMonth(); // 0-11
                    const monthYear = `${months[month]} ${date.getFullYear()}`;

                    if (!monthlyDonations[monthYear]) {
                        monthlyDonations[monthYear] = { count: 0, campaigns: [] };
                    }
                    monthlyDonations[monthYear].count += 1;
                    monthlyDonations[monthYear].campaigns.push(donation.campaign.name);
                });

                // Fill in the donationCounts with actual data
                Object.keys(monthlyDonations).forEach(monthYear => {
                    const monthIndex = months.indexOf(monthYear.split(' ')[0]);
                    donationCounts[monthIndex] = monthlyDonations[monthYear].count;
                });

                const tooltips = labels.map(label => monthlyDonations[label] ? monthlyDonations[label].campaigns.join(", ") : "");

                setChartData({
                    labels: labels,
                    datasets: [{
                        data: donationCounts,
                        backgroundColor: 'transparent',
                        borderColor: '#DDE6D6',
                        pointBorderColor: 'transparent',
                        pointBorderWidth: 4,
                        tension: 0
                    }],
                    tooltips
                });

            } catch (error) {
                console.error('Error fetching donations:', error);
            }
        };

        fetchData();
    }, [userId]);

    const options = {
        plugins: {
            legend: false,
            tooltip: {
                callbacks: {
                    label: (context) => `Campaigns: ${chartData.tooltips[context.dataIndex]}`
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 0,
                ticks: {
                    stepSize: 1
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };

    return <Line data={chartData} options={options} />;
};

export default DonationsChart;
