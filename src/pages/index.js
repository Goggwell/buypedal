import React from 'react'
import loadable from '@loadable/component'
import '../styles/sass/main.scss'

const HomeLazy = loadable(() => import('../containers/Home.js'))

const Index = () => {
  return (
    <>
      <HomeLazy />      
    </>
  )
}

export default Index
