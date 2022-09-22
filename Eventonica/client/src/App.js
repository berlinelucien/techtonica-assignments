import "./App.css";
import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from "./components/Users";
import Home from "./components/Home";
import EventForm from "./components/EventForm";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/events" element={<EventForm />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <div className="App">
    //       {/** header component here */ }
    //   <Header />
    //   <main>
    //     <div className="user-and-events">
    //       {/**users and event component here */}
    //       <Users />
    //       <Event />
    //     </div>

    //     <div>
    //       {/**Delete event here */}
    //     </div>

    //   </main>
    //   <Footer />
    // </div>
  );
}

export default App;
