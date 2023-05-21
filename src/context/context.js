import React, { useEffect, useState } from 'react'
//import { useEffect } from 'react'
//import { useState } from 'react'
import mockFollowers from './mockData.js/mockFollowers'
import mockRepos from './mockData.js/mockRepos'
import mockUser from './mockData.js/mockUser'
import axios from 'axios'
const GithubContext = React.createContext()
const rootUrl = 'https://api.github.com'

const GitHubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  const [requests, setRequests] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })

  const checkRequests = () => {
    console.log('yha to aa rha hoga2')
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data
        setRequests(remaining)
        if (remaining === 0) {
          toggleError({
            show: true,
            msg: 'You have exceeded the Request Limit',
          })
        }
      })
      .catch(({ err }) => {})
  }

  useEffect(() => {
    console.log('use Effect is called')
    checkRequests()
  }, [])

  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }
  const searchGithubUser = async (user) => {
    toggleError()
    setLoading(true)

    const response = await axios(`${rootUrl}/users/${user}`).catch((error) => {
      console.log(error)
    })
    setLoading(false)
    if (response) {
      setGithubUser(response.data)
    } else {
      console.log('coming in else error')
      toggleError(true, 'Searched User is not Available!!!')
    }
    console.log(response)
    if (response) {
      const { login, followers_url } = response.data

      // await axios(`${rootUrl}/users/${login}/repos?per_page=100`).then(
      //   (response1) => {
      //     setRepos(response1.data)
      //   }
      // )

      // await axios(`${followers_url}?per_page=100`).then((response2) => {
      //   setFollowers(response2.data)
      // })
      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]).then((results) => {
        console.log('results:', results)
        const [repos, followers] = results
        const status = 'fulfilled'
        if (repos.status === status) setRepos(repos.value.data)
        if (followers.status === status) setFollowers(followers.value.data)
      }) //this is waiting for all the http request to be fulfilled , and then setting the repos and followers

      console.log(`${rootUrl}/users/${login}/repos?per_page=100`)
      console.log(`${followers_url}?per_page=100`)
    }
  }

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        error,
        requests,
        searchGithubUser,
        isLoading,
      }}
    >
      {console.log('ContextProvider renders Again!!')}
      {children}
    </GithubContext.Provider>
  )
}
export { GithubContext, GitHubProvider }
