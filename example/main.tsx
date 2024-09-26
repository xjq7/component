import React from 'react';
import ReactDOM from 'react-dom/client';

import { Button } from '../dist/x.esm';
import '../dist/x.css';

function App() {
  return (
    <div>
      <Button>333</Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
