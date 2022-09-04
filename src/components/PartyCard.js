import React from 'react'

function PartyCard(props) {
    return (
        <>
            <div className="card my-2" style={{ width: '100%' }}>
                <img className="card-img-top" src="" alt="" />
                <div className="card-body">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-6 text-start">
                                <h5 className='card-title'>{props.name}</h5>
                            </div>
                            <div className="col-6 text-end flex-nowrap">
                                <h6 className='card-title'>{props.location}</h6>
                                <a href="#"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg></a>
                            </div>


                        </div>
                        <div className="row"></div>
                    </div>



                    <p className='card-text'>{props.desc}</p>
                    <a href="" className='btn btn-primary'>Join</a>
                </div>
            </div>
        </>
    )
}

export default PartyCard