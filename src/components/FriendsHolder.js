import React from 'react'
import AddFriendModal from './AddFriendModal';

function FriendsHolder() {

  var friendList = [
    { friendPic: "pic", friendName: "Joe Shmoe" },
    { friendPic: "pic", friendName: "Joe Shmoe" },
    { friendPic: "pic", friendName: "Joe Shmoe" },
    { friendPic: "pic", friendName: "Joe Shmoe" },
    { friendPic: "pic", friendName: "Joe Shmoe" },
    { friendPic: "pic", friendName: "Joe Shmoe" },
  ];

  return (
    <>
      <div className="flex-container border rounded my-2 mx-3 p-4 shadow">
        <div className="row">
          <div className="col-8">
            <h4>Friends</h4>
          </div>
          <div className="col-4 text-end">
            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#friendModal">+</button>
            <AddFriendModal />
          </div>

        </div>
        {
          friendList.map(
            friend =>
              <div className="row border rounded my-2 p-3">
                <div className="col-2">
                  {friend.friendPic}
                </div>
                <div className="col-10">
                  {friend.friendName}
                </div>
              </div>
          )
        }
      </div>
    </>
  )
}

export default FriendsHolder