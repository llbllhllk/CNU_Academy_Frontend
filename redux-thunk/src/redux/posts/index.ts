import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Declaration Type
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsState {
  data: Post[];
  loading: boolean;
}

// Declaration Action
export const fetchAllPost = createAsyncThunk("posts/fetchAllPost", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
});

// reducer
export const posts = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
  } as PostsState,
  reducers: {},
  extraReducers: {
    [fetchAllPost.pending.type]: (state: PostsState) => {
      state.loading = true;
    },
    [fetchAllPost.fulfilled.type]: (
      state: PostsState,
      action: PayloadAction<Post[]>
    ) => {
      state.data.push(...action.payload);
      state.loading = false;
    },
  },
});
