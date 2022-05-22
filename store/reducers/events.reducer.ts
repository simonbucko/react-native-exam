import { Event } from "../../entities/Event";
import { FETCH_EVENTS } from "../actions/events.actions";

interface ReduxState {
    events: Event[]
}

const initialState: ReduxState = {
    events: [],
}

const eventsReducer = (state: ReduxState = initialState, action: any) => {
    switch (action.type) {
        case FETCH_EVENTS:
            return { ...state, events: action.payload }

        default:
            return state;
    }
};

export default eventsReducer;