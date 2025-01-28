// src/pages/About.tsx
import React from 'react';  // Add this import
import { Link } from '@inertiajs/react';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">Back to Home</Link>
    </div>
  );
}