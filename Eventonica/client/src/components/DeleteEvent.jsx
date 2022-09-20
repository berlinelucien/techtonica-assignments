import React from "react";
import { useState } from "react";


const DeleteEvent = ({ deleteEvent }) => {
  const [eventId, setEventId] = useState("");
  const handleDeleteEvent = (e) => {
    e.preventDefault();
    deleteEvent(eventId);
    setEventId("");
  };

  return (
    <div>
      <h3>Delete Event</h3>
      <form id="delete-event" action="#" onSubmit={handleDeleteEvent}>
        <fieldset>
          <label>Event ID</label>
          <input type="number" min="1" id="delete-event-id"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
          />
        </fieldset>
        <input type="submit" value="Delete"/>
      </form>
    </div>
  );
};

export default DeleteEvent;
