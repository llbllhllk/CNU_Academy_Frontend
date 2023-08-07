import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import Spinner from "../Spinner";

const PostList = () => {
  // loading은 사용하지 않기 때문에 data만 구조분해할당으로 뺴온다.
  const { data, loading } = useSelector((store: RootState) => store.posts);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
