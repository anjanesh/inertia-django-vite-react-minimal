import "vite/modulepreload-polyfill";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { InertiaProgress } from '@inertiajs/progress';
import axios from 'axios';
import { Page } from "@inertiajs/core";
import React from 'react';  // Added this import
document.addEventListener('DOMContentLoaded', () => {

    const csrfToken = document.querySelector('meta[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

    InertiaProgress.init();

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

});