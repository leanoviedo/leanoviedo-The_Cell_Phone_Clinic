import { Container, createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as Container;
const root = createRoot(container);
root.render(<App />);
