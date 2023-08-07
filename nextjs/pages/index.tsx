import axios from "axios";
import { Post } from "@/interfaces";
import Link from "next/link";

export const getServerSideProps = async () => {
  const { data: posts } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return {
    props: { posts },
  };
};

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <Link
          href="/posts/[id]"
          as={`/posts/${post.id}`}
          key={post.id}
          passHref
          legacyBehavior
        >
          <a>
            <li>{post.title}</li>
          </a>
        </Link>
      ))}
    </ul>
  );
};

export default HomePage;
