import React from 'react';

const Loader = () => {
  return (
    <div className="loader-bg">
      <div id="container">
        <svg viewBox="0 0 100 100">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodColor="#dabd1d" />
            </filter>
          </defs>
          <circle 
            id="spinner" 
            style={{ 
              fill: "transparent", 
              stroke: "#dabd1d", 
              strokeWidth: 8, 
              strokeLinecap: "round", 
              filter: "url(#shadow)" 
            }} 
            cx={50} cy={50} r={45} 
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
