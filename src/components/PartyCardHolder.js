import React from 'react'
import PartyCard from './PartyCard';

function PartyCardHolder() {

    var cardList = [
        { id: 1, eventName: "Event Name", 
        eventDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis recusandae nostrum tempore vel architecto ducimus, quisquam sunt aperiam deserunt, commodi placeat exercitationem provident. Eligendi exercitationem commodi distinctio? Perferendis, odio architecto!", 
        eventLocation: "New York City, NY", eventDate: "05/05/2005", eventCapacity: 5},
        { id: 1, eventName: "Event Name", 
        eventDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis recusandae nostrum tempore vel architecto ducimus, quisquam sunt aperiam deserunt, commodi placeat exercitationem provident. Eligendi exercitationem commodi distinctio? Perferendis, odio architecto!", 
        eventLocation: "New York City, NY", eventDate: "05/05/2005", eventCapacity: 5},
        { id: 1, eventName: "Event Name", 
        eventDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis recusandae nostrum tempore vel architecto ducimus, quisquam sunt aperiam deserunt, commodi placeat exercitationem provident. Eligendi exercitationem commodi distinctio? Perferendis, odio architecto!", 
        eventLocation: "New York City, NY", eventDate: "05/05/2005", eventCapacity: 5},
        { id: 1, eventName: "Event Name", 
        eventDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis recusandae nostrum tempore vel architecto ducimus, quisquam sunt aperiam deserunt, commodi placeat exercitationem provident. Eligendi exercitationem commodi distinctio? Perferendis, odio architecto!", 
        eventLocation: "New York City, NY", eventDate: "05/05/2005", eventCapacity: 5},
    ];
    return (
        <>
            <div className="flex-container mx-2 py-3 px-3 border rounded shadow">
                <h2>Events</h2>
                {
                    cardList.map(
                        event =>
                            <div className="row mx-1" key={event.id}>
                                <PartyCard name={event.eventName} desc={event.eventDesc} location={event.eventLocation} capacity={event.eventCapacity} date={event.eventDate}/>
                            </div>
                    )
                }
            </div>
        </>
    )
}

export default PartyCardHolder