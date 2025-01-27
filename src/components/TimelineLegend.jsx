import React from 'react';

export default function TimelineLegend() {
  const legendItems = [
    { color: 'bg-green-500', label: 'Completed' },
    { color: 'bg-blue-500', label: 'In Progress' },
    { color: 'bg-yellow-500', label: 'Pending' },
    { color: 'bg-red-500', label: 'Delayed' },
    { color: 'bg-gray-500', label: 'Info' }
  ];

  return (
    <div className="bg-white py-2 mb-3 flex justify-center">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
            <span className="text-xs text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
