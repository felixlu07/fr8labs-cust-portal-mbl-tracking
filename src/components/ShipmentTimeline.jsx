import React from 'react';
import { format } from 'date-fns';

const ShipmentTimeline = ({ events }) => {
  // Sort events by datetime in descending order (newest first)
  const sortedEvents = [...events].sort((a, b) => 
    new Date(b.event_datetime) - new Date(a.event_datetime)
  );

  const getEventIcon = (eventType) => {
    switch (eventType) {
      case 'EQUIPMENT':
        return '📦';
      case 'TRANSPORT':
        return '🚢';
      default:
        return '📍';
    }
  };

  const getEventColor = (classifier) => {
    switch (classifier) {
      case 'ACT':
        return 'bg-green-100 border-green-500';
      case 'EST':
        return 'bg-yellow-100 border-yellow-500';
      case 'PRE':
        return 'bg-blue-100 border-blue-500';
      default:
        return 'bg-gray-100 border-gray-500';
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-2">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        {/* Timeline events */}
        {sortedEvents.map((event, index) => (
          <div key={event.event_id} className="mb-8 flex gap-4">
            {/* Event icon */}
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-gray-200">
                <span className="text-2xl">{getEventIcon(event.event_type)}</span>
              </div>
            </div>

            {/* Event content */}
            <div className={`flex-1 p-4 rounded-lg border ${getEventColor(event.event_classifier_code)}`}>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-lg">{event.event_description}</h3>
                <span className="text-sm text-gray-500">
                  {format(new Date(event.event_datetime), 'MMM d, yyyy HH:mm')}
                </span>
              </div>

              {/* Location info if available */}
              {event.transport_call?.location && (
                <div className="text-sm text-gray-600 mt-2">
                  📍 {event.transport_call.location.location_name}, {event.transport_call.location.country}
                </div>
              )}

              {/* Vessel info if available */}
              {event.transport_call?.vessel?.vessel_name && (
                <div className="text-sm text-gray-600 mt-1">
                  🚢 {event.transport_call.vessel.vessel_name}
                  {event.transport_call.carrier_voyage_number && 
                    ` (${event.transport_call.carrier_voyage_number})`}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentTimeline;
