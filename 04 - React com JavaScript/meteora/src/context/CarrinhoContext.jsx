import { createContext } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  return (
    <CarrinhoContext.Provider value={{}}>
      {children}
    </CarrinhoContext.Provider>
  );
}
