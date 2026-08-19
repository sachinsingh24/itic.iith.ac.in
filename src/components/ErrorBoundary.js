import React from 'react';

// Pages are loaded as separate chunks, so a dropped connection mid-navigation
// makes the import reject. Without a boundary that error unmounts the whole app
// and leaves a blank page with no way back.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    if (this.props.onError) this.props.onError(error);
  }

  render() {
    if (!this.state.failed) return this.props.children;

    return (
      <div className="container ptb-100 text-center">
        <h3>This page could not be loaded</h3>
        <p>Please check your connection and try again.</p>
        <button
          className="default-btn"
          onClick={() => window.location.reload()}
          type="button"
        >
          Reload<span></span>
        </button>
      </div>
    );
  }
}

export default ErrorBoundary;
