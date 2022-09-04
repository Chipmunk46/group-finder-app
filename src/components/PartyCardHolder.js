import React from 'react'
import PartyCard from './PartyCard';

function PartyCardHolder() {

    var cardList = [
        { eventName: "Event Name", eventDesc: "temp temp temp temp temp temp", eventLocation: "New York City, NY", eventDate: "05/05/2005" },
        { eventName: "Event Name", eventDesc: "temp temp temp temp temp temp", eventLocation: "New York City, NY", eventDate: "05/05/2005" },
        { eventName: "Event Name", eventDesc: "temp temp temp temp temp temp", eventLocation: "New York City, NY", eventDate: "05/05/2005" },
        { eventName: "Event Name", eventDesc: "temp temp temp temp temp temp", eventLocation: "New York City, NY", eventDate: "05/05/2005" },
        { eventName: "Event Name", eventDesc: "temp temp temp temp temp temp", eventLocation: "New York City, NY", eventDate: "05/05/2005" },
    ];
    return (
        <>
            <div className="flex-container mx-2 py-3 px-3 border rounded shadow">
                <h2>Events</h2>
                {
                    cardList.map(
                        event =>
                            <div className="row mx-1">
                                <PartyCard name={event.eventName} desc={event.eventDesc} location={event.eventLocation} />
                            </div>
                    )
                }
            </div>
        </>
    )
}

export default PartyCardHolder