import { Event } from "../../entities/Event";
import { API_URL } from "../../variables";

export const FETCH_EVENTS = 'FETCH_EVENTS';


export const fetchEvents = () => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken;

        const response = await fetch(
            `${API_URL}/events.json?auth=` + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            //There was a problem..
            //dispatch({type: FETCH_CHATROOM_FAILED, payload: 'something'})
        } else {
            const data = await response.json(); // json to javascript
            let events: Event[] = []
            for (const key in data) {
                const obj = data[key];
                events.push(new Event(obj.name, obj.organizator, obj.time, obj.location, key))
            }

            console.log("events", events);

            dispatch({ type: FETCH_EVENTS, payload: events })
        }
    };
}
