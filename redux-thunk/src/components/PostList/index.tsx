import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const PostList = () => {
  const { data } = useSelector((store: RootState) => store.posts);

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
