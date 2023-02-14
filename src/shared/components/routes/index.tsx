import React from 'react'
import { RouteFactory } from './route-factory'

import BaseLayout from '../layouts/base-layout'

import App from '../../../pages/App'
import Login from '../../../pages/Login'

const Routes = () => {
  const routes = [
    {
      layout: BaseLayout,
      pathBase: '/',
      pages: [
        { component: App, index: true },
        { path: '/login', component: Login },
      ],
    },
  ]

  return (
    <RouteFactory routes={routes} />
  )
}

export default Routes
