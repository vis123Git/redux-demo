import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync } from "../redux/postsSlice";
import { Link } from "react-router-dom";
import styles from "../styles/HomePage.css";
import Navbar from "./Navbar";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPostsAsync());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (postStatus === "succeeded") {
    content = posts.map((post) => (
      <div key={post.id} className="postCard">
        <h2>{post.title.substring(0, 50)}</h2>
        <Link to={`/item/${post.id}`}>Read More...</Link>
      </div>
    ));
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="">
          <div>
            <h3>Social Media For Travellers</h3>
            <div className="search-box">
              <span class="material-symbols-outlined">search</span>
              <input type="text" placeholder="Search here..."></input>
            </div>
            </div>
            <div className="main-container">
              <h1>Posts</h1>
              {content}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
