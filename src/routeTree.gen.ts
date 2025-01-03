/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProjectsProjectIdImport } from './routes/projects/$projectId'
import { Route as EventsEventIdImport } from './routes/events/$eventId'
import { Route as BlogsBlogIdImport } from './routes/blogs/$blogId'

// Create Virtual Routes

const TeamLazyImport = createFileRoute('/team')()
const MediaLazyImport = createFileRoute('/media')()
const DonateLazyImport = createFileRoute('/donate')()
const ContactLazyImport = createFileRoute('/contact')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const TeamLazyRoute = TeamLazyImport.update({
  id: '/team',
  path: '/team',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/team.lazy').then((d) => d.Route))

const MediaLazyRoute = MediaLazyImport.update({
  id: '/media',
  path: '/media',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/media.lazy').then((d) => d.Route))

const DonateLazyRoute = DonateLazyImport.update({
  id: '/donate',
  path: '/donate',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/donate.lazy').then((d) => d.Route))

const ContactLazyRoute = ContactLazyImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProjectsProjectIdRoute = ProjectsProjectIdImport.update({
  id: '/projects/$projectId',
  path: '/projects/$projectId',
  getParentRoute: () => rootRoute,
} as any)

const EventsEventIdRoute = EventsEventIdImport.update({
  id: '/events/$eventId',
  path: '/events/$eventId',
  getParentRoute: () => rootRoute,
} as any)

const BlogsBlogIdRoute = BlogsBlogIdImport.update({
  id: '/blogs/$blogId',
  path: '/blogs/$blogId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/donate': {
      id: '/donate'
      path: '/donate'
      fullPath: '/donate'
      preLoaderRoute: typeof DonateLazyImport
      parentRoute: typeof rootRoute
    }
    '/media': {
      id: '/media'
      path: '/media'
      fullPath: '/media'
      preLoaderRoute: typeof MediaLazyImport
      parentRoute: typeof rootRoute
    }
    '/team': {
      id: '/team'
      path: '/team'
      fullPath: '/team'
      preLoaderRoute: typeof TeamLazyImport
      parentRoute: typeof rootRoute
    }
    '/blogs/$blogId': {
      id: '/blogs/$blogId'
      path: '/blogs/$blogId'
      fullPath: '/blogs/$blogId'
      preLoaderRoute: typeof BlogsBlogIdImport
      parentRoute: typeof rootRoute
    }
    '/events/$eventId': {
      id: '/events/$eventId'
      path: '/events/$eventId'
      fullPath: '/events/$eventId'
      preLoaderRoute: typeof EventsEventIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/$projectId': {
      id: '/projects/$projectId'
      path: '/projects/$projectId'
      fullPath: '/projects/$projectId'
      preLoaderRoute: typeof ProjectsProjectIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/contact': typeof ContactLazyRoute
  '/donate': typeof DonateLazyRoute
  '/media': typeof MediaLazyRoute
  '/team': typeof TeamLazyRoute
  '/blogs/$blogId': typeof BlogsBlogIdRoute
  '/events/$eventId': typeof EventsEventIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/contact': typeof ContactLazyRoute
  '/donate': typeof DonateLazyRoute
  '/media': typeof MediaLazyRoute
  '/team': typeof TeamLazyRoute
  '/blogs/$blogId': typeof BlogsBlogIdRoute
  '/events/$eventId': typeof EventsEventIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/contact': typeof ContactLazyRoute
  '/donate': typeof DonateLazyRoute
  '/media': typeof MediaLazyRoute
  '/team': typeof TeamLazyRoute
  '/blogs/$blogId': typeof BlogsBlogIdRoute
  '/events/$eventId': typeof EventsEventIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/contact'
    | '/donate'
    | '/media'
    | '/team'
    | '/blogs/$blogId'
    | '/events/$eventId'
    | '/projects/$projectId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/contact'
    | '/donate'
    | '/media'
    | '/team'
    | '/blogs/$blogId'
    | '/events/$eventId'
    | '/projects/$projectId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/contact'
    | '/donate'
    | '/media'
    | '/team'
    | '/blogs/$blogId'
    | '/events/$eventId'
    | '/projects/$projectId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  ContactLazyRoute: typeof ContactLazyRoute
  DonateLazyRoute: typeof DonateLazyRoute
  MediaLazyRoute: typeof MediaLazyRoute
  TeamLazyRoute: typeof TeamLazyRoute
  BlogsBlogIdRoute: typeof BlogsBlogIdRoute
  EventsEventIdRoute: typeof EventsEventIdRoute
  ProjectsProjectIdRoute: typeof ProjectsProjectIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  ContactLazyRoute: ContactLazyRoute,
  DonateLazyRoute: DonateLazyRoute,
  MediaLazyRoute: MediaLazyRoute,
  TeamLazyRoute: TeamLazyRoute,
  BlogsBlogIdRoute: BlogsBlogIdRoute,
  EventsEventIdRoute: EventsEventIdRoute,
  ProjectsProjectIdRoute: ProjectsProjectIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/contact",
        "/donate",
        "/media",
        "/team",
        "/blogs/$blogId",
        "/events/$eventId",
        "/projects/$projectId"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/contact": {
      "filePath": "contact.lazy.tsx"
    },
    "/donate": {
      "filePath": "donate.lazy.tsx"
    },
    "/media": {
      "filePath": "media.lazy.tsx"
    },
    "/team": {
      "filePath": "team.lazy.tsx"
    },
    "/blogs/$blogId": {
      "filePath": "blogs/$blogId.tsx"
    },
    "/events/$eventId": {
      "filePath": "events/$eventId.tsx"
    },
    "/projects/$projectId": {
      "filePath": "projects/$projectId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
