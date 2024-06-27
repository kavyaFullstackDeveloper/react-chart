import React, { useState } from 'react';
import './App.css';
import ChartComponent from './ChartComponent';

const App: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'day' | 'week' | 'month'>('day');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Chart Example</h1>
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
          <div className="timeframe-selector">
            <button onClick={() => setTimeframe('day')}>Day</button>
            <button onClick={() => setTimeframe('week')}>Week</button>
            <button onClick={() => setTimeframe('month')}>Month</button>
          </div>
          <ChartComponent initialTimeframe={timeframe} />
        </div>
      </header>
    </div>
  );
};

export default App;
