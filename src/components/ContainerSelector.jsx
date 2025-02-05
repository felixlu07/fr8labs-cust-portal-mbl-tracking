import React from 'react';
import { format } from 'date-fns';

const ContainerSelector = ({ containers, selectedContainer, onContainerSelect }) => {
  // Find the most recent event for each container
  const getLatestEvent = (events) => {
    return events.reduce((latest, current) => {
      return new Date(current.event_datetime) > new Date(latest.event_datetime) ? current : latest;
    }, events[0]);
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-500 mb-3">Select Container</h3>
      <div className="space-y-2">
        {containers.map((container) => {
          const latestEvent = getLatestEvent(container.events);
          const isRecent = new Date(latestEvent.event_datetime) > new Date(Date.now() - 24 * 60 * 60 * 1000); // Within last 24h

          return (
            <button
              key={container.equipment_reference}
              onClick={() => onContainerSelect(container)}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-colors
                ${selectedContainer?.equipment_reference === container.equipment_reference
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium flex items-center">
                    📦 {container.equipment_reference}
                    {isRecent && (
                      <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                        Recent Activity
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {container.events.length} events
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Latest: {format(new Date(latestEvent.event_datetime), 'MMM d, yyyy HH:mm')}
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Latest event: {latestEvent.event_description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ContainerSelector;
