import { Blog } from "../../entities/Blog";
import { FETCH_BLOGS } from "../actions/blogs.actions";

interface ReduxState {
    blogs: Blog[]
}

const initialState: ReduxState = {
    blogs: [],
}

const blogsReducer = (state: ReduxState = initialState, action: any) => {
    switch (action.type) {
        case FETCH_BLOGS:
            return { ...state, blogs: action.payload }

        default:
            return state;
    }
};

export default blogsReducer;