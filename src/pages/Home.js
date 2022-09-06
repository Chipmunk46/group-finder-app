import React from 'react'
import HomeProfile from '../components/HomeProfile'
import PartyCardHolder from '../components/PartyCardHolder'
import PartySearch from '../components/PartySearch'
import TagsContainer from '../components/TagsContainer'
import ProfileCard from '../components/ProfileCard'

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <PartySearch/>
            </div>
            <div className="row">
              <PartyCardHolder/>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <ProfileCard />
            </div>
            <div className="row">
              <TagsContainer/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home