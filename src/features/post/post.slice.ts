import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
//https://jsonplaceholder.typicode.com/posts

const initialState = {
    posts:[]
}

export const getPosts = createAsyncThunk(
    'posts/getPosts', 
    async (_,{ rejectWithValue , dispatch})=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPosts(res.data))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        setPosts: (state,action)=>{
            state.posts = action.payload
        }
    }, 
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getPosts.fulfilled, (state, action) => {
          // Add user to the state array
          console.log('fullfield')
        })
        builder.addCase(getPosts.pending, (state, action) => {
          // Add user to the state array
          console.log('pending')
        })
        builder.addCase(getPosts.rejected, (state, action) => {
          // Add user to the state array
          console.log('rejected')
        })
       
      },

})

export const {setPosts} = postSlice.actions
export default postSlice.reducer