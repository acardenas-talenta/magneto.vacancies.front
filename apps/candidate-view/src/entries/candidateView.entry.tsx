import ReactDOM from 'react-dom/client';
import styles from './candidateView.entry.css?inline';
import { CandidateView } from '@app/components/candidateView.component';

export class CandidateViewEntry extends HTMLElement {
  constructor() {
    super();

    // Creating as shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = styles;
    shadow.appendChild(style);

    // Creating a mount point
    const mountPoint = document.createElement('div');
    mountPoint.setAttribute('id', 'candidate-view-component');
    shadow.appendChild(mountPoint);

    // Mount component
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<CandidateView />);
  }
}

// Registering candidate-view web component
customElements.define('candidate-view', CandidateViewEntry);
