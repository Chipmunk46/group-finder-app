import React from 'react'
import PartyCard from './PartyCard';

function PartyCardHolder() {

    var cardList = [
        { id: 1, eventName: "Event Name", eventDesc: "temp temp temp temp temp temp", eventLocation: "New York City, NY", eventDate: "05/05/2005" },
        { id: 2, eventName: "Event Name", eventDesc: "temp temp temp temp temp temp", eventLocation: "New York City, NY", eventDate: "05/05/2005" },
        { id: 3, eventName: "Event Name", eventDesc: "temp temp temp temp temp temp", eventLocation: "New York City, NY", eventDate: "05/05/2005" },
        { id: 4, eventName: "Event Name", eventDesc: "temp temp temp temp temp temp", eventLocation: "New York City, NY", eventDate: "05/05/2005" },
        { id: 5, eventName: "Event Name", eventDesc: "temp temp temp temp temp temp", eventLocation: "New York City, NY", eventDate: "05/05/2005" },
    ];
    return (
        <>
            <div className="flex-container mx-2 py-3 px-3 border rounded shadow">
                <h2>Events</h2>
                {
                    cardList.map(
                        event =>
                            <div className="row mx-1" key={event.id}>
                                <PartyCard name={event.eventName} desc={event.eventDesc} location={event.eventLocation} />
                            </div>
                    )
                }
            </div>
        </>
    )
}

export default PartyCardHolder