declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'candidate-view': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};
