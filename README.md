# FR8Labs Customer Portal - MBL Tracking

A React-based web application for tracking Master Bill of Lading (MBL) numbers in the freight forwarding industry.
![image](https://github.com/user-attachments/assets/9afd202b-0112-4be2-a906-360819085194)


## Project Overview

This application provides a modern interface for customers to track their shipments using MBL numbers. Built with React and styled using Tailwind CSS, it offers a responsive and user-friendly experience with features like:

- Shipment timeline visualization
- Container-specific tracking
- Activity and task management
- Real-time status updates

## Tech Stack

- **Frontend Framework**: React 18
- **Styling**: 
  - Tailwind CSS
  - Material-UI (MUI)
- **Date Handling**: date-fns
- **Testing**: Jest with React Testing Library

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from create-react-app

## Project Structure

```
src/
├── components/           # React components
│   ├── ShipmentTab.jsx  # Main shipment tracking tab
│   ├── ShipmentTimeline.jsx # Timeline visualization
│   ├── TimelineLegend.jsx   # Timeline legends
│   └── ContainerSelector.jsx # Container selection component
├── App.jsx              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles
```

## Data Integration

Currently, the shipment tracking data is statically defined in `src/App.jsx`. For production deployment, this should be replaced with a dynamic data fetch from your backend API. The integration point is located at:

```javascript
// src/App.jsx
const sampleData = {
  // Replace this object with API data
  identifier: "OOLU2305845300",
  identifier_type: "bill_of_lading_number",
  ...
};
```

### Data Integration Steps

1. Create an API client service
2. Replace the static `sampleData` with an async data fetch
3. Add loading states and error handling
4. Implement real-time updates if needed

Example integration:

```javascript
// src/App.jsx
const [shipmentData, setShipmentData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchShipmentData = async () => {
    try {
      const response = await api.getShipmentData(mblNumber);
      setShipmentData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  fetchShipmentData();
}, [mblNumber]);
```

## Features

- MBL number tracking
- Responsive design
- Material UI components integration
- Modern UI with Tailwind CSS
- Shipment timeline visualization
- Container-specific tracking
- Activity and task management
- Real-time status updates

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.
