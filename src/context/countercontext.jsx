import React, { createContext } from 'react';

export const Countercontext = createContext(5);
export function CounterProvider({ Children }) {
  return (
    <Countercontext.Provider value={20}>
      {Children}
    </Countercontext.Provider>
  );
}
