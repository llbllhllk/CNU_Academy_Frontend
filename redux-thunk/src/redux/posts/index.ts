import { fetchPostId } from "./index";
import axios from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchAllPost = createAsyncThunk("posts/fetchAllPost", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
});

export const fetchPostId = createAsyncThunk(
  "posts/fetchPostId",
  async (id: number) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  }
);

// extraReducers action함수를 만들어 주지 않음
// rejected: 실패했을 때(error)
// peding: 데이터가 들어오기 전(loading)
// fullfiled: 정상적으로 데이터가 들어왔을 때(response)
export const posts = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
  } as PostsState,
  reducers: {},
  extraReducers: {
    [fetchAllPost.pending.type]: (state: PostsState) => {
      state.data = [];
      state.loading = true;
    },
    [fetchAllPost.fulfilled.type]: (
      state: PostsState,
      action: PayloadAction<Post[]>
    ) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchPostId.fulfilled.type]: (
      state: PostsState,
      action: PayloadAction<Post>
    ) => {
      const index = state.data.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index === -1) {
        state.data.push(action.payload);
      } else {
        state.data[index] = action.payload;
      }
      state.loading = false;
    },
  },
});
