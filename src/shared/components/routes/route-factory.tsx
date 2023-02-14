import React from 'react'
import { Route, Routes } from 'react-router-dom'

type RouteFactoryProps = {
  routes: {
    layout: any,
    pathBase: string,
    pages: {
      path?: string,
      component: any,
      meta?: any,
      exact?: boolean,
    }[]
  }[]
}

export const RouteFactory: React.FC<RouteFactoryProps> = ({ routes }: RouteFactoryProps) => (
  <Routes>
    {routes.map(({ layout: Layout, pages, pathBase }) => (
      <Route key={pathBase} path={pathBase} element={<Layout />}>
        {pages.map(({ component: Component, ...props }) => (
          <Route key={Component} {...props} element={<Component />} />
        ))}
      </Route>
    ))}

  </Routes>
)
