import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.items.find((post) => post.id.toString() === id));
  console.log("post==", post);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1>{post.id}</h1>
      <h1>{post.userId}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
};

export default DetailPage;
