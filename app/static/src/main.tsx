import "vite/modulepreload-polyfill";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { Page } from "@inertiajs/core";
import React from 'react';  // Added this import

createInertiaApp({
  resolve: (name) => import(`./pages/${name}.tsx`),
  setup({ el, App, props }: {
    el: HTMLElement,
    App: React.ComponentType<{ page: Page }>,
    props: any
  }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
});