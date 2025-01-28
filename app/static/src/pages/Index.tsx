import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Index() {

  const { app_name } = usePage().props;

  return (
      <div>
          <h1>{app_name}</h1>
          <h1>Welcome to the Home Page</h1>
          <Link href="/about">About</Link>
      </div>
  );
}