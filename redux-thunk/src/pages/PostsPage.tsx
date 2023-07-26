import React, { useEffect } from "react";

import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { fetchAllPost } from "../redux/posts";
import Header from "../components/Header";
import { RootState, store } from "../redux";
import PostList from "../components/PostList";

const PostsPage = () => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = store.dispatch;

  useEffect(() => {
    dispatch(fetchAllPost());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <PostList />
    </div>
  );
};

export default PostsPage;
