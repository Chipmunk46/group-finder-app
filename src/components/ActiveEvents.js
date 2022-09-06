import React from 'react';
import PartyCard from './PartyCard';

function ActiveEvents(props) {
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
    { id: 1, eventName: "Event Name", 
        eventDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis recusandae nostrum tempore vel architecto ducimus, quisquam sunt aperiam deserunt, commodi placeat exercitationem provident. Eligendi exercitationem commodi distinctio? Perferendis, odio architecto!", 
        eventLocation: "New York City, NY", eventDate: "05/05/2005", eventCapacity: 5},
];

  return (
    <>
      <div className="flex-container">
        <div className="text-white bg-secondary rounded px-3">
            {props.holderName}
        </div>
        <div className="container border">
            <div className="row">
            {
                    cardList.map(
                        event =>
                            <div className="row mx-1" key={event.id}>
                                <PartyCard name={event.eventName} desc={event.eventDesc} location={event.eventLocation} />
                            </div>
                    )
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default ActiveEvents