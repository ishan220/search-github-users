import React from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
import { Doughnut2D, ExampleChart, Pie3D, Column3D, Bar3D } from '../Charts'

const Repos = () => {
  const { repos } = React.useContext(GithubContext)

  let languages = repos.reduce((total, repo) => {
    const { language, stargazers_count } = repo
    if (!language) return total
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: 1 }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }
    return total
  }, {})
  languages = Object.values(languages)
    .sort((a, b) => {
      return b.val - a.val
    })
    .slice(0, 5) // to take out the top 5 programming languages  in decreasing order of users

  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars
    })
    .slice(0, 5)
    .map((item, index) => {
      return { ...item, value: item.stars }
    })

  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item
      total.stars[stargazers_count] = { label: name, value: stargazers_count }
      total.forks[forks] = { label: name, value: forks }
      return total
    },
    {
      stars: {},
      forks: {},
    }
  )
  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()
  console.log('stars:' + stars)
  console.log('forks:' + forks)
  return (
    <>
      <section className='section'>
        <Wrapper className='section-center'>
          {languages != null && <Pie3D data={languages}></Pie3D>}
          {mostPopular != null && <Doughnut2D data={mostPopular} />}
          {stars && <Column3D data={stars} />}
          {forks && <Bar3D data={forks} />}
          {/* <ExampleChart data={chartData}></ExampleChart> */}
        </Wrapper>
      </section>
    </>
  )
}
export default Repos
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1080px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`
