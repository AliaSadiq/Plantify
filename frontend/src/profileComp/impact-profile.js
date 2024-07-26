// src/pages/ImpactPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ImpactPage = () => {
  const [impactData, setImpactData] = useState(null);
  const { id } = useParams(); // Extracting ID from URL

  useEffect(() => {
    // Simulate fetching data
    const fetchImpactData = () => {
      // Hardcoded impact data
      const hardcodedData = {
        treesPlanted: 1200,
        campaignsRun: 45,
        volunteersInvolved: 350
      };
      setImpactData(hardcodedData);
    };

    fetchImpactData();
  }, [id]);

  if (!impactData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold mb-4">Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-4 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-lg font-bold">Trees Planted</h3>
          <p className="text-2xl font-semibold">{impactData.treesPlanted}</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-lg font-bold">Campaigns Run</h3>
          <p className="text-2xl font-semibold">{impactData.campaignsRun}</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-lg font-bold">Volunteers Involved</h3>
          <p className="text-2xl font-semibold">{impactData.volunteersInvolved}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ImpactPage;
