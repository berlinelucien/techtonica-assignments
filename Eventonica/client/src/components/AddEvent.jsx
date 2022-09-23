import { useReducer } from "react";

// another hook called useReducer which is better for more complex state management.
// Reducer A function that accepts the current state and action. It returns the new state.

function AddNewEvent({ handleAddEvent }) {
  // Create an initial state for the form reducer. This will be an object with keys for each field in the form. The values will be updates as the user fills out the form.
  const initialState = {
    id: "",
    name: "",
    date: "",
    description: "",
    category: "",
  };

  const reducer = (state, action) => {
    console.log(action, "this is the action");
    switch (action.type) {
      case "editName":
        console.log("Logged if the editName action is being dispatched");
        return { ...state, name: action.payload };

      case "editDescription":
        return { ...state, description: action.payload };

      case "editCategory":
        return { ...state, category: action.payload };

      case "editDate":
        return { ...state, date: action.payload };

      case "editId":
        return { ...state, id: action.payload };
      
      case "clearForm":
        return {...state, id: "", name: "", date: "", description: "", category: "" };
      
      default:
        return state
    }
  };
  // initialize at the end of reducer that will store and update the form data
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="addEventContainer">
      <h3>Add Event</h3>
      <form
        id="add-event"
        action="#"
        onSubmit={(ev) => {
          ev.preventDefault();
          handleAddEvent(state);
        }}
      >
        <fieldset>
          <label>Event info: </label>
          <input
            type="text"
            id="add-event-id"
            value={state.id || ""}
            onChange={(e) =>
              dispatch({
                type: "editId" ,
                payload: e.target.value,
              })
            }
            placeholder="Id"
            required
          />

          <input
            type="text"
            id="add-event-name"
            value={state.name || ""}
            onChange={(e) =>
              dispatch({
                type: "editName" ,
                payload: e.target.value,
              })
            }
            placeholder="Event Name"
            required
          />

          <input
            type="date"
            id="add-event-date"
            value={state.date || ""}
            onChange={(e) =>
              dispatch({
                type: "editDate" ,
                payload: e.target.value,
              })
            }
            placeholder="Date"
            required
          />

          <input
            type="text"
            id="add-event-category"
            value={state.category || ""}
            onChange={(e) =>
              dispatch({
                type: "editCategory" ,
                payload: e.target.value,
              })
            }
            placeholder="Category"
            required
          />

          <input
            type="text"
            id="add-event-description"
            value={state.description || ""}
            onChange={(e) =>
              dispatch({
                type: "editDescription",
                payload: e.target.value,
              })
            }
            placeholder="Description"
            required
          />
        </fieldset>
        {/* Add more form fields here */}
        <div className="button">
          <input type="submit" value="Add Event" />
        </div>
      </form>
    </div>
  );
}

export default AddNewEvent;
