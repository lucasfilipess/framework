import React from 'react'
import { Navigate } from 'react-router-dom'
import { Layout } from 'components'
import { useAuth } from 'hooks'
import { sidebarNavigation } from 'config'

export type Props = {
  component: React.ComponentType
  isPrivate?: boolean
}

const RouteElement: React.FC<Props> = ({
  component: RouteComponent,
  isPrivate = false
}) => {
  const { user } = useAuth()

  if (isPrivate === !!user) {
    return isPrivate ? (
      <Layout user={user} sidebarNavigation={sidebarNavigation}>
        <RouteComponent />
      </Layout>
    ) : (
      <RouteComponent />
    )
  }

  return (
    <Navigate
      to={isPrivate ? '/' : '/postagens'}
      state={isPrivate ? { from: location } : null}
    />
  )
}

export default RouteElement
