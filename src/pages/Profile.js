import React from 'react'
import ActiveEvents from '../components/ActiveEvents'
import SavedEvents from '../components/SavedEvents'
import PublishedEvents from '../components/PublishedEvents'
import ProfileCard from '../components/ProfileCard'
import FriendsHolder from '../components/FriendsHolder'
import EventsHolder from '../components/EventsHolder'

function Profile() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <EventsHolder/>
                    </div>
                </div>
                <div className="col-3">
                    <div className="row">
                        <ProfileCard/>
                    </div>
                    <div className="row">
                        <FriendsHolder/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile