import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import loadingImage from '../images/preloader.gif'
import styled from 'styled-components'
export const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()
  if (isLoading)
    return (
      <Wrapper>
        <img src={loadingImage}></img>
      </Wrapper>
    )
  if (error) {
    return <></>
  }
  return <>{children}</>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`
