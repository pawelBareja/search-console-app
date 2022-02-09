import {Eventrix, EventrixDebugger} from 'eventrix'
import {loginReciever, logoutReciever} from './GoogleAccountService'

const recievers = [loginReciever, logoutReciever]


export const initialState = {
    user: {
        authorized: false
    }
}
export const eventrix = new Eventrix(initialState, recievers);

const eventrixDebugger = new EventrixDebugger(eventrix, {live: false});
eventrixDebugger.start()



