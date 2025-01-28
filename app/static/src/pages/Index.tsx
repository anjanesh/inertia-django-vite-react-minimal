import React from 'react';
import { Link } from '@inertiajs/react';

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/about">About</Link>
    </div>
  );
}