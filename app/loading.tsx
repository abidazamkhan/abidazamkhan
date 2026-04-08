'use client';

export default function Loading() {
  return (
    <div className="loader-bg">
      <div id="container">
        <div className="spinner-border text-yellow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}