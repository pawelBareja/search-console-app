
import React from 'react'
import {EventrixProvider} from 'eventrix'
import {eventrix} from './store/services'
import {Home} from './Home'


const App = () =>  {
  
  return (
    <EventrixProvider eventrix={eventrix}>
    <Home/>
    </EventrixProvider>
  );
}

export default App;
