import React from 'react'
import JoinEventModal from './JoinEventModal'

function PartyCard(props) {
    return (
        <>
            <div className="card my-2" style={{ width: '100%' }}>
                <img className="card-img-top" src="" alt="" />
                <div className="card-body">


                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-2">
                                <img src={process.env.PUBLIC_URL + "/images/empty.png"} className='img-thumbnail' alt="alt text for event image" />
                            </div>
                            <div className="col-7">
                                <div className="container">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-6 text-start">
                                            <h5 className='card-title'>{props.name}</h5>
                                        </div>
                                        <div className="col-6 text-end flex-nowrap">

                                        </div>
                                    </div>
                                    <div className="row py-1 pb-2">
                                        <p className='card-text'>{props.desc}</p>
                                    </div>
                                    <div className="row">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row m-0 text-end">
                                    <div className="col-12">
                                        <p className='fs-6'>{props.location}</p>
                                        <p className='fs-6'>Date: {props.date}</p>
                                        <p className='fs-6'>Capacity: {props.capacity}</p>
                                        <button href="" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#joinModal">Join Event</button>
                                        <JoinEventModal />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartyCard