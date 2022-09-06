import React from 'react'

function AddFriendModal() {

    var potentialFriends = [
        { friendPic: "pic", friendName: "Joe Shmoe" },
        { friendPic: "pic", friendName: "Joe Shmoe" },
        { friendPic: "pic", friendName: "Joe Shmoe" },
        { friendPic: "pic", friendName: "Joe Shmoe" },
    ];

    return (
        <>
            <div class="modal fade" id="friendModal" tabindex="-1" aria-labelledby="friendModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="friendModalLabel">Add Friend</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className='form-inline d-flex flex-nowrap'>
                                <input className='form-control mr-sm-2' type="search" placeholder="Search" aria-label='Search' />
                            </form>
                            {
                                potentialFriends.map(
                                    friend =>
                                        <div className="row border rounded my-2 p-3">
                                            <div className="col-1">
                                            <input type="checkbox" aria-label="Checkbox for following text input" />
                                            </div>
                                            <div className="col-3">
                                                {friend.friendPic}
                                            </div>
                                            <div className="col-8">
                                                {friend.friendName}
                                            </div>
                                        </div>
                                )
                            }
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Add Friend</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFriendModal