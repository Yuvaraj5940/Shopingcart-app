import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>{`hello ${state.email}`}</div>
  );
}

export default Home;
