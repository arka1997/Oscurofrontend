import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    posts: []
};

export const timelineSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        timelinePosts: (state, action) => {
            const posts = {
                id: nanoid(),
                text: action.payload,
            }
            state.posts.push(posts)
        },
    }
})
//Here the timeSlice has multiple actions like timelinePosts,..,etc. And we are destructuring that and storing them in a variable
export const {timelinePosts} = timelineSlice.actions

export default timelineSlice.reducer