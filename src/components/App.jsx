import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const contactCards = [];
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    contactCards.push(
      <Card
        key={i} // Remember to add a unique key for each element
        id={i + 1}
        name={contact.name}
        img={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
    );
  }
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contactCards}
      {/* {contacts.map((contact) => (
        <Card
          name={contact.name}
          img={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))} */}
    </div>
  );
}

export default App;
