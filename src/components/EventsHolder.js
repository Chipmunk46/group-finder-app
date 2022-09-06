import React from 'react';
import ActiveEvents from './ActiveEvents';
import { HashLink } from 'react-router-hash-link';

function EventsHolder() {
  return (
    <>
      <div className="flex-container my-2 p-4 shadow">
        <div className="row">
          <h2>Your Events</h2>
        </div>
        <div className="row">
          <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab0"
                data-bs-toggle="tab"
                data-bs-target="#home0"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Published
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab0"
                data-bs-toggle="tab"
                data-bs-target="#profile0"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Active
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab0"
                data-bs-toggle="tab"
                data-bs-target="#contact0"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Saved
              </button>
            </li>
          </ul>

          <div class="tab-content" id="myTabContent0">
            <div
              class="tab-pane fade show active"
              id="home0"
              role="tabpanel"
              aria-labelledby="home-tab0"
            >
              <ActiveEvents holderName='Published Events' />
            </div>
            <div class="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
              <ActiveEvents holderName='Active Events' />
            </div>
            <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
              <ActiveEvents holderName='Saved Events' />
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default EventsHolder