import React from 'react';
import ShipmentTimeline from './ShipmentTimeline';
import TimelineLegend from './TimelineLegend';

export default function ShipmentTab({ shipmentData }) {
  const [activeTab, setActiveTab] = React.useState('timeline');

  const tabs = [
    { id: 'activities', label: 'Activities' },
    { id: 'tasks', label: 'Tasks' },
    { id: 'timeline', label: 'Shipment Timeline' }
  ];

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                w-1/3 py-2 px-1 text-center border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-4">
        {activeTab === 'activities' && (
          <div className="p-2">
            <h3 className="text-lg font-medium">Activities</h3>
            <p className="text-gray-500">Activities content will go here</p>
          </div>
        )}
        {activeTab === 'tasks' && (
          <div className="p-2">
            <h3 className="text-lg font-medium">Tasks</h3>
            <p className="text-gray-500">Tasks content will go here</p>
          </div>
        )}
        {activeTab === 'timeline' && (
          <div className="p-2">
            <TimelineLegend />
            <ShipmentTimeline events={shipmentData.containers[0].events} />
          </div>
        )}
      </div>
    </div>
  );
}
