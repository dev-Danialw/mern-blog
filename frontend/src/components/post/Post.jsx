import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo ? (
        <img className="postImg" src={post.photo} alt="" />
      ) : (
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{post.createdAt}</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
