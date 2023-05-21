import React from 'react'
import { Repos, User, Navbar, Search, Info, Test, Test2 } from '../components'
import loadingImage from '../images/preloader.gif'
import { GithubContext } from '../context/context'
function Dashboard() {
  const { isLoading } = React.useContext(GithubContext)
  if (isLoading)
    return (
      <main>
        <Navbar />
        <Search></Search>
        <img src={loadingImage} className='loading-img' alt='Loading'></img>
      </main>
    )
  return (
    <>
      <Navbar />
      <Search></Search>
      <Info></Info>
      <User></User>
      <Repos></Repos>
      {/* <Test favcolor='yellow'></Test> */}
      {/* <Test2 /> */}
      <h1>This is Dashboard Page</h1>
    </>
  )
}
export { Dashboard }
