import { useEffect, useState } from "react";
import "./homepage.css";
import axios from "axios";

import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // const res = await axios.get("/api/posts");
      // console.log(res);
      // setPosts(res.data);

      fetch("http://localhost:5000/api/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Homepage;
