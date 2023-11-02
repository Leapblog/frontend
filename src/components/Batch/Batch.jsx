import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Batch = () => {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    // Mock data for demonstration
    const sampleBatches = [
      { id: 2022, name: "LSPP Batch 2022" },
      { id: 2023, name: "LSPP Batch 2023" },
      // Add more batches as needed
    ];

    setBatches(sampleBatches);
  }, []);

  return (
    <div className="flex items-center justify-center text-black md:mt-4">
      <div className="w-[calc(100%-80px)] lg:w-[calc(100%-240px)] ml-auto">
        <ul className="flex items-center justify-center flex-wrap gap-5">
          {batches.map((batch) => (
            <Link to={`/batch/${batch.id}`} key={batch.id}>
              <li className="border p-2 md:p-4 rounded-md">
                <h3 className="text-xl font-semibold mb-2">{batch.name}</h3>
                <p>Click to view LSP details</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Batch;
