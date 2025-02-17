import "./posts.css";

import Post from "../post/Post";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      <div className="posts">
        {posts?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
