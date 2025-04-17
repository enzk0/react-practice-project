import React from "react";
import ContactCard from "./ContactCard.jsx";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <h1 className="heading">My Idols :3</h1>
      <ContactCard
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <ContactCard
        name={contacts[1].name}
        img={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <ContactCard
        name={contacts[2].name}
        img={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
      <ContactCard
        name={contacts[3].name}
        img={contacts[3].imgURL}
        phone={contacts[3].phone}
        email={contacts[3].email}
      />
    </div>
  );
}

export default App;
