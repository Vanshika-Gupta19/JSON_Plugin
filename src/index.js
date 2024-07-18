
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './html.css';



console.log('ReactDOM rendering');
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
