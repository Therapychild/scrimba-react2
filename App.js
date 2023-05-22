import React from 'react';
import { Header } from './components/Header.js';
import { Card } from './components/Card.js';

export function App(props) {
  console.log(props);

  const locations = props.data.map(location => {
    return (
      <Card
        key={location.name}
        {...location}
      />
    )
  })


  return (
    <main>
      <Header />
      <section className="content">
        {locations}
      </section>
    </main>
  );
}