import React, { useState } from 'react';

export interface AvyReportProps {
  report: string;
}

const AvyReport: React.FC<AvyReportProps> = (props) => {
  const { report } = props;

  if (!report) {
    return null; // Render nothing if the report is empty or undefined
  }

  const avyReportData = JSON.parse(report);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="border-orange-600 border-2 rounded-lg p-4">
      <h2 className="text-xl font-bold">Avalanche Report</h2>
      {/* Display "Bottom Line" and button section */}
      <div>
        <h3 className="text-lg">Bottom Line</h3>
        <div dangerouslySetInnerHTML={{ __html: avyReportData.bottom_line }} />
      </div>

      {/* Display "plus" button to toggle additional details */}
      <button className="border-orange-600 border-2 rounded-xl p-2 m-2" onClick={toggleDetails}>{showDetails ? 'Hide Avy Details' : 'Show Avy Discussion & Photos'}</button>

      {/* Display additional details if showDetails is true */}
      {showDetails && (
        <>
          <div>
            <h3>Hazard Discussion</h3>
            <div dangerouslySetInnerHTML={{ __html: avyReportData.hazard_discussion }} />
          </div>
          {/* Add more sections as needed */}
          {/* You can also render media, weather data, forecast avalanche problems, etc. */}
          {avyReportData.media && (
            <div>
              <h3>Media</h3>
              {avyReportData.media.map((mediaItem) => (
                <div key={mediaItem.id}>
                  <img src={mediaItem.url.large} alt={`Media ${mediaItem.id}`} />
                  {mediaItem.caption && <p>{mediaItem.caption}</p>}
                </div>
              ))}
            </div>
          )}
          {/* Add more sections as needed */}
        </>
      )}
    </div>
  );
};

export default AvyReport;
