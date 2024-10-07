import React, { useState } from 'react';
import './App.css';

function App() {

  const [people, setPeople] = useState([
    {
    name: 'jackie chan',
    age: 70,
    url: 'https://en.wikipedia.org/wiki/Jackie_Chan',
    description: "Fang Shilong (born Chan Kong-sang[b]; 7 April 1954), known professionally as Jackie Chan, is a Hong Kong actor, director, writer, producer, martial artist, and stuntman known for his slapstick acrobatic fighting style, comic timing, and innovative stunts, which he typically performs himself"
    },
    {
      name: 'James Bond',
      age: '64',
      url: 'https://en.wikipedia.org/wiki/James_Bond',
      description: 'The James Bond series focuses on the titular character,a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. Since Flemings death in 1964, eight other authors have written authorised Bond novels or novelisations: Kingsley Amis, Christopher Wood, John Gardner, Raymond Benson, Sebastian Faulks, Jeffery Deaver, William Boyd, and Anthony Horowitz.'
    },
    {
      name: 'JTom Cruise',
      age: '62',
      url: 'https://en.wikipedia.org/wiki/Tom_Cruise',
      description: 'Thomas Cruise Mapother IV (born July 3, 1962) is an American actor and producer. Regarded as a Hollywood icon,[1][2][3] he has received various accolades, including an Honorary Palme dOr and three Golden Globe Awards, in addition to nominations for four Academy Awards.'
    }

  ])
  
  people.map(person => {
    person.age
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>People invited to my party</h1>
      </header>
    </div>
  );
}

export default App;
