import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom'
import { Posts, Albums, ToDos, NotFound } from 'pages'
import { Layout } from 'components'
import { useUser } from 'hooks'
import { sidebarNavigation, userNavigation } from 'config'

export const Routes: React.FC = () => {
  const { user } = useUser()

  return (
    <Router>
      <Layout
        user={user}
        sidebarNavigation={sidebarNavigation}
        userNavigation={userNavigation}
      >
        <Switch>
          <Route path="/" element={<Posts />} />
          <Route path="/albuns" element={<Albums />} />
          <Route path="/to-dos" element={<ToDos />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Layout>
    </Router>
  )
}
