import React from 'react';
import { createRoot } from 'react-dom/client';
import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';
import 'framework7-icons';
import Application from './Application.jsx';
import './index.css';
import './Pink.css';

Framework7.use(Framework7React);
createRoot(document.getElementById('app')).render(<Application />);