import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import ImgLogo from './../../assets/img-logo.png'

import { Wrapper } from './Login.styles'

const LOGIN_MUTATION = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`

interface LoginValues {
  email: string
  password: string
}

const Login = () => {
  const history = useHistory()
  const [login, { data }] = useMutation(LOGIN_MUTATION)

  const initialValues: LoginValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email Required'),
    password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Password Required'),
  })

  return (
    <Wrapper>
      <img src={ImgLogo}
      alt='logo'
      style={{width: '70px'}}
      className='logo'
      />
      <h3>Log in to Trashcan</h3>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        const response = await login({
          variables: values
        })
        localStorage.setItem('token', response.data.login.token)
        setSubmitting(false)
        history.push('/users')
      }}
      >
        <Form>
          <Field name='email' type='text' placeholder='Email'/>
          <ErrorMessage name='email' component={'div'} />
          <Field name='password' type='password' placeholder='Password'/>
          <ErrorMessage name='password' component={'div'} />
          <button type='submit' className='login-btn'><span>Login</span></button>
        </Form>
      </Formik>
      <div className='register'>
        <h4>Don't have an account?</h4>
        <Link to='/signup'>Sign up</Link>
      </div>
    </Wrapper>
  )
}

export default Login