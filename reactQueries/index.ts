import { Blog } from "../entities/Blog";
import { API_URL } from "../variables";
import {useQuery} from "react-query"


export const useGetBlogs = () => {
    const fetchBlogs = async () => {
        const response = await fetch(
            `${API_URL}/blogs.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await response.json();
    }


    const {isLoading, isError, data, error} = useQuery("blogs",fetchBlogs)

    let blogs: Blog[] = []
    for (const key in data) {
        const obj = data[key];
        blogs.push(new Blog(obj.title, obj.text, obj.published, obj.likeCount, obj.commentCount, obj.publisher, key))
    }

    return {isLoading, isError, blogs, error}
}


