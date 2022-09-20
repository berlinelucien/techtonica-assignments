import React from "react";
import { useState } from "react";
import AddNewEvent from "./AddEvent";
import DeleteEvent from "./DeleteEvent";
import FindEvent from "./FindEvent";

// hardcode data
const event1 = {
  id: "1",
  name: "Birthday",
  date: "2021-09-01",
  description: "A birthday party for my best friend",
  category: "Celebration",
};

const event2 = {
  id: "2",
  name: "Graduation",
  date: "2021-08-01",
  description: "The class of 2021 graduates from East High",
  category: "Education",
};

const event3 = {
  id: "3",
  name: "JS Study Session",
  date: "2021-10-01",
  description: "A chance to practice Javascript interview questions",
  category: "Education",
};
// another hook called useReducer which is better for more complex state management.
// Reducer A function that accepts the current state and action. It returns the new state.

const Event = () => {
  // setting the data
  const [events, setEvents] = useState([event1, event2, event3]);

// add events 
  const handleAddEvent = (newEvents) => {
    setEvents([...events, newEvents]);
  };
// delete events
  const deleteEvent = (deleteId) => {
    const newEvents = events.filter((event) => event.id !== deleteId);
    setEvents(newEvents);
  }

  return (
    <div>
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
          <ul id="events-list">
          <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#:</th>
              <th scope="col">Event:</th>
                  <th scope="col">Date:</th>
                  <th scope="col">Description:</th>
                  <th scope="col">Category:</th>
            </tr>
          </thead>
              <tbody>
                 {/* Display all Events here */}
            {events.map((event, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{event.id}</th>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.description}</td>
                  <td>{event.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
          </ul>
          {/** add event form */}
        <AddNewEvent handleAddEvent={handleAddEvent} />
      </div>
      </section>
    
      <div>
        {/** delete event component */}
        <DeleteEvent deleteEvent={deleteEvent} />
        <FindEvent />
      </div>
      </div> 
  );
};

export default Event;
