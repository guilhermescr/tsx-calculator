import { createContext, useContext } from 'react';

export type GlobalContent = {
  result: string;
  setResult: (c: string) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  result: 'Test',
  setResult: () => {}
});

export const useGlobalContext = () => useContext(MyGlobalContext);

// testing this: https://dev.to/madv/usecontext-with-typescript-23ln
