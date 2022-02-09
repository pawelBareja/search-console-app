import { EventsReceiver } from 'eventrix';

export const loginReciever = new EventsReceiver(
    'Account:login.success',
    (eventName, eventData, stateManager) => {
        stateManager.setState('user.authorized', true);

    }
);

export const logoutReciever = new EventsReceiver(
    'Account:logout.success',
    (eventName, eventData, stateManager) => {
        stateManager.setState('user.authorized', false);

    }
);
