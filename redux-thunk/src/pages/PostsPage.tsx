import React, { useEffect } from "react";

import Header from "../components/Header";
import PostList from "../components/PostList";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "../redux/posts";

const PostsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPost() as any);
  }, [dispatch]);

  return (
    <div>
      <Header />
      <PostList />
    </div>
  );
};

export default PostsPage;