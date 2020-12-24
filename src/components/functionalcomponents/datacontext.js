import {createContext} from 'react';
// creating an channel using which components will communicate with each other
// The 'createContext()' defines an intial value for communication
// this is complex JSON object
// {data}, {{data,callback}}

// sender component will send data

// <DataContext.provider value={data} / {{data,callback}}>
  // <ChildComponent/>
//</DataContext.provider>

export const DataContext = createContext(null);