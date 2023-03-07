import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Countercontext } from '../../context/countercontext';

function Home() {
  // const [counter, setcounter] = useState(0);

  return (
    <>
      <h1>this id home page</h1>
      {/* <p>{counter}</p> */}

      <Countercontext.Consumer>{(data) => <p>{data}</p>}</Countercontext.Consumer>
      <button type="button" onClick={() => {}}>Incriment </button>

    </>
  );
}

export default Home;
