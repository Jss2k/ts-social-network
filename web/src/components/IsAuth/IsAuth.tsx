import React from 'react'
import {gql, useQuery} from '@apollo/client'

const IS_LOGGED_IN = gql`
query USERS_QUERY {
  allUsers {
    id
    name
  }
}
`

const IsAuth = () => {
  const { loading, error, data } = useQuery(USERS_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  return (
    <div>
      {data.allUsers.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

export default IsAuth