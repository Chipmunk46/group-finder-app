import React from 'react'

function CreateEventModal() {
    return (
        <>
            <div className="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createModalLabel">Create Event</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <label for="event-title" class="col-form-label">Title</label>
                                        <input type="text" className='form-control' id='event-title' />
                                    </div>
                                    <div className="col-6">
                                        <label for="event-image" class="col-form-label">Image</label>
                                        <input type="file" className='form-control-file' id='event-image' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label for="event-desc" class="col-form-label">Description</label>
                                        <textarea className='form-control' id='event-desc' />
                                    </div>
                                    <div className="col-6">
                                        <label for="event-capacity" class="col-form-label">Max Participants</label>
                                        <input type="text" className='form-control' id='event-capacity' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label for="event-contact" class="col-form-label">Contact Info</label>
                                        <input type="text" className='form-control' id='event-contact' />
                                    </div>
                                    <div className="col-6">
                                        <label for="event-date" class="col-form-label">Date/Time</label>
                                        <input type="text" className='form-control' id='event-date' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label for="event-location" class="col-form-label">Location</label>
                                        <input type="text" className='form-control' id='event-location' />
                                    </div>
                                    <div className="col-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Create Event</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateEventModal