"use client"
import Link from 'next/link';

const error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-xl">
        {/* 404 Title */}
        <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-base-content/70 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Illustration (optional emoji or svg) */}
        <div className="text-6xl mb-6 animate-bounce">🚧</div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="btn btn-primary rounded-full px-6">
            Go Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline rounded-full px-6"
          >
            Go Back
          </button>
        </div>

        {/* Extra subtle footer */}
        <p className="mt-8 text-sm text-base-content/50">
          Error code: 404 | Lost in space 🌌
        </p>
      </div>
    </div>
    );
};

export default error;