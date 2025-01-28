// src/pages/About.tsx
import React from 'react';  // Add this import
import {Link, usePage} from '@inertiajs/react';

export default function About() {

  const { app_name } = usePage().props;

  return (
      <div>
          <h1>{app_name}</h1>
          <h1>About Page</h1>
          <Link href="/">Back to Home</Link>
      </div>
  );
}