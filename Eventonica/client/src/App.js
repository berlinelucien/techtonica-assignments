import "./App.css";
import React from 'react';
import Users from "./components/Users";
import Event from "./components/Event";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
          {/** header component here */}
      <Header />
      <main>
        <div className="user-and-events">
          {/**users and event component here */}
          <Users />
          <Event />
        </div>

        <div>
          {/**Delete event here */}
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
