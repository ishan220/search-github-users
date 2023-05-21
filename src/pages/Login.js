import React from 'react'
import loginImg from '../images/login-img.svg'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
export function Login() {
  const { loginWithRedirect } = useAuth0()
  return (
    <>
      <Wrapper>
        <div className='container'>
          <img src={loginImg} alt='github users'></img>
          <h1>This is Login Page</h1>
          <button className='btn' onClick={() => loginWithRedirect()}>
            Login
          </button>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2 rem;
  }
  h1 {
    margin-bottom: 1.5 rem;
  }
`
