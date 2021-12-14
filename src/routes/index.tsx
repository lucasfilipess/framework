import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'
import RouteElement from './RouteElement'
import { Posts, Albums, ToDos, NotFound, SignIn, SignUp } from 'pages'

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<RouteElement component={SignIn} />} />
        <Route
          path="/cadastrar"
          element={<RouteElement component={SignUp} />}
        />
        <Route
          path="/postagens"
          element={<RouteElement isPrivate component={Posts} />}
        />
        <Route
          path="/albuns"
          element={<RouteElement isPrivate component={Albums} />}
        />
        <Route
          path="/to-dos"
          element={<RouteElement isPrivate component={ToDos} />}
        />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </Router>
  )
}
