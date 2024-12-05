import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

if (import.meta.env.PROD) {
  disableReactDevTools();
}

// Create a new router instance
const router = createRouter({ routeTree, defaultPreload: 'intent' });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
