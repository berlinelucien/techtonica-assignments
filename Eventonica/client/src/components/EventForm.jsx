import React from "react";
import { useEffect, useState } from "react";
import AddNewEvent from "./AddEvent";
//import DeleteEvent from "./DeleteEvent";
import FindEvent from "./FindEvent";
import Header from "./Header";
import { MdDelete } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const EventForm = () => {
  // setting the data
  const [events, setEvents] = useState([]);
  console.log("events", events);

  //     set search query to empty string
  const [q, setQ] = useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = useState(["id", "name"]);

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

  //POST
  // add events
  const handleAddEvent = async (newEvents) => {
    const response = await fetch("http://localhost:4000/events", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvents),
    });
    const content = await response.json();
    setEvents(events);
    setEvents([...events, content]);
  };
  //DELETE
  // delete events prop/function from delete event page
  // delete connected to backend/DB
  const deleteEvent = async (deleteId) => {
    let response = await fetch(`http://localhost:4000/events/${deleteId}`, {
      method: "DELETE",
    });
    await response.json();
    const newEvents = events.filter((event) => event.id !== deleteId);
    setEvents(newEvents);
  };
  //PUT
  // UPDATE EVENTS
  // const updateEvents = async (newEvent) => {
  //   let response = fetch('http://localhost:4000/events', {
  //     method: 'PUT',
  //     headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newEvent)
  //   });
  //   const content = await response.json();
  //   events.forEach((event) => {
  //     updateEvents = {
  //       ...event,

  //     }
  //   })
  // }

  // SEARCH EVENTS
  // input will be converted to string, toLowercase, only looking
  // for parameters q= name
  const searchItem = (events) => {
    return events.filter((event) => {
      return searchParam.some((newEvent) => {
        return (
          event[newEvent].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <div>
      <section className="event-management">
        <h2>
          <Header text="Event Management" />{" "}
        </h2>
        <div>
          <div className="search">
            <label htmlFor="search-form">
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search for event"
                value={q}
                /*
          // set the value of our useState q
          //  anytime the user types in the search box
          */
                onChange={(e) => setQ(e.target.value)}
              />
              <span className="searchIcon">
                <SearchIcon />
              </span>
            </label>
          </div>
          <div className="container">
            <h3>All Events</h3>
            <ul id="events-list">
              <table className="table table-hover border">
                <thead className="thead-dark">
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
                  {searchItem(events).map((event, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{event?.id}</th>
                        <td>{event?.name}</td>
                        <td>{event?.date}</td>
                        <td>{event?.description}</td>
                        <td>{event?.category}</td>
                        <td>
                          <MdDelete onClick={() => deleteEvent(event.id)} />
                          <Checkbox
                            {...label}
                            color="secondary"
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </ul>
          </div>
          {/** add event form */}
          <div className="addUserArea">
            <AddNewEvent handleAddEvent={handleAddEvent} />
          </div>
        </div>
      </section>

      <div>
        {/** delete event component */}
        {/* <DeleteEvent deleteEvent={deleteEvent} /> */}
        {/* <FindEvent /> */}
      </div>
    </div>
  );
};

export default EventForm;
