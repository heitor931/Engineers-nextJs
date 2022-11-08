import React from 'react'
import PeopleList from '../components/peopleList'
import "../styles/Home.module.css"

const HomePage = () => {
  return (
    <div className='container'>
      <h1>List of engineers</h1>
      <PeopleList />
    </div>
  )
}

export default HomePage