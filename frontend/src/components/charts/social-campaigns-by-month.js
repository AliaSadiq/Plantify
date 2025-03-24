import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const SocialCampaigns = ({ socialGroupId }) => {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get(`https://plantify-backend.vercel.app/api/campaigns/socialgroup/${socialGroupId}`);
                const campaigns = response.data;

                // Process campaigns to get counts per month
                const campaignCounts = {};
                campaigns.forEach((campaign) => {
                    const date = new Date(campaign.createdAt);
                    const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
                    campaignCounts[monthYear] = (campaignCounts[monthYear] || 0) + 1;
                });

                // Prepare data for the chart
                const labels = Object.keys(campaignCounts).sort();
                const data = Object.values(campaignCounts);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Campaigns per Month',
                            data,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                });
                setLoading(false);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
                setLoading(false);
            }
        };

        fetchCampaigns();
    }, [socialGroupId]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Bar
                    data={chartData}
                    options={{
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Number of Campaigns',
                                },
                            },
                        },
                    }}
                />
            )}
        </div>
    );
};

export default SocialCampaigns;
