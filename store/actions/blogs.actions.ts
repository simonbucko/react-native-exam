import { Blog } from "../../entities/Blog";
import { API_URL } from "../../variables";

export const FETCH_BLOGS = 'FETCH_BLOGS';


export const fetchBlogs = () => {
    return async (dispatch: any, getState: any) => {
        // const token = getState().user.idToken;

        const response = await fetch(
            `${API_URL}/blogs.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            console.log("there was a problem")
            const data = await response.json();
            console.log(data)
        } else {
            const data = await response.json(); 
            let blogs: Blog[] = []
            for (const key in data) {
                const obj = data[key];
                blogs.push(new Blog(obj.title, obj.text, obj.published, obj.likeCount, obj.commentCount, obj.publisher, key))
            }

            dispatch({ type: FETCH_BLOGS, payload: blogs })
        }
    };
}
