import React from "react";
import { useEffect, useState } from "react";
import AddNewEvent from "./AddEvent";
//import DeleteEvent from "./DeleteEvent";
import FindEvent from "./FindEvent";
import Header from "./Header";
import { MdDelete } from "react-icons/md";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const EventForm = () => {
  // setting the data
  const [events, setEvents] = useState([])
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [date, setDate] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  console.log("events", events);

  //const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  // connect backend to frontend
  // fetch all events
  const getEvents = async () => {
    const response = await fetch("http://localhost:4000/events");
    const event = await response.json();
    setEvents(event);
  };
  useEffect(() => {
    // useEffect will run getEvents() 
    getEvents();
  }, []);
  
  // add events
  const handleAddEvent = (newEvents) => {
    //const newEvent = { id, name, date, description, category };
    setEvents([...events, newEvents]);
    // setId("");
    // setName("");
    // setDate("");
    // setDescription("");
    // setCategory("");
  };

  // delete events prop/function from delete event page
  const deleteEvent =  (deleteId) => {
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
                      <th scope="row">{event?.id}</th>
                      <td>{event?.name}</td>
                      <td>{event?.date}</td>
                      <td>{event?.description}</td>
                      <td>{event?.category}</td>
                      <td>
                        <MdDelete onClick={() => deleteEvent(event.id)} />
                        <Checkbox {...label}
                          color="secondary"
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />} />
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
        {/* <DeleteEvent deleteEvent={deleteEvent} /> */}
        <FindEvent />
      </div>
    </div>
  );
};

export default EventForm;
