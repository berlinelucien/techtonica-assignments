import React from "react";
import { useEffect, useState } from "react";
import AddNewEvent from "./AddEvent";
import DeleteEvent from "./DeleteEvent";
import FindEvent from "./FindEvent";
import Header from "./Header";
import { MdDelete } from "react-icons/md";

const Event = () => {
  // setting the data
  const [events, setEvents] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  console.log("events", events);

  // connect backend to frontend
  // fetch all events
  const getEvents = async () => {
    fetch("http://localhost:4000/events")
      .then((res) => res.json())
      .then((res) => setEvents(res.events));
  };
  useEffect(() => {
    // useEffect will run getEvents()
    getEvents();
  }, []);

  // add events
  const handleAddEvent = (newEvents) => {
    setEvents([...events, newEvents]);
  };

  // delete events prop/function from delete event page
  const deleteEvent = async (deleteId) => {
    // let response = await fetch(`http://localhost:4000/events/${deleteId}`, {
    //   method: "DELETE",
    // });
    // await response.json();
    const newEvents = events.filter((event) => event.id !== deleteId);
    setEvents(newEvents);
  };

  return (
    <div>
      <section className="event-management">
        <h2>
          <Header text="Event Management" />{" "}
        </h2>
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
                  <th scope="col"></th>
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
                      <td>
                        <MdDelete onClick={() => deleteEvent(event.id)} />
                      </td>
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
