/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TrafficLightImport } from './routes/traffic-light'
import { Route as StopwatchImport } from './routes/stopwatch'
import { Route as QuoteImport } from './routes/quote'
import { Route as DiceImport } from './routes/dice'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TrafficLightRoute = TrafficLightImport.update({
  id: '/traffic-light',
  path: '/traffic-light',
  getParentRoute: () => rootRoute,
} as any)

const StopwatchRoute = StopwatchImport.update({
  id: '/stopwatch',
  path: '/stopwatch',
  getParentRoute: () => rootRoute,
} as any)

const QuoteRoute = QuoteImport.update({
  id: '/quote',
  path: '/quote',
  getParentRoute: () => rootRoute,
} as any)

const DiceRoute = DiceImport.update({
  id: '/dice',
  path: '/dice',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dice': {
      id: '/dice'
      path: '/dice'
      fullPath: '/dice'
      preLoaderRoute: typeof DiceImport
      parentRoute: typeof rootRoute
    }
    '/quote': {
      id: '/quote'
      path: '/quote'
      fullPath: '/quote'
      preLoaderRoute: typeof QuoteImport
      parentRoute: typeof rootRoute
    }
    '/stopwatch': {
      id: '/stopwatch'
      path: '/stopwatch'
      fullPath: '/stopwatch'
      preLoaderRoute: typeof StopwatchImport
      parentRoute: typeof rootRoute
    }
    '/traffic-light': {
      id: '/traffic-light'
      path: '/traffic-light'
      fullPath: '/traffic-light'
      preLoaderRoute: typeof TrafficLightImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dice': typeof DiceRoute
  '/quote': typeof QuoteRoute
  '/stopwatch': typeof StopwatchRoute
  '/traffic-light': typeof TrafficLightRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dice': typeof DiceRoute
  '/quote': typeof QuoteRoute
  '/stopwatch': typeof StopwatchRoute
  '/traffic-light': typeof TrafficLightRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dice': typeof DiceRoute
  '/quote': typeof QuoteRoute
  '/stopwatch': typeof StopwatchRoute
  '/traffic-light': typeof TrafficLightRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/dice' | '/quote' | '/stopwatch' | '/traffic-light'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dice' | '/quote' | '/stopwatch' | '/traffic-light'
  id: '__root__' | '/' | '/dice' | '/quote' | '/stopwatch' | '/traffic-light'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DiceRoute: typeof DiceRoute
  QuoteRoute: typeof QuoteRoute
  StopwatchRoute: typeof StopwatchRoute
  TrafficLightRoute: typeof TrafficLightRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DiceRoute: DiceRoute,
  QuoteRoute: QuoteRoute,
  StopwatchRoute: StopwatchRoute,
  TrafficLightRoute: TrafficLightRoute,
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
        "/dice",
        "/quote",
        "/stopwatch",
        "/traffic-light"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dice": {
      "filePath": "dice.tsx"
    },
    "/quote": {
      "filePath": "quote.tsx"
    },
    "/stopwatch": {
      "filePath": "stopwatch.tsx"
    },
    "/traffic-light": {
      "filePath": "traffic-light.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
