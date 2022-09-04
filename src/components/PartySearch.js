import React from 'react'

function PartySearch() {
    return (
        <>
            <div className="flex-container my-2 mx-3">
                <div className="row">
                    <div className="col-10">
                        <form className='form-inline d-flex flex-nowrap'>
                            <input className='form-control mr-sm-2' type="search" placeholder="Search" aria-label='Search' />
                        </form>
                    </div>
                    <div className="col-2 d-flex justify-content-left">
                        <button className='btn btn-secondary'>Create Event</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartySearch