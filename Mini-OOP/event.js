  // event will have a name and description of event
  class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.message = "";
    this.availableTickets = []; // array to contain avaible tickets for movies
  }


  //** add a function on the Event class called addAvailableTickets that will create a ticket type for the event.
  addAvailableTickets(typeName, typePrice) {
    const typeObj1 = new TicketType(typeName, typePrice);
    this.availableTickets.push(typeObj1);
  }

  // Add a function to Event called allTickets that returns a string representing all ticket types and prices, like: All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)

  allTickets() {
    this.message += `<br><strong> - All Tickets: </strong>`
    for (let i = 0; i < this.availableTickets.length; i++) {
      this.message += `<li>${i + 1}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price})`
    }
    this.description += this.message
  }

  
  // Write a function on Event named searchTickets that will take in two values (to specify the lower and upper bounds of a price range), and return a list of ticket types available.
  // analogy = filtering between a certain amount
  searchTickets(low, high){
    // tickets: 1. Balcony ($100) 2. Mezzanine ($200) for that particular call. If no tickets are available in that range, it will instead return: No tickets available.
    let count = 0;
    this.message = `<br><strong> - Eligible Tickets: </strong>`;
    for(let i=0; i< this.availableTickets.length; i++){
      if(this.availableTickets[i].price >= low && this.availableTickets[i].price <= high){
        count++;
        this.message += `<li>${count}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price})`;
      }
      else if(count === 0 && i === (this.availableTickets.length-1)){
        this.message = " No tickets available, please update amount"
      }
    }
    this.description += this.message;
  }
}

// class TicketType that can store the name and price of a ticket type
class TicketType {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}


// **** created objects for the events
const GalaEvent = new Event('KLOS Golden Gala','An evening with hollywood vampires');
const WarEvent = new Event('Skillet & Sevendust','Victorious war tour');
const JennyMusicEvent = new Event('Jenny Lewis','On the line tour 2019');


// adding ticket types and prices to events
GalaEvent.addAvailableTickets("human", 299);
GalaEvent.addAvailableTickets("vampire", 99);

WarEvent.addAvailableTickets("General Admission", 25)
WarEvent.addAvailableTickets("Floor Seating", 80)

JennyMusicEvent.addAvailableTickets("Orchestra", 300)
JennyMusicEvent.addAvailableTickets("Mezzanine", 200)
JennyMusicEvent.addAvailableTickets("Balcony", 100)

// create a new array of events
const eventArray = new Array();
// pushing objects into array we created 
eventArray.push(GalaEvent, WarEvent, JennyMusicEvent);
console.log(eventArray); // (3) [Event, Event,Event]
//console.log(eventArray[0]); // accessing first event --> Event {name: "KLOS Golden Gala", description: "An evening with hollywood vampires", availableTickets: Array(2)}

// show all tickets for each events
GalaEvent.allTickets();
WarEvent.allTickets();
JennyMusicEvent.allTickets();

GalaEvent.searchTickets(0,100);
WarEvent.searchTickets(0,100);
WarEvent.searchTickets(0,60);
JennyMusicEvent.searchTickets(0,100);
JennyMusicEvent.searchTickets(0,20);

document.addEventListener('DOMContentLoaded', () => {
  //putting items in the html doc
  let html = '';
  // iterating thru the eventArray, listing them on the html file
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description}`;
  });
  document.querySelector('#event').innerHTML = html;
});

