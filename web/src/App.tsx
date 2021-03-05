import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink} from '@apollo/client'
import { setContext } from "@apollo/client/link/context";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Landing from './components/Landing/Landing'
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Users from './components/Users/Users'

import './App.css'

// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
//   cache: new InMemoryCache()
// })
const httpLink = new HttpLink({uri: 'http://localhost:4000'})
const authLink = setContext(async(req, {headers}) => {
  const token = localStorage.getItem('token')

  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : null
    }
  }
})

const link = authLink.concat(httpLink)
const client = new ApolloClient({
  link: (link),
  cache: new InMemoryCache()
})


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path='/landing'>
            <Landing />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Users />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
