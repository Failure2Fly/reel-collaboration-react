import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './Main/Components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);


