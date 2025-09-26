import { createRoot } from 'react-dom/client';
import { App } from './App';
import './stylesheets/main.scss';

const appRoot = document.getElementById('root');
appRoot?.setAttribute('notranslate', 'true');

createRoot(document.getElementById('root')!).render(<App />);
