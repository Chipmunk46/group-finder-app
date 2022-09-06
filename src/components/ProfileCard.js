import React from 'react'
import { Link } from 'react-router-dom'
import LogoutModal from './LogoutModal'

function ProfileCard() {
  return (
    <>
      <div className="container-fluid border rounded my-2 mx-3 p-4 shadow">
        <div className="row text-center">
          <Link to='/profile'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>
          </Link>
        </div>
        <div className="row text-center">
          <h4>Austin Wagstaff</h4>
        </div>
        <div className="row text-center">
          <p>Site Administrator</p>
        </div>
        <div className="row text-center">
            <button className='btn btn-secondary btn-sm' data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</button>
            <LogoutModal />
        </div>
      </div>
    </>
  )
}

export default ProfileCard